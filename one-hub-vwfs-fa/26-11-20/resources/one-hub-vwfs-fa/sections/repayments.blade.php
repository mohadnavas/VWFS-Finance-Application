<section v-show="form_step === 3" class="vga-oh-common-containerOuterMain">
<section>


<div class="vga-oh-savn-TD1Outer dealer_Outer_oh_step3">

<div class="container">
    <h1 class="vga-oh-savn-TD1OuterMainHead mb-0 pb-20">Calculate <span>your loan repayments</span></h1>
    <div class="vga-oh-savan-choosemodelOuter">
        

        @include('one-hub-vwfs-fa.partials.repayments_description')

        <div class="vga-oh-savn-TD-steperOuter">

            <div class="col-lg-12">
                <div class="row">
                    <p class="active">01</p>
                    <p class="active">02</p>
                    <p class="active">03 &nbsp; <span>Calculate repayments</span></p>
                    <p>04</p>
                </div>
            </div>

        </div>


    </div>




<div class="container"></div>
<div class="vga-oh-sdk-depositor-dealer-confirm-inner">


    <div class="container pd-lr-sm-0">

        <div class="vga-oh-savan-choosemodelOuter">

            <div class="row">

                <div class="col-lg-8 p0">
                    <div class="vga-oh-sdk-depositor-dealer-confirm-left">
                        <div class="vwfs-ssn-choise-assurance-section">
                            
                        @include('one-hub-vwfs-fa.partials.loan_option_description')

                        <span v-show="error_top_message!=''">
                            <p style="color:red" >@{{error_top_message}}</p>
                        </span>

                        @include('one-hub-vwfs-fa.partials.term_picker')


                        <div class="clearfix"></div>

                        <div class="vwfs-ssn-kiometer-drive-annually my-4" v-show="isChoice">
                            @include('one-hub-vwfs-fa.partials.km_picker')
                            <div class="clearfix"></div>
                        </div>

                        <!--  Loan Term Chooser Section Ends -->
                        <div class="vwfs-ssn-reduce-monthly-repayment-section mt-4 pt-1">
                            <h4>Reduce your monthly repayments</h4>

                            <span v-show="error_message!=''">
                                <p style="color:red" >@{{error_message}}</p>
                            </span>

                            <div class="row">
                                <div class="col-lg-6 position-relative">
                                    @include('one-hub-vwfs-fa.partials.deposit_amount_input')
                                </div>


                                <div class="col-lg-6 position-relative" v-show="isNonChoice">
                                    @include('one-hub-vwfs-fa.partials.balloon_payment_input')
                                </div>

                            </div>
                        </div>
                    <!--  Kilometer per annum Section Ends -->
                        
                    </div>
                     <!--  Choise Assurance Section Ends -->
                </div>
       

                </div>



                <div class="col-lg-4 p0">
                        <!--Repayment Section Starts-->
<div class="vwfs-ssn-repayments-section p4 mb-1">
@include('one-hub-vwfs-fa.partials.repayments_box')
</div>

<div class="clearfix"></div>
<div class="vwfs-ssn-email-download-section my-4">
<div class="row">
    <div class="col-lg-12">
        @include('one-hub-vwfs-fa.partials.email_pdf')
    </div>
    
</div>
</div>
<div class="clearfix"></div>

                   
</div>


<!-- stepper buttons-->

<div class="clearfix"></div>

<div class="vga-oh-savn-td-stepperBtnOuterStepper mt-4">
@include('one-hub-vwfs-fa.partials.proceed_btn')
@include('one-hub-vwfs-fa.partials.back_btn')
<div class="clearfix"></div>
</div>

<!-- stepper buttons-->
            </div>

        </div>

    </div>
    
</div>
</div>

<div class="vga-savan-ChoosemodelDivAfter">



</div>


</div>

</section>
</section>
<div class="clearfix"></div>