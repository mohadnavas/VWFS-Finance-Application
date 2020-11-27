<!--=====================model choose start===================-->
<div class="modal fade" id="vgaOH_ChooseModels" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered vga-oh-savan-modelsPopupOuter" role="document">
        <div class="modal-content vga-oh-sdk-modal-radius">
            <!-- <div class="vga-oh-sdk-testdrive-modal-bt">
              <button type="button" class="btn btn-primary vga-oh-sdk-testdrive-modal-back" data-dismiss="modal">
                  <img src="<?php echo APP_RESOURCE_URL; ?>/test_drive/img/left-arrow-n.svg"> Back
              </button>
          </div> -->
            <h2 class="vga-oh-savn-TD1OuterMainHead">Choose <span>a model</span></h2>
            <div class="modal-body">
                <div class="col-lg-12">
                    <div class="vga-oh-savn-ModelpopupCustRow">

                        <div class="col-md-12" v-show="!activeBrochureLoaded" align="center">
                            <i class="fa fa-circle-o-notch fa-spin" style="font-size: 24px;color: #0099da;"></i>
                        </div>

                        <div v-show="activeBrochureLoaded" data-toggle="modal" data-target="#vgaOH_ChooseModels2" data-dismiss="modal" class="vga-oh-savn-4w2mLayout" v-for="(car_model, index) in car_models" v-bind:id="index" title="Click to select the model" @click.prevent="chooseCarModel(index)" v-if="car_model.testDriveActive" :style="[car_model.name == enquiryDetails.car_details.name ? {'opacity': '0.5'} : {'opacity': '1'}]">
                            <div class="vga-oh-savn-modelPopupListing" v-bind:style="{ background: getColourcode(car_model.paintColour) }">
                                <p :style="{ color: getFontColor(car_model.paintColour)}">@{{ car_model.brochureLabel }}</p>
                                <img v-bind:src="car_model.thumbnailURL" class="img-fluid" @error="getDummyImage">
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <button type="button" class="btn-primary vga-oh-savn-modalpopupCloseBtn" data-dismiss="modal">
                <svg class="" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" role="img">
                    <path d="M20.956 3.985l-.942-.941L12 11.059 3.985 3.044l-.941.941L11.059 12l-8.015 8.015.941.941L12 12.941l8.014 8.015.942-.941L12.941 12z"></path>
                </svg>
                <span>Close</span></button>
        </div>
    </div>
</div>
<!--=====================model choose end======================-->

<!--=====================model variant start===================-->
<div class="modal fade" id="vgaOH_ChooseModels2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered vga-oh-savan-modelsPopupOuter" role="document">
        <div class="modal-content vga-oh-sdk-modal-radius">
            <!-- <div class="vga-oh-sdk-testdrive-modal-bt">
                <button type="button" class="btn btn-primary vga-oh-sdk-testdrive-modal-back" data-toggle="modal" data-target="#vgaOH_ChooseModels" @click.prevent="clearPreference()">
                    <img src="<?php echo APP_RESOURCE_URL; ?>/one-hub-dealer-callback/img/left-arrow-n.svg"> Back
                </button>
            </div> -->

            <div class="row ">
                <div class="col-lg-12">
                    <div class="vh-backBtn vhBack_spacing resultPosBack">
                        <a href="#" data-toggle="modal" data-target="#vgaOH_ChooseModels" @click.prevent="clearPreference()" class="" title="Close">
                            <img src="<?php echo env('APP_RESOURCE_MEDIA_URL'); ?>/one-hub-dealer-callback/img/pop-left-arrow.svg">Back</a>
                    </div>
                </div>
            </div>

            <h2 class="vga-oh-savn-TD1OuterMainHead">Choose <span>a @{{ enquiryDetails.car_details.brochureLabel }}</span></h2>
            <div class="modal-body">
                <div class="col-lg-12">
                    <div class="vga-oh-savn-ModelpopupCustRow">

                        <div class="vga-oh-savn-4w2mLayout" v-for="(preference, index) in enquiryDetails.car_details.preference">
                            <div class="vga-oh-savn-modelPopupListing" v-bind:style="{ background: getColourcode(preference.preferencePaintColour) }">
                                <p :style="{ color: getFontColor(preference.preferencePaintColour)}">@{{preference.value}}</p>
                                <img v-bind:src="preference.imageURL" class="img-fluid" @click="choosePreference(index)" data-dismiss="modal" @error="getDummyImage">
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <button type="button" class="btn-primary vga-oh-savn-modalpopupCloseBtn" data-dismiss="modal">
                <svg class="" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" role="img">
                    <path d="M20.956 3.985l-.942-.941L12 11.059 3.985 3.044l-.941.941L11.059 12l-8.015 8.015.941.941L12 12.941l8.014 8.015.942-.941L12.941 12z"></path>
                </svg>
                <span>Close</span></button>
        </div>
    </div>
</div>
<!--=====================model variant end===================-->