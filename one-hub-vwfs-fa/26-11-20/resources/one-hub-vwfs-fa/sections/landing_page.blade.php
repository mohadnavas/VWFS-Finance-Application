<section v-show="form_step === 1" class="vga-oh-common-containerOuterMain">
    <div class="container w-100">
        <!--VWFS main step 1 choose model-->
        <section>
            <div class="vga-oh-savn-TD1Outer dealer_Outer_oh_step3">

                <div class="container">
                    <h1 class="vga-oh-savn-TD1OuterMainHead mb-0 pb-20"><span>Create your</span> tailored finance solution</h1>

                    <div class="vga-oh-savan-choosemodelOuter">
                        

                        <p class="vga-oh-savn-headDescp w-100">
                            We are here to help you create an individually tailored finance solution that’s perfect for your budget,
                            your lifestyle and your new vehicle. Simply run the numbers with no commitments or send your enquiry to a dealer who’ll be able to help with finalising your application.        

                        </p>
                        <div class="vga-oh-savn-TD-steperOuter">

                            <div class="col-lg-12">
                                <div class="row">
                                    <p class="active">01&nbsp; <span>Confirm a vehicle</span></p>
                                    <p class="">02</p>
                                    <p>03</p>
                                    <p>04</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="vga-oh-sdk-depositor-dealer-confirm-inner">


                    <div class="container pd-lr-sm-0">

                        <div class="vga-oh-savan-choosemodelOuter">

                            <div class="row">

                                <div class="col-lg-6 pd-lr-md-0">
                                    <div class="vga-oh-sdk-depositor-dealer-confirm-left">

                                        <div class="vga-oh-sdk-depositor-dealer-confirm-lefthead"> Confirm  <span> your vehicle </span> </div>


                                        <div class="vga-oh-savn-modelListingMain" v-bind:style="{ background: getColourcode(car_configurator_data.car_background_color) }" data-toggle="modal">

                                            <div class="vga-oh-sdk-depositor-specialhead-out vga-oh-sdk-depositor-specialhead-inn">

                                                <div class="vga-oh-sdk-depositor-specialhead" v-if="car_configurator_data.online_discount && car_configurator_data.car_font_color=='#000'">
                                                    <img src="https://one-hub-assets.s3-ap-southeast-2.amazonaws.com/common-assets/certified-retailer-black.svg" class="img-fluid">
                                                    <span v-html="car_configurator_data.online_discount_banner">Special online <span>only offer</span></span> @{{car_configurator_data.online_discount_discalimer_icon}}
                                                </div>

                                                <div class="vga-oh-sdk-depositor-specialhead vga-oh-sdk-depositor-specialhead-white" v-if="car_configurator_data.online_discount && car_configurator_data.car_font_color!='#000'">
                                                    <img src="https://one-hub-assets.s3-ap-southeast-2.amazonaws.com/common-assets/certified-retailer-wt.svg" class="img-fluid">
                                                    <span v-html="car_configurator_data.online_discount_banner">Special online <span>only offer</span></span> @{{car_configurator_data.online_discount_discalimer_icon}}
                                                </div>


                                            </div>

                                            <h4 class="p-30 pd-sm" v-bind:style="{ color: getFontColor(car_configurator_data.car_font_color) }"> <span><span class="confirm-vehicle-name">@{{ car_configurator_data.model_name }}</span> @{{ car_configurator_data.sub_varient_name }}</span></h4>
                                            <!----> <img v-if="car_configurator_data.selected_model_img !='' && car_configurator_data.selected_model_img !=null && car_configurator_data.selected_model_img !=undefined" :src="car_configurator_data.selected_model_img" class="img-fluid no-cur" style="" @error="getDummyImage">
                                            <img v-else src="https://one-hub-assets.s3-ap-southeast-2.amazonaws.com/common-assets/no-image.png" class="img-fluid no-cur" style="">

                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    
                                    <div class="vga-oh-sdk-depositor-dealer-confirm-right">

                                        <div class="vwfs-ssn-finance-offer-name"><span><img src="https://one-hub-assets.s3-ap-southeast-2.amazonaws.com/vwfs/img/add.svg"></span> MY20 Finance Offer will get applied later</div>
                                        <div class="clearfix"></div>
                                        
                                        <div class="vga-oh-sdk-depositor-mid-inner">
                                            <div class="vga-oh-sdk-depositor-mid-left">
                                                <div class="vga-oh-sdk-depositor-mid-color">
                                                    <img alt="" class="img-fluid" :src="car_configurator_data.color_tile_img">
                                                </div>
                                            </div>
                                            <div class="vga-oh-sdk-depositor-mid-text wd-55">@{{car_configurator_data.color_name}}</div>
                                            <div class="vga-oh-sdk-depositor-mid-right wd-25">(MRRP) $@{{priceFormatter(car_configurator_data.color_price)}} ^</div>
                                        </div>

                                        <div class="vga-oh-sdk-depositor-mid-inner">
                                            <div class="vga-oh-sdk-depositor-mid-left">
                                                <div class="vga-oh-sdk-depositor-mid-color">
                                                    <img alt="" class="img-fluid" :src="car_configurator_data.Interior_tile_image">
                                                </div>
                                            </div>
                                            <div class="vga-oh-sdk-depositor-mid-text wd-55">@{{car_configurator_data.interior_name}}</div>
                                            <div class="vga-oh-sdk-depositor-mid-right wd-25">(MRRP) $@{{priceFormatter(car_configurator_data.interior_price)}} ^</div>
                                        </div>

                                        
                                       

                                        <div :class="[user_selected_options.length == 0 ? 'vga-oh-sdk-depositor-mid-inner-white' :'vga-oh-sdk-depositor-mid-inner-white mid-inner-border-bottom']">
                                            <div class="vga-oh-sdk-depositor-mid-left">
                                                <div class="vga-oh-sdk-depositor-mid-left-img">
                                                    <img src="https://one-hub-assets.s3-ap-southeast-2.amazonaws.com/common-assets/engine.svg">
                                                </div>
                                            </div>
                                            <div class="vga-oh-sdk-depositor-mid-text wd-55">@{{ car_configurator_data.model_name }} @{{ car_configurator_data.sub_varient_name }}
                                            <span> @{{car_configurator_data.transmission_desc}}</span></div>
                                            <div class="vga-oh-sdk-depositor-mid-right wd-25">(MRRP) $@{{priceFormatter(car_configurator_data.mrrp)}} ^</div>
                                       
                                     </div>

                                        <div v-if="user_selected_options.length > 0" :class="[checkOptionsLength() ? 'vga-oh-sdk-depositor-mid-inner' :'vga-oh-sdk-depositor-mid-inner-white']">
                                            <div class="MTOPmD">
                                            <div class="vga-oh-sdk-depositor-mid-left">
                                                <div class="vga-oh-sdk-depositor-mid-left-img">
                                                    <img src="https://one-hub-assets.s3-ap-southeast-2.amazonaws.com/vwfs/img/add.svg">
                                                </div>
                                            </div>

                                            <div class="vga-oh-sdk-depositor-mid-text wd-55">Options</div>
                                            <div class="vga-oh-sdk-depositor-mid-right wd-25">(MRRP) $15 000 ^</div>
                                            <!--<div class="vwfs-ssn-veh-option">
                                                <ul>
                                                    <li v-for="(option,index) in user_selected_options"> <span class="vwfs-ssn-option-list">@{{option.name}}</span> <div class="vga-oh-sdk-depositor-mid-right wd-25">(MRRP) $@{{priceFormatter(option.price)}} ^</div></li>
                                                    <div class="clearfix"></div>
                                                </ul>
                                                <div class="clearfix"></div>
                                            </div>-->
                                            </div>
                                        </div>

                                        <div class="vgaInfoboxomD">
                                            <div class="vwfsMoreOptionsmD"> 
                                                <a href="javascript:void(0)" name="" class="infobox-opener">Show full Options</a>
                                            </div> 
                                            <div class="vgaInfoboxomD-benefits infobox-benefits" style="display:none;">
                                                
                                                <div class="vwfsOptionUllismD PadLftmD vga-oh-savn-modelPopupListingDisclaimer">
                                                    <div  class="scrollbar-inner vga-oh-disclaimerContentpopup">
                                                        <div class="vwfs-ssn-veh-option">
                                                            <div class="vwfsHeadermD">
                                                                <div class="vgaInfoHeadmD vga-oh-sdk-depositor-mid-text wd-55">Options</div>
                                                                <div class="vga-oh-sdk-depositor-mid-right wd-25">(MRRP) $15 000 ^</div>
                                                            </div>
                                                            <ul>
                                                                <li>
                                                                    <span class="vwfs-ssn-option-list">Sound &amp; Comfort package</span>
                                                                    <div class="vga-oh-sdk-depositor-mid-right wd-25">(MRRP) $8 000 ^</div>
                                                                </li>
                                                                
                                                                <li>
                                                                    <span class="vwfs-ssn-option-list">Innovision package</span>
                                                                    <div class="vga-oh-sdk-depositor-mid-right wd-25">(MRRP) $8 000 ^</div>
                                                                </li>
                                                        
                                                                <li>
                                                                    <span class="vwfs-ssn-option-list">Anti-theft alarm system with interior monitoring, backup horn and towing protection</span>
                                                                    <div class="vga-oh-sdk-depositor-mid-right wd-25">(MRRP) $8 000 ^</div>
                                                                </li>
                                                        
                                                                <li>
                                                                    <span class="vwfs-ssn-option-list">2nd battery (75 Ah, AGM) with cut-off relay and battery monitoring</span>
                                                                    <div class="vga-oh-sdk-depositor-mid-right wd-25">(MRRP) $8 000 ^</div>
                                                                </li>
                                                        
                                                                <li>
                                                                    <span class="vwfs-ssn-option-list">Adaptive Cruise Control (ACC) up to 210km/h</span>
                                                                    <div class="vga-oh-sdk-depositor-mid-right wd-25">(MRRP) $8 000 ^</div>
                                                                </li>
                                                                <li>
                                                                    <span class="vwfs-ssn-option-list">Lane Keep system (Lane Assist)</span>
                                                                    <div class="vga-oh-sdk-depositor-mid-right wd-25">(MRRP) $8 000 ^</div>
                                                                </li>
                                                                <li>
                                                                    <span class="vwfs-ssn-option-list">Park Assist with Sensor-based Side Protection, includes front and rear park distance control</span>
                                                                    <div class="vga-oh-sdk-depositor-mid-right wd-25">(MRRP) $8 000 ^</div>
                                                                </li>
                                                                <li>
                                                                    <span class="vwfs-ssn-option-list">LED main headlamps with LED separate daytime running light and LED rear combination lamps</span>
                                                                    <div class="vga-oh-sdk-depositor-mid-right wd-25">(MRRP) $8 000 ^</div>
                                                                </li>
                                                                
                                                                <div class="clearfix"></div>
                                                            </ul>
                                                            <div class="clearfix"></div>
                                                        </div>
                                                    </div>
                                                  </div>
                                                    <div>
                                                        <a href="javascript:void(0)" class="closebuttonoption"><img src="https://one-hub-assets.s3-ap-southeast-2.amazonaws.com/vwfs/img/close.svg"></a>
                                                </div> 
                                            </div> 
                                        </div>
                                        <div class="clearfix"></div> 


                                        <div class="vga-oh-sdk-depositor-mid-inner">
                                            <div class="vga-oh-sdk-depositor-mid-left" v-if="checkOptionsLength() && 1==2">
                                                <div class="vga-oh-sdk-depositor-mid-left-img">
                                                    <img src="https://one-hub-assets.s3-ap-southeast-2.amazonaws.com/common-assets/add.svg">
                                                </div>
                                            </div>
                                            <div class="vga-oh-sdk-depositor-mid-text" v-if="checkOptionsLength()">Options</div>


                                            <div class="vga-oh-sdk-depositor-mid-bottom" v-for="(addonOptions, index) in car_configurator_data.addons" v-if="addonOptions.price > 0">
                                                <div class="vga-oh-sdk-depositor-mid-text-bottom">@{{addonOptions.name}}</div>
                                                <div class="vga-oh-sdk-depositor-mid-right">(MRRP) $@{{priceFormatter(addonOptions.price)}} ^</div>
                                            </div>

                                            <!-- <div class="vga-oh-sdk-depositor-mid-bottom">
                                               <div class="vga-oh-sdk-depositor-mid-text-bottom">Extra One</div>
                                               <div class="vga-oh-sdk-depositor-mid-right">(MRRP) $*PRICE*</div>
                                           </div> -->

                                        </div>

                                        <div class="vga-oh-sdk-depositor-mid-last">
                                            <div class="vga-oh-sdk-depositor-mid-last-left" v-if="car_configurator_data.online_discount">Online Order Special Offer <span>Vehicle Price</div>
                                            <div class="vga-oh-sdk-depositor-mid-last-left" v-else><span>Vehicle Price</div>
                                            <div v-show="polk_success && price_calculated" class="vga-oh-sdk-depositor-mid-last-right">$@{{priceFormatter(drive_away_tot)}}*</div>
                                            <div v-show="!polk_success" class="vga-oh-sdk-depositor-mid-last-right" style="color:red;font-size: 14px;">@{{polk_error_messgae}}</div>
                                            <!-- <div class="vga-oh-sdk-depositor-mid-last-inc">inc. @{{car_configurator_data.booking_currency+priceFormatter(car_configurator_data.booking_amount)}} deposit <sup>†</sup></div> -->
                                        </div>

                                    </div>
                                </div>
                            </div>
                        
 <!-- stepper buttons-->
 <div class="first-stepper-container  p-sm-10">
    <div class="col-lg-12">
        <div class="vga-oh-savn-td-custrowOut75px">

            <!-- web bt  start -->
            <div class="vga-oh-savn-td-stepperBtnOuterStepper sm-none">
                <button class="btn-primary defaultBorderLessBtnLeft mR10px wi-sm-100" @click="buildAgain"> <img src="https://one-hub-assets.s3-ap-southeast-2.amazonaws.com/troc-depositor/img/back-left.svg" alt=""> Back</button>

                <button class="btn-primary defaultBlueBtn mL10px fRyt wi-sm-100 mt-sm-10" v-if="form_step==1" @click.prevent="next()" v-show="form_step < 3">Proceed to finance</button>
                <i v-show="form_submit_flag" class="fa fa-circle-o-notch fa-spin ajaxSpinnerStep3" style="font-size:14px"></i>

            </div>
            <!-- web bt  end -->

            <!-- mob bt  start -->

            <div class="vga-oh-savn-td-stepperBtnOuterStepper lg-none vwfs-ssm-sm-proceed-finance">
                <button class="btn-primary defaultBlueBtn mL10px fRyt wi-sm-100 " v-if="form_step==1" @click.prevent="next()" v-show="form_step < 3">Proceed to finance</button>

                <button class="btn-primary defaultBorderLessBtnLeft mR10px wi-sm-100 mt-sm-10" @click="buildAgain"> <img src="https://one-hub-assets.s3-ap-southeast-2.amazonaws.com/troc-depositor/img/back-left.svg" alt=""> Back</button>
            </div>

            <!-- mob bt  end -->
            <div class="clearfix"></div>

        </div>

    </div>
    
</div>


                        </div>

                    </div>
                    
                </div>

            </div>

            <div class="vga-savan-ChoosemodelDivAfter">

            </div>


    </div>

</section>
<!--VWFS main step 1 choose model-->
</div>
</section>
<div class="clearfix"></div>