<?php

namespace Packages\AmericanRoulette\Rules;

use Illuminate\Contracts\Validation\Rule;
use Packages\AmericanRoulette\Helpers\Roulette;

class BetsAreValid implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $betsAmounts = array_values($value);
        $minBet = min($betsAmounts);
        $maxBet = max($betsAmounts);

        return $minBet >= config('american-roulette.min_bet') &&
            $maxBet <= config('american-roulette.max_bet') &&
            count(array_intersect_key($value,Roulette::BETS)) == count($value);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return __('This bet is not allowed.');
    }
}
