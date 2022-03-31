<?php

namespace App\Console\Commands;

use App\Models\sportBet;
use App\Models\sportBetComponent;
use App\Models\sportOdd;
use Illuminate\Console\Command;
use Carbon\Carbon;
use Illuminate\Support\Facades\Http;
use phpDocumentor\Reflection\Types\Null_;

class getResults extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'match:results';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }


    public function getFixtureResults($fixtureId)
    {
        $responseFixture = Http::withHeaders([
            'x-rapidapi-key' => env('API_SPORT_KEY', false),
            'x-rapidapi-host' => 'v3.football.api-sports.io'
        ])->get('https://v3.football.api-sports.io/fixtures',[
            'id' => 239625
        ]);

        //faire un test, si le statut du match est FT
        $status = $responseFixture['response'][0]['fixture']['status']['short'];
        if($status=="FT")
        {
            $res = ['winners' => [$responseFixture['response'][0]['teams']['home']['winner'],$responseFixture['response'][0]['teams']['away']['winner']],
                    'goals' => $responseFixture['response'][0]['goals'],
                    'score' => $responseFixture['response'][0]['score']];

            //Pour chaque fixture, je mets le resultat labas
            //FIXME: try catch
            sportOdd::where('id_fixture', $fixtureId->id_fixture)->update(['result'=> $res]);
        }
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $tickets = sportBet::where('isActive', 1)->get()->toArray();
        foreach($tickets as $ticket){
            $bets = sportBetComponent::where('ticketId', $ticket['betId'])->get()->toArray();
            foreach($bets as $bet){
                $test = sportOdd::where('id', $bet['betId'])->get()->toArray();
                $toto = json_decode($test[0]['result'], true);
                dump($toto);
            }
            exit();
        }


        $activeBets = sportBet::where('isActive', 1)->get('betId')->toArray();
        foreach($activeBets as $new_array){
            $final_array[] = implode(',', $new_array);
        }
        $activeComponents = sportBetComponent::whereIn('ticketId', $final_array)->get()->toArray();

        dump($activeComponents);
        exit();

        //je recupère les matchs qui sont deja passe ou le resultat n'est pas encore remplies
        $fixtures = sportOdd::where('game_date', '>=', Carbon::now('Europe/Stockholm')
            )->where('result', '')->groupBy('id_fixture')->get('id_fixture');

        //pour chaque fixture, je regarde son result
        foreach($fixtures as $fixture){
            $this->getFixtureResults($fixture);
        }



        return 0;
    }
}
