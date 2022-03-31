<?php

namespace App\Rules;

class BetIsWon
{

    private $betType;
    private $betValue;
    private $betResult;

    public function __construct($betType, $betValue, $betResult)
    {
        $this->betType = $betType;
        $this->betValue = $betValue;
        $this->betResult = json_decode($betResult, true);
    }


    public function validate()
    {
        switch($this->betType){
            case 1:
                $this->strategy_1();
                break;
            case 2:
                $this->strategy_2();
                break;
        }
    }

    //Match Winner
    public function strategy_1(){
        if($this->betValue == "Home"){
            return $this->betResult['winners'][0] == true ? true : false;
        }
        elseif($this->betValue == "Away"){
            return $this->betResult['winners'][1] == true ? true : false;
        }
        else{
            return ( ($this->betResult['winners'][1] == false) && ($this->betResult['winners'][0] == false)) ? true : false;
        }
    }

    //Home/Away
    public function strategy_2(){
        if($this->betValue == "Home"){
            return $this->betResult['winners'][0] == true ? true : false;
        }
        else {
            return $this->betResult['winners'][1] == true ? true : false;
        }
    }

    //Second Half Winner
    public function strategy_3(){
        /*if($this->betValue == "Home"){
            return $this->betResult['score']['halftime'] == true ? true : false;
        }
        elseif($this->betValue == "Away"){
            return $this->betResult['score']['halftime'] == true ? true : false;
        }
        else{
            return ( ($this->betResult['score']['halftime'] == false) && ($this->betResult['score'][0] == false)) ? true : false;
        }*/
    }


}