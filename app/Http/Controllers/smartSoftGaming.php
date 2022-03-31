<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Route;

class smartSoftGaming extends Controller
{
    function login()
    {
        $response = [
            'UserName' => "testuser12345",
            'SessionId' => "eccd8979-09a9-496c-aa45345ff2a5d9ba",
            'ClientExternalKey' => "testuser12345_key",
            'PortalName' => "shelbycasino",
            'CurrencyCode' => "USD"
        ];
        return response()->json($response, 200);
    }

    function index(Request $request){
        return view('testBis');
    }
}
