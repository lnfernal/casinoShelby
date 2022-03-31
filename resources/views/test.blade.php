<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    <!-- Styles -->
    <style>
        /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
        html {
            line-height: 1.15;
            -webkit-text-size-adjust: 100%
        }

        body {
            margin: 0;
            background: #ffffff;
            font-family: "Arial";
        }

        a {
            background-color: transparent
        }

        [hidden] {
            display: none
        }

        html {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
            line-height: 1.5
        }

        *,
        :after,
        :before {
            box-sizing: border-box;
            border: 0 solid #e2e8f0
        }

        a {
            color: inherit;
            text-decoration: inherit
        }

        .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .integration-divider {
            padding-top: 5vh;
        }

        .title {
            font-size: 36px;
            font-weight: 600;
            color: #033156;
            white-space: pre-line;
            text-align: center;
            line-height: 44px;
        }

        .subtitle {
            margin-bottom: 20px;
            margin-top: 13px;
            opacity: 0.75;
            font-size: 16px;
            font-weight: 500;
            color: #506b80;
            white-space: pre-line;
            text-align: center;
        }

        .passbase {
            margin: 30px 40px;
            height: 25px;
        }

        .hosted-link-button {
            background-color: #000;
            border: none;
            color: #eee;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            border-radius: 4px;
        }
    </style>

    <!-- Import Passbase Statement -->
    <script type="text/javascript" src="https://unpkg.com/@passbase/button@v3/button.js"></script>
    <title>Verify your Identity</title>
</head>

<body class="antialiased">
<img class="img-fluid passbase" src="https://passbase.com/assets/images/logo.png" alt="Passbase" />

<div class="container">
    <p class="title">Vérifie ton idendité maintenant</p>
    <h2>Commencez la verification</h2>
    <!--<p class="subtitle">
        Below is the HTML & Javascript integration:
    </p>-->
    <!-- 1.1. This is the Passbase Component -->
    <div id="passbase-button"></div>
    <!--
    <div class="integration-divider"></div>
    <h2>Hosted Link</h2>
    <p class="subtitle">
        Or you can forward users via a custom button to your hosted link:
    </p>-->

    <!-- 1.2. This is a link to your url-->
    <!--<a class="hosted-link-button" href="{{ \App\Http\Controllers\SportListController::encode_personal_link() }}" alt="" target="_blank">Custom Link</a>
    -->
</div>

<script type="text/javascript">
    // This is the logic for the passbase component
    const element = document.getElementById("passbase-button")
    const apiKey = "45AbiaXyMdKoLtL8Rfht2rXjB8oehocUnosTc44Dhlo9WPvNXMCTZ9w06HtMViQ8";

    Passbase.renderButton(element, apiKey, {
        onFinish: (identityAccessKey) => {
            console.log("Verification completed with identityAccessKey: ", identityAccessKey)
        },
        onError: (errorCode) => {
            console.log("Error: ", errorCode)
        },
        onSubmitted: (identityAccessKey) => {
            console.log("Verification submitted with identityAccessKey: ", identityAccessKey)
        },
        onStart: () => {}
    })


    // You can prefill your user's email here to skip the step. Left empty for demo
    const userEmail = '{{ Auth::user()->email }}'
    Passbase.renderButton(element, apiKey, {
        prefillAttributes: {
            email: userEmail,
        }
    })
</script>
</body>

</html>