<?php

namespace Packages\Payments\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Packages\Payments\Models\WithdrawalMethod;

class WithdrawalMethodController extends Controller
{
    public function index()
    {
        //$user = Auth::user();
        //dump($user);
        /*if($user->kyc != 2){
            return redirect('/');
        }
        else{
            return WithdrawalMethod::enabled()
                ->with('paymentMethod', 'paymentMethod.gateway')
                ->orderBy('id')
                ->get()
                ->map
                ->append('payment_currencies');
        }*/
        return WithdrawalMethod::enabled()
            ->with('paymentMethod', 'paymentMethod.gateway')
            ->orderBy('id')
            ->get()
            ->map
            ->append('payment_currencies');

    }
}
