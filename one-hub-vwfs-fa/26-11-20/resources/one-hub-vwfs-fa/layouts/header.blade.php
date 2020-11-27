    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no viewport-fit=cover">
    <meta name="msapplication-config" content="none" />
    <meta name="description" content="Do you have a question about a    car or offer? Simply choose the nature of your enquiry, select a model & one of our VW dealers will be in touch with all the information you need.">
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="csrf-token" content="<?php echo csrf_token(); ?>">
    <meta name="format-detection" content="telephone=no">
    <!-- <title>Online Order | Volkswagen</title> -->
    <link rel="shortcut icon" href="<?php echo env('APP_RESOURCE_MEDIA_URL'); ?>/one-hub-vwfs-fa/img/favicon.ico">
    <!-- Latest compiled and minified CSS boostrap & other css-->
    <link href="<?php echo APP_RESOURCE_URL; ?>/one-hub-vwfs-fa/css/bootstrap.min.css" rel="stylesheet" media="screen">
    <link href="<?php echo APP_RESOURCE_URL; ?>/one-hub-vwfs-fa/css/custom.css" rel="stylesheet" media="screen">
    <link href="<?php echo APP_RESOURCE_URL; ?>/one-hub-vwfs-fa/css/font-awesome.css" rel="stylesheet" media="screen">
    <link href="<?php echo APP_RESOURCE_URL; ?>/one-hub-vwfs-fa/css/style.css" rel="stylesheet" media="screen">
    <link href="<?php echo APP_RESOURCE_URL; ?>/one-hub-vwfs-fa/css/owl.carousel.min.css" rel="stylesheet" media="screen">
    <link href="<?php echo APP_RESOURCE_URL; ?>/one-hub-vwfs-fa/css/one-hub-contact.css" rel="stylesheet" media="screen">
    <link href="<?php echo APP_RESOURCE_URL; ?>/one-hub-vwfs-fa/css/scrollbarCustom.css" rel="stylesheet" media="screen">
    <link href="<?php echo APP_RESOURCE_URL; ?>/one-hub-vwfs-fa/css/jquery.fancybox.min.css" rel="stylesheet" media="screen">
    <!--<link href="css/jquery.fancybox.min.css" rel="stylesheet" media="screen">-->
    <!-- Latest compiled and minified CSS boostrap & other css-->

    <!-- Latest compiled and minified JavaScript bootsstrap-->
    <!-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script> -->

    <script type="text/javascript">
        var GLOBAL_APP_DEBUG = false;
        <?php if (env('APP_ENV') == 'local' || env('APP_ENV') == 'staging') { ?>
            var GLOBAL_APP_DEBUG = true;
        <?php } ?>

        var stripe_publishable_key_global = '{{ env("CAR_DEPOSITOR_STRIPE_PUBLISHABLE_KEY") }}';
    </script>

    <style>
        [v-cloak] {
            visibility: hidden;
        }

        /* [v-cloak]>* {
            display: none;
        }

        [v-cloak]::before {
            content: " ";
            display: block;
            position: absolute;
            width: 80px;
            height: 80px;
            background-image: url('https://vga-psimp.herokuapp.com/one-hub-offers-and-pricing/img/vw-logo.png');
            background-size: cover;
            left: 50%;
            top: 50%;
        } */
        .circleRing {
            height: 128px;
            width: 128px;
            border-radius: 50%;
            background: url(https://one-hub-assets.s3-ap-southeast-2.amazonaws.com/one-hub-offers-and-pricing/img/vw-logo.png) 50% 50% no-repeat;
            position: relative;
            top: 50%;
            left: 50%;
            right: 0;
            bottom: 0;
            -webkit-transition: height .25s ease, width .25s ease;
            transition: height .25s ease, width .25s ease;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
        }

        #loader {
            position: fixed;
            left: 0px;
            top: 0px;
            width: 100%;
            height: 100%;
            z-index: 9999999;
            /* background: url(../img/loader.gif) 50% 50% no-repeat; */
            background-color: #fff !important;
            opacity: 1;
        }

        .circleRing:before,
        .circleRing:after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            border-radius: 50%;
            border: 15px solid #dbf0f9;
        }

        .syClass:focus+span {
            border: solid 1px #001e50 !important;
        }

        .vga-oh-sdk-depositor-mid-inner-white {
            width: 100%;
            height: auto;
            float: left;
            border-bottom: solid #fff 0.5px;
            /*    padding: 18px 0;*/
            padding-top: 18px;
        }
    </style>