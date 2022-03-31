<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class sportBet extends Model
{
    use HasFactory;

    protected $table = 'bets';
    protected $fillable = ['userId', 'betAmount', 'betOdd', 'isActive', 'result'];

    function __construct(array $attributes = array())
    {
        parent::__construct($attributes);
        return $this;
    }
}
