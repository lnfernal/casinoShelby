<?php

namespace App\Http\Controllers;

use App\Helpers\Queries\GameHistoryQuery;
use App\Models\Game;
use App\Models\sportBet;
use App\Models\sportBetComponent;
use App\Models\sportOdd;
use App\Models\League;
use App\Models\User;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use App\Rules\BalanceIsSufficient;
use App\Services\AccountService;
use App\Services\UserService;
use Illuminate\Support\Facades\Redirect;


class SportListController extends Controller
{
    function index()
    {
        $user = Auth::user();

        return view("test");
    }

    public function test(){
        $response = [
            'UserName' => "userNameTest",
            'SessionId' => "SessionIdTest",
            'ClientExternalKey' => "testKey",
            'PortalName' => "shelbycasino",
            'CurrencyCode' => "USD"
        ];
        return response()->json($response, 200);
    }

    public static function encode_personal_link()
    {
        $yourPassbaseLink = "https://verify.passbase.com/mathias";

        $hash_map = array(
            'prefill_attributes' => array(
                'email' => 'testuser+34567865456@passbase.com',
                'country' => 'de'
            ),
        );

        $encodedAttributes = base64_encode(json_encode($hash_map));
        $encodedLink = $yourPassbaseLink."?p=".$encodedAttributes;
        return $encodedLink;
    }

    public function user(Request $request, GameHistoryQuery $query)
    {
        $data = array();
        $userid = $request->user()->account->user_id;
        $bets = sportBet::where('userId', $userid)->orderBy('updated_at', 'asc')->get();
        foreach($bets as $bet){
            $components = sportBetComponent::where('ticketId', $bet->betId)->get();
            $tmp = array();
            foreach($components as $component){
                $details = sportOdd::where('id', $component->betId)->get();
                array_push($tmp, $details);
            }
            array_push($data, array($bet, $tmp));
        }
        return $data;
    }

    public function show()
    {
        $today = Carbon::now();

        //get les matchs qui n'ont pas encore commence
        $dates = sportOdd::where('game_date', '>', $today)->orderBy('game_date', 'asc')
            ->distinct()->get()->toArray();

        return $dates;

    }

    public function validate(Request $request, array $rules, array $messages = [], array $customAttributes = [])
    {

        if(Auth::check()){
            //User logged in

            $amount = -1 * ($request->betAmount);

            $userId = Auth::user()->id;

            $user = User::where('id', $userId)->get()->first();

            $rule = new BalanceIsSufficient($user, $amount);

            if(!$rule->passes()){
                return $rule->message();
            }
            else{
                $accountService = new AccountService($user->account);
                //TODO: TEMPORAIRE FIXME
                $game = Game::first()->get()->first();
                $accountService->createTransaction($game, $amount);
                //Je rajoute le ticket
                $bet = sportBet::create(array('userId'=> $userId,'betAmount'=>$amount,
                    'betOdd' => $request->betOdd, 'isActive' => 1,'result' => 0));
                //je rajoute les bets qui composent mon ticket
                $bet->save();
                foreach($request->betComponent as $component){
                    $tmp = sportBetComponent::create(array('ticketId'=>$bet->id,'betId' =>$component['id']));
                    $tmp->save();
                }

                return Redirect::back()->with('message','Operation Successful !');
            }

        }

        else{
            //Message d'erreur, veuillez vous connecte
            return "non";
        }
    }
}
