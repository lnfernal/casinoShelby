<?php

namespace App\Console\Commands;

use App\Models\sportOdd;
use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Client;
use Illuminate\Http\Request;
use App\Models\League;

class ApiFootball extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'apifootball:run';

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

    public function rapidapi($url,$data = NULL) {

        $response = Http::withHeaders([
            'x-rapidapi-key' => env('API_SPORT_KEY', false),
            'x-rapidapi-host' => 'v3.football.api-sports.io'
        ])->get('https://v3.football.api-sports.io/'.$url, $data);

        return $response;
    }

    public function getTeams($id){

        //afficher le nom d'une fixture en particulier
        $responseFixture = Http::withHeaders([
            'x-rapidapi-key' => env('API_SPORT_KEY', false),
            'x-rapidapi-host' => 'v3.football.api-sports.io'
        ])->get('https://v3.football.api-sports.io/fixtures',[
            'id' => $id
        ]);

        $team1 = $responseFixture['response'][0]['teams']['home']['name'];
        $logoTeam1 = $responseFixture['response'][0]['teams']['home']['logo'];
        $team2 = $responseFixture['response'][0]['teams']['away']['name'];
        $logoTeam2 = $responseFixture['response'][0]['teams']['away']['logo'];

        return [$team1, $team2, $logoTeam1, $logoTeam2];
    }

    public function getAvailableOdds(){

        //Get active Leagues
        $leagueIds = League::where('isActive', 1)->get();

        foreach($leagueIds as $league){

            $response = Http::withHeaders([
                'x-rapidapi-key' => env('API_SPORT_KEY', false),
                'x-rapidapi-host' => 'v3.football.api-sports.io'
            ])->get('https://v3.football.api-sports.io/odds',[
                'season' => 2021,
                'league' => $league->leagueId,
                'date' => '2022-03-27',
                //'bet' => 1,
                'bookmaker' => 6
            ]);
            foreach($response['response'] as $fixtureOdd){
                $teams = $this->getTeams($fixtureOdd['fixture']['id']);
                //['game_date', 'saison', 'league', 'id_fixture', 'teamA', 'teamB', 'id_bet', 'id_bet_val', 'odd']
                foreach($fixtureOdd['bookmakers'][0]['bets'] as $bet){
                    foreach($bet['values'] as $oddVal){
                        $odd = sportOdd::create(array('game_date' => $fixtureOdd['fixture']['date'],
                            'saison' => $fixtureOdd['league']['season'], 'league' => $fixtureOdd['league']['name'],
                            'id_fixture' => $fixtureOdd['fixture']['id'],'teamA' => $teams[0],'teamB' => $teams[1],
                            'id_bet' => $bet['id'], 'bet_category_name' => $bet['name'],
                            'id_bet_val' => $oddVal['value'], 'odd' => $oddVal['odd'], 'logoTeam1' => $teams[2], 'logoTeam2' => $teams[3],
                            'result' => ""));
                        $odd->save();
                    }
                }
            }
        }
    }

    function get_leagues(){
        $response = Http::withHeaders([
            'x-rapidapi-key' => env('API_SPORT_KEY', false),
            'x-rapidapi-host' => 'v3.football.api-sports.io'
        ])->get('https://v3.football.api-sports.io/leagues',[
            'season' => 2021
        ]);
        foreach($response['response'] as $fixtureOdd){
            dump($fixtureOdd['league']['id']);
            dump($fixtureOdd['league']['name']);
            dump("\n");
        }
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        /*$responseFixture = Http::withHeaders([
            'x-rapidapi-key' => env('API_SPORT_KEY', false),
            'x-rapidapi-host' => 'v3.football.api-sports.io'
        ])->get('https://v3.football.api-sports.io/leagues', ['season' => 2021]);

        foreach($responseFixture['response'] as $response){
            if($response['league']['name'] == "La Liga"){
                dump($response);
            }
        }*/
        //$var = League::create(array('leagueId' => 140, 'name'=>"La Liga", 'isActive'=>true, 'logo'=>"https://media.api-sports.io/football/leagues/140.png"));
        //$var->save();

        //$this->get_leagues();
        $this->getAvailableOdds();

        /*
        $dates = sportOdd::select
        ('game_date')->distinct()->get();
        foreach($dates as $date){
            print($date->game_date);
            print("\n");
            //la liste des matchs à cette date
            $fixtures = sportOdd::where('game_date', $date->game_date)->distinct('id_fixture')->get();
            foreach($fixtures as $fixture){
                print("\t" . $fixture->teamA . "  " . $fixture->teamB);
                print("\n");
                $idBets = sportOdd::where('game_date', $date->game_date)->where('id_fixture', $fixture->id_fixture)->distinct('id_bet')->get();
                foreach($idBets as $bet){
                    print("\t\t" . $bet->bet_category_name);
                    print("\n");
                    $odds = sportOdd::where('game_date', $date->game_date)->where('id_fixture', $fixture->id_fixture)->where('id_bet', $bet->id_bet)->get();
                    foreach($odds as $odd){
                        print("\t\t\t" . $odd->id_bet_val . "  " . $odd->odd);
                        print("\n");
                    }
                }
            }
        }*/

        /*
         * Un job Cron qui va tourner une fois par jour
         * la première fois, je vais prendre une semaine, après je vais recuperer les matchs
         * du jour j+7
         * donc pour les leagues, je recupère les matchs que je vais stocker en bdd
         *
         */

        /*
         * Au niveau des tables,
         * Une table avec les league et un param si cette league est activé ou pas
         * une table odd pour chaque fixture, les odd
         */

        return 0;

    }
}
