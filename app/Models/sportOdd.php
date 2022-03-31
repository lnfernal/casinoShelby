<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class sportOdd extends Model
{
    use HasFactory;

    protected $table = 'sports_odds_list';
    protected $fillable = ['game_date', 'saison', 'league', 'id_fixture', 'teamA', 'teamB', 'id_bet', 'bet_category_name', 'id_bet_val', 'odd', 'logoTeam1', 'logoTeam2', 'result'];

    public $timestamps = false;

    function __construct(array $attributes = array())
    {
        parent::__construct($attributes);
        return $this;
    }

}
