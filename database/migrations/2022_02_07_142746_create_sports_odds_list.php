<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSportsOddsList extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sports_odds_list', function (Blueprint $table) {
            $table->id();
            $table->timestamp("game_date" );
            $table->string('saison',100);
            $table->string('league', 100);
            $table->integer('id_fixture');
            $table->string('teamA');
            $table->string('teamB');
            $table->integer('id_bet');
            $table->string('bet_category_name');
            $table->string('id_bet_val');
            $table->float('odd');
            $table->string('logoTeam1');
            $table->string('logoTeam2');
            $table->string('result', 255);
            //$table->json('odd');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sports_odds_list');
    }
}
