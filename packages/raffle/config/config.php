<?php

return [
    'version' => '1.0.4',

    'display_count_home_page' => env('RAFFLE_DISPLAY_COUNT_HOME_PAGE', 3),
    'display_count' => env('RAFFLE_DISPLAY_COUNT', 8),
    'load_count' => env('RAFFLE_LOAD_COUNT', 4),

    // bots config
    'bots' => [
        // should correspond to a valid scheduling method without parameters
        // https://laravel.com/docs/6.x/scheduling#schedule-frequency-options
        'frequency'     => env('RAFFLE_BOTS_FREQUENCY', 'hourly'),
        'min_count'     => env('RAFFLE_BOTS_MIN_COUNT', 1),
        'max_count'     => env('RAFFLE_BOTS_MAX_COUNT', 10),
        'min_tickets'   => env('RAFFLE_BOTS_MIN_TICKETS', 1),
        'max_tickets'   => env('RAFFLE_BOTS_MAX_TICKETS', 2),
    ],
];
