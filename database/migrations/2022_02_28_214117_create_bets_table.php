<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bets', function (Blueprint $table) {
            $table->bigIncrements('betId');
            $table->timestamps();
            $table->integer('userId');
            $table->float('betAmount');
            $table->float('betOdd');
            $table->integer('isActive'); //0 oui, 1 non, 2 en attente d'etre paye
            $table->integer('result'); // 0, perdant, 1 gagnant
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bets');
    }
}
