<section v-show="form_step === 4" class="vga-oh-common-containerOuterMain">
    <div class="container w-100">
        <!--VWFS main step 1 choose model-->
        <section>
            <div class="vga-oh-savn-TD1Outer dealer_Outer_oh_step3">

                <div class="container">
                    <h1 class="vga-oh-savn-TD1OuterMainHead mb-0 pb-20"><span>Select</span> your dealer</h1>

                    <div class="vga-oh-savan-choosemodelOuter">


                        <p class="vga-oh-savn-headDescp w-100">
                            Find a dealer near you, this will be the dealer that handles your finance application after you submit it.
                        </p>
                        <div class="vga-oh-savn-TD-steperOuter">

                            <div class="col-lg-12">
                                <div class="row">
                                    <p class="active">01</p>
                                    <p class="active">02</p>
                                    <p class="active">03</p>
                                    <p class="active">04&nbsp; <span>Select a dealer</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="vga-oh-sdk-depositor-dealer-confirm-inner">


                    <div class="container pd-lr-sm-0">

                        <div class="vga-oh-savan-choosemodelOuter">



                            <div class="vga-oh-savn-td-choosedealerbefore">
                                <div class="form-group">
                                    <label class="Oh_black">Find a dealer near you</label>
                                    <div class="autocomplete autocomplete_space_btm">
                                        <div>
                                            <input type="text" id="localitySearch" v-model="dealer_info.postcode_details.name" @keyup="postcodeSearch()" placeholder="Please enter your postcode or suburb" class="form-control vwTB"> 
                                            <i v-cloak v-show="dealer_info.postcode_ajax_flag" class="fa fa-circle-o-notch fa-spin ajaxSpinner" style="font-size: 25px;"></i>
                                            <label v-if="dealer_info.validation_errors.postcode_not_found" class="text-danger">@{{dealer_info.validation_messages.postcode_not_found}}</label>
                                            
                                            <div v-if="dealer_info.show_filter" class="vw-roj-find-dealer-section panel-footer vwPOsearchOuter">
                                                <ul v-cloak class="list-group">
                                                    <li class="list-group-item" v-for="postcode in dealer_info.postcode_results" @click="selectPostocode(postcode.postcode,postcode.label,postcode.locality,postcode.state)">
                                                        @{{postcode.label}}
                                                    </li>
                                                </ul>
                                            </div>
                                            <!---->
                                        </div> 
                                        <img src="https://one-hub-assets.s3-ap-southeast-2.amazonaws.com/one-hub-dealer-callback/img/magnifier.svg" alt="" class="vga-oh-roj-td-dealerSearchIcn"> <img src="https://one-hub-assets.s3-ap-southeast-2.amazonaws.com/one-hub-dealer-callback/img/locate.svg" alt="" class="vga-oh-roj-td-dealerLocIcn">
                                        <!---->
                                    </div>
                                    <div class="vw-Oh-roj-recommended-dealer-section vw_Oh_select_dlrship_main_wrapper">
                                        <!---->
                                        <div id="accordion_new" class="vw_Oh_select_dlrship_List_accordian">
                                            <div v-if="dealer_info.dealer_ajax_flag" class="vw_Oh_select_dlrship_main_wrapper"><strong>Loading Dealers List...</strong></div>
                                            <div v-if="!dealer_info.postcode_ajax_flag && !dealer_info.dealer_ajax_flag" class="panel-group">
                                                <div class="panel" v-for="(dealer,index) in dealer_info.dealer_list">
                                                    <div class="vga-oh-sdk-depositor-dealer-certified" v-if="dealer.isPrimary">
                                                        <img src="https://one-hub-assets.s3-ap-southeast-2.amazonaws.com/common-assets/certified-retailer.svg" class="img-fluid">
                                                    </div>
                                                    <div class="panel-heading vw_OH_panel_head_bold clearfix">
                                                        <div class="panel-title">
                                                            <div class="vga-oh-sdk-depositor-dealer-recommended" v-if="dealer.isPrimary">Recommended</div>
                                                            <div>
                                                                <label class="OH_customRadio">
                                                                    <p>@{{dealer.dealerName}}</p>
                                                                    <p class="vga-oh-roj-depositor-address">@{{dealer.dealerAddress+', '+dealer.dealerState+', '+dealer.dealerPostcode}}</p>
                                                                    <input @click="chooseDealer(index)" type="radio" :checked="dealer.isPrimary" name="radio"> 
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <!---->
                                </div>
                            </div>



                            <div class="vga-oh-savn-td-stepperBtnOuterStepper">
                                <button @click.prevent="prev()" id="ohprevBtn" class="btn-primary defaultBorderLessBtnLeft mR10px wi-sm-100 sm-none" style=""><img src="https://one-hub-assets.s3-ap-southeast-2.amazonaws.com/troc-depositor/img/back-left.svg" alt="">Back 
                                </button> 
                                <button @click.prevent="apply_for_finance()" class="btn-primary defaultBlueBtn mL10px fRyt wi-sm-100 mt-sm-10" :disabled="!dealer_info.dealer_list.length || dealer_info.dealer_info_ajax_flag">Proceed to your enquiry</button> 
                                <div class="clearfix"></div>

                                <button @click.prevent="prev()" id="ohprevBtn" class="btn-primary defaultBorderLessBtnLeft mR10px wi-sm-100 desk-none-roj" style=""><img src="https://one-hub-assets.s3-ap-southeast-2.amazonaws.com/troc-depositor/img/back-left.svg" alt="">Back 
                                </button>
                            </div>	




                            <!-- stepper buttons-->



                        </div>

                    </div>

                </div>

            </div>

            <!--<div class="vga-savan-ChoosemodelDivAfter">
 
             </div> -->


    </div>

</section>
<!--VWFS main step 1 choose model-->
</div>
</section>
<div class="clearfix"></div>