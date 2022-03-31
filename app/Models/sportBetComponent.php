<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class sportBetComponent extends Model
{
    use HasFactory;

    protected $table = 'bets_component';
    protected $fillable = ['ticketId', 'betId'];

    public $timestamps = false;

    function __construct(array $attributes = array())
    {
        parent::__construct($attributes);
        return $this;
    }

}
