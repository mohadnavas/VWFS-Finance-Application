
<section v-show="form_step === 2" class="vga-oh-common-containerOuterMain" id="yourDetails">
    <div class="container">
        <!--test drive main step 1 choose model-->
        <section>
            <div class="vga-oh-savn-TD1Outer dealer_Outer_oh_step3">
                <h1 class="vga-oh-savn-TD1OuterMainHead mb-0 pb-20"><span>Choose</span> what's right for you</h1>
                
                <div class="vga-oh-savan-choosemodelOuter">
                   
                    <!-- <p class="vga-oh-savn-headDescp">No question is too big or small. Tell us what you need and we will get back to you.</p> -->

                    <div class="dlr-call_qst_title" id="callbackForm">

                        <p class="vga-oh-savn-headDescp w-100">No matter whether you’re buying your Volkswagen for business or pleasure,
                             we have an excellent range of flexible options for you to choose from. By helping you select the right option,
                             we can even help save you money as well as time.
                            </p>

                    </div>


                    <div class="vga-oh-savn-TD-steperOuter">
                        <div class="col-lg-12">
                            <div class="row">
                                <p class="active">01</p>
                                <p class="active">02 &nbsp; <span> Choose a loan</span></p>
                                <p>03</p>
                                <p>04</p>
                            </div>
                        </div>
                    </div>



                    <div class="vga-savan-ChoosemodelDivAfter">
                        <div class="col-lg-12">
                            <div class="vga-oh-savn-td-custrowOut75px">
                                <div class="col-lg-12 p0">
                                    <!-- Your contact details-->
                                    <div class="vw-OH_dealer_form_prs_wrapper">
                                        <div>
                                            <form>
                                                <div class="_inner_vw-OH_dealer_form_prs_child">
                                                    <div class="row">
                                                        <div class="col-lg-8 col-md-12 col-sm-12 pl-lg-3 pl-md-3 pl-sm-0">
                                                            <div class="form-_vw-OH_dealer_prs_group">
                                                             <div class="vwfs-ssn-choose-loan">
                                                                 <div>
                                                                 <h4>What type of loan you are looking for?</h4>
                                                                 <div class="col p-0">
                                                                     <div class="vwfs-customRadio-session">
                                                                 <label class="vwfs-customRadio"> Personal loan
                                                                    <input type="radio" name="radio"  v-model="loan_type" class="loantypeC"  value="consumerLoan">
                                                                    <span class="checkmark"></span>
                                                                 </label>
                                                                </div>
                                                                
                                                                <div class="vwfs-customRadio-session">
                                                                 <label class="vwfs-customRadio"> Business loan
                                                                    <input type="radio" name="radio"  v-model="loan_type" value="chattelMortgage">
                                                                    <span class="checkmark"></span>
                                                                 </label>
                                                                </div>
                                                                 </div>
                                                                 <div class="clearfix"></div>
                                                                </div>
                                                                
                                                                <div class="mt-3" >
                                                                    <h4>What would you like to at the end of the loan term?</h4>
                                                                    <p>Tailor a Customer Loan to own the car sooner,
                                                                       or choose Volkswagen Choice and decide if you want to trade-in, return or retain the car at the end of your term.
                                                                        </p>
                                                                    <div class="col p-0">
                                                                        <div class="vwfs-customRadio-session">
                                                                    <label class="vwfs-customRadio"> Own the vehicle (Customer Loan)
                                                                       <input type="radio"  name="radi2o" id="dealer220225" class="loantypeCh" value="" v-model="loan_type_choice">
                                                                       <span class="checkmark"></span>
                                                                    </label>
                                                                   </div>
                                                                   <div class="vwfs-customRadio-session" v-show="finance_data==true">
                                                                    <label class="vwfs-customRadio"> Decide later (Volkswagen Choice)
                                                                       <input type="radio"  name="radi2o" id="dealer220225" value="_choice"  v-model="loan_type_choice">
                                                                       <span class="checkmark"></span>
                                                                    </label>
                                                                   </div>
                                                                    </div>
                                                                    <div class="clearfix"></div>
                                                                   </div>
                                                                   
                                                             </div>
                                                             <div class="clearfix"></div>

                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                    <!--  Your contact details -->




                                </div>
                            </div>
                        </div>


                        <!-- stepper buttons-->
                        <div class="row">
                            <div class="col-lg-12">
                                <div>

                                    <!-- web bt  start -->
                                    <div class="vga-oh-savn-td-stepperBtnOuterStepper sm-none">
                                        <button class="btn-primary defaultBorderLessBtnLeft  wi-sm-100" @click.prevent="prev()" v-show="!form_submit_flag"> <img src="https://one-hub-assets.s3-ap-southeast-2.amazonaws.com/troc-depositor/img/back-left.svg" alt=""> Back</button>

                                        <button class="btn-primary defaultBlueBtn mL10px fRyt wi-sm-100 mt-sm-10" v-if="1==1"  v-show="form_step < 4" v-on:click="choose_loan_assign()"  :disabled="form_submit_flag" tabindex="8">Proceed to repayments</button>
                                        <i v-show="form_submit_flag" class="fa fa-circle-o-notch fa-spin ajaxSpinnerStep3" style="font-size:14px"></i>

                                    </div>
                                    <!-- web bt  end -->



                                    <!-- mob bt  start -->

                                    <div class="vga-oh-savn-td-stepperBtnOuterStepper lg-none padd-lr-6h">
                                        <button class="btn-primary defaultBlueBtn mL10px fRyt wi-sm-100 " v-if="1==1"  v-show="form_step < 4" v-on:click="choose_loan_assign()" :disabled="form_submit_flag" tabindex="8">Proceed to repayments</button>

                                        <button class="btn-primary defaultBorderLessBtnLeft  wi-sm-100 mt-sm-10" @click.prevent="prev()" v-show="!form_submit_flag"> <img src="https://one-hub-assets.s3-ap-southeast-2.amazonaws.com/troc-depositor/img/back-left.svg" alt=""> Back</button>
                                    </div>

                                    <!-- mob bt  end -->



                                </div>



                            </div>
                        </div>


                        <div class="clearfix"></div>

                        <!--<hr>-->



                    </div>
                    <!-- stepper buttons-->
                </div>
            </div>

        </section>
        <!--test drive main step 1 choose model-->
    </div>
</section>
<div class="clearfix"></div>