<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class League extends Model
{
    use HasFactory;

    protected $fillable = ['leagueId', 'name', 'isActive', 'logo'];

    public $timestamps = false;

    function __construct(array $attributes = array())
    {
        parent::__construct($attributes);
        return $this;
    }
}
