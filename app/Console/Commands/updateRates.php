<?php

namespace App\Console\Commands;

use Binance\API;
use Illuminate\Console\Command;
use Packages\Payments\Models\DepositMethod;
use Packages\Payments\Models\WithdrawalMethod;
use Packages\Payments\Services\PaymentService;
use Packages\Payments\Services\CoinpaymentsPaymentService;


use phpDocumentor\Reflection\Type;

class updateRates extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'rate:update';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update Rates of cryptocurrencies to USD using API';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

        $api = new API();
        $methodsDeposit = DepositMethod::all();
        $methodsWithdraw = WithdrawalMethod::all();
        //Depot
        foreach($methodsDeposit as $method){
            if($method->currency != "USD"){
                try {
                    $price = $api->price($method->currency."USDT");
                    $method->rate = $price;
                }
                catch (\Exception $e){
                    $method->rate = 0;
                }
                $method->save();
            }
        }

        //Retrait
        foreach($methodsWithdraw as $method){
            if($method->currency != "USD"){
                try {
                    $price = $api->price($method->currency."USDT");
                    $method->rate = $price;
                }
                catch (\Exception $e){
                    $method->rate = 0;
                }
            }
            $method->save();
        }

        return 0;
    }
}
