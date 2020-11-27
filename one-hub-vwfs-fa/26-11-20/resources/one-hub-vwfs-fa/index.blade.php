@extends('one-hub-vwfs-fa.main')

@section('title', 'Finance Services | Volkswagen')

@section('header')
@include('one-hub-vwfs-fa.layouts.header')
@stop


@section('content')

<!-- <body> -->
<!-- @ include('one-hub-dealer-callback.common.menu') -->
<main>

    <div id="vwfs-holder-div" v-cloak>
        <div id="loader" v-show="!is_car_configure_data_set">
            <div class="circleRing"></div>
        </div>
        <div id="vwContents1">
            <div id="stepperForm" v-if="data_not_found==0">
                <div v-show="layout == 'home'">
                    <!-- @ include('one-hub-vwfs-fa.common.stepper-title')  -->
                    @include('one-hub-vwfs-fa.sections.landing_page')
                    @include('one-hub-vwfs-fa.sections.choose_loan')
                    @include('one-hub-vwfs-fa.sections.repayments')
                    @include('one-hub-vwfs-fa.sections.dealer_selection')         
                    <!-- @ include('one-hub-vwfs-fa.sections.section-6') -->
                </div>

                <div v-show="layout == 'thankyou'">
                    <!-- @ include('one-hub-vwfs-fa.sections.section-6') -->
                </div>
                @include('one-hub-vwfs-fa.common.privacy-policy')
            </div>
            {{-- <div style="height: 258px;text-align: center;" v-if="data_not_found==1">
                <h4 style="margin-top: 167px;">NO DATA FOUND</h4>
            </div> --}}
        </div>
    </div>

    @include('one-hub-vwfs-fa.common.disclaimer')

</main>
<!-- </body> -->
@stop



@section('footer')
<!-- @ include('one-hub-dealer-callback.layouts.footer') -->
@include('one-hub-vwfs-fa.layouts.footer-script')
@stop