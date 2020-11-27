function getBrowserResolutionBreakpoint() {
    var breakpoints = {
        'mobile': '(max-width: 767px)',
        'tablet portrait': '(min-width: 767px) and (max-width: 959px)',
        'tablet landscape': '(min-width: 960px) and (max-width: 1200px)',
        'desktop': '(min-width: 1200px)'
      };

      // Check if matchMedia API exists
      var matchMediaIsPossible = typeof window.matchMedia !== 'undefined';

      var matchbreakpoint = "";

      if (matchMediaIsPossible) {
        Object.keys(breakpoints).forEach(function(breakpoint) {
            var mediaQuerySize = window.matchMedia(breakpoints[breakpoint]);
            // Set the initial breakpoint on page load.
            if (mediaQuerySize.matches && matchbreakpoint == "") {

                if(breakpoint == 'mobile') {
                    matchbreakpoint = String(window.innerWidth);
                }
                else if (breakpoint == 'tablet portrait') {
                    matchbreakpoint = '767';
                }
                else if (breakpoint == 'tablet landscape') {
                    matchbreakpoint = '960';
                }
                else if (breakpoint == 'desktop') {
                    matchbreakpoint = '1200';
                }

            }
        });
      }

      return matchbreakpoint;
}
function getAddOnPrice()
{
    var add_on_price = app.car_configurator_data.color_price;
    // drive_away_price = app.car_configurator_data.mrrp+app.car_configurator_data.color_price;
    $.each(app.car_configurator_data.addons, function(key, value) {
     
        add_on_price = add_on_price+value.price;
      });
      return String(add_on_price);
}
/* page load D6*/

function VWBasic_Pageload(){

    let CarlineId = undefined;
    let CarlineName = app.car_configurator_data.model_name;
    let salesGroupId = undefined;
    let salesGroupName = undefined;
    let pageName     = 'Confirm your vehicle';
    var ApplicationID = "VWLocalAUOnlineOrderD6";
   

    var orientation = screen.msOrientation || (screen.orientation || screen.mozOrientation || {}).type;
    var ResolutionOrientation = "h";
    if (orientation === "portrait-secondary" || orientation === "portrait-primary") {
        ResolutionOrientation = 'v';
    }

    
    var vwdata = window.vwdata = window.vwdata || [];
    vwdata.push({
        eventInfo: {
                    eventAction : 'VWBasic_Pageload',
                    pageId :  window.location.href.replace(/(^\w+:|^)\/\//, 'www.'),
                    pageName : pageName,
                    contentLabels : undefined,
                    contentId : undefined,
                    pageCategory : undefined,
                    templateType : undefined,
                    sectionName:undefined
                },
        environment: {
                    applicationId : ApplicationID,          // Page Based
                    featureAppId : undefined,
                    language : 'en',
                    country : 'AU'
                },
        user: {
                    loginStatus : false,
                    browserResolutionHeight : String(window.innerHeight),
                    browserResolutionWidth : String(window.innerWidth),
                    browserResolutionBreakpoint : getBrowserResolutionBreakpoint(),
                    browserResolutionOrientation : ResolutionOrientation
                },
        personalization: {
                    status : false,
                    placeholderId : undefined,
                    contentId : undefined,
                    activityId : undefined,
                    activityName : undefined,
                    experienceId:undefined,
                    experienceName:undefined,
                    offerId:undefined,
                    offerName:undefined
                },

        configuration: {
                    BodyTypeName:undefined,
                    CarlineId : CarlineId,
                    CarlineName : CarlineName,
                    SalesgroupId : salesGroupId,
                    SalesgroupName : salesGroupName,
                    EquipmentlineName : undefined,
                    ModelId:undefined,
                    ModelName:undefined

        }



    });

    if(GLOBAL_APP_DEBUG == true)
    {
        console.log(vwdata.getEventList());
    }


}
/*
VWBasic_VehicleStep_Load
*/
function VWBasic_VehicleStep_Load(stepNumber=1,stepName=''){

    var ApplicationID = "VWLocalAUOnlineOrderD6";

    let pageName = undefined;

    if(stepNumber == 1)
    {
        pageName     = 'Confirm your vehicle';
    }
    if(stepNumber == 2)
    {
         pageName     = 'Your details';
    }
    if(stepNumber == 3)
    {
         pageName     = 'Select your dealer';
    }
    if(stepNumber == 4)
    {
         pageName     = 'Confirm order';
    }
    if(stepNumber == 5)
    {
         pageName     = 'Order placed';
    }
    let informationBnr =app.enquiryDetails.dealer.code!=''?app.enquiryDetails.dealer.code:undefined;
    let informationName =app.enquiryDetails.dealer.name!=''?app.enquiryDetails.dealer.name:undefined;
    let informationDepartment ='sales';
    let informationZIP = app.enquiryDetails.postcode_details.code!=''?String(app.enquiryDetails.postcode_details.code):undefined;
    let CarlineId = undefined;
    let CarlineName = app.car_configurator_data.model_name;
    let salesGroupId = undefined;
    let salesGroupName = app.car_configurator_data.sub_varient_name;  
    let ModelName = app.car_configurator_data.model_display_name;


    var orientation = screen.msOrientation || (screen.orientation || screen.mozOrientation || {}).type;
    var ResolutionOrientation = "h";
    if (orientation === "portrait-secondary" || orientation === "portrait-primary") {
        ResolutionOrientation = 'v';
    }



    
    let PriceType ='Gross Price';
    let PriceRateCurrency = 'AUD';
    let PriceRateTotal = String(app.car_configurator_data.mrrp) ; //PriceRateTotal = <Total value of vehicle including the $500 deposit, minus paint if that is additional cost>
    let PriceTotalCurrency ='AUD';
    let PriceTotalBasic = String(app.car_configurator_data.mrrp) ;//PriceTotalBasic = <Total value of vehicle including the $500 deposit, minus paint if that is additional cost>
    let PriceTotalAdditional = getAddOnPrice();
   // let PriceTotalTotal = String(parseInt(PriceTotalBasic) + parseInt(PriceTotalAdditional));//PriceTotalTotal = <Total value of vehicle including the $500 deposit and any included paint options pricing>
    let PriceTotalTotal   = String(app.car_configurator_data.mrdp) ;;

    PriceTotalAdditional = PriceTotalAdditional;
   // PriceTotalTotal      = PriceTotalTotal;


    

    var vwdata = window.vwdata = window.vwdata || [];
    vwdata.push({


        eventInfo: {

            eventAction : 'VWBasic_VehicleStep_Load',
            pageId : window.location.href.replace(/(^\w+:|^)\/\//, 'www.').split("#")[0] , 
            pageName : pageName,
            contentLabels : undefined,
            contentId : undefined,
            pageCategory : undefined,
            templateType : undefined,
            sectionName:undefined
        },


        environment: {

            applicationId : ApplicationID,          // Page Based
            featureAppId : undefined,
            language : 'en',
            country : 'AU'

        },


        user: {

            loginStatus : false,
            browserResolutionHeight : String(window.innerHeight),
            browserResolutionWidth : String(window.innerWidth),
            browserResolutionBreakpoint : getBrowserResolutionBreakpoint(),
            browserResolutionOrientation : ResolutionOrientation

        },


        personalization: {

            status : false,
            placeholderId : undefined,
            contentId : undefined,
            activityId : undefined,
            activityName : undefined,
            experienceId:undefined,
            experienceName:undefined,
            offerId:undefined,
            offerName:undefined

        },

        configuration: {


            BodyTypeName:undefined,
            CarlineId : CarlineId,
            CarlineName : CarlineName,
            SalesgroupId : salesGroupId,
            SalesgroupName : salesGroupName,
            EquipmentlineName : undefined,
            ModelId:undefined,
            ModelName:ModelName,

            PriceType : PriceType,
            PriceTypeParameter : undefined,
            PriceRateCurrency : PriceRateCurrency,
            PriceRateType : undefined,
            PriceRateBasic : undefined,
            PriceRateAdditional : undefined,
            PriceRateTotal : PriceRateTotal,
            PriceTotalCurrency : PriceTotalCurrency,
            PriceTotalBasic : PriceTotalBasic,
            PriceTotalAdditional : PriceTotalAdditional,
            PriceTotalTotal : PriceTotalTotal,

        },


        partner: {

            informationBnr : informationBnr,
            informationName : informationName,
            informationDepartment : informationDepartment,
            informationZIP : informationZIP

        },


        process: {

            Name : 'Online Order',
            StepName : stepName,
            StepNumber : String(stepNumber)

        }

    });


    if(GLOBAL_APP_DEBUG == true)
    {
        console.log(vwdata.getEventList());
    }

}


function VWBasic_VehicleFormStep_Load(stepNumber=1,stepName=''){

    var ApplicationID = "VWLocalAUOnlineOrderD6";
    //let pageName     = 'Confirm your vehicle';
    let pageName = undefined;
    
    if(stepNumber == 1)
    {
        pageName     = 'Confirm your vehicle';
    }
    if(stepNumber == 2)
    {
         pageName     = 'Your details';
    }
    if(stepNumber == 3)
    {
         pageName     = 'Select your dealer';
    }
    if(stepNumber == 4)
    {
         pageName     = 'Confirm order';
    }
    if(stepNumber == 5)
    {
         pageName     = 'Order placed';
    }
    let informationBnr =app.enquiryDetails.dealer.code!=''?app.enquiryDetails.dealer.code:undefined;
    let informationName =app.enquiryDetails.dealer.name!=''?app.enquiryDetails.dealer.name:undefined;
    let informationDepartment ='sales';
    let informationZIP = app.enquiryDetails.postcode_details.code!=''?String(app.enquiryDetails.postcode_details.code):undefined;
    let CarlineId = undefined;
    let CarlineName = app.car_configurator_data.model_name;
    let salesGroupId = undefined;
    let salesGroupName = app.car_configurator_data.sub_varient_name;  
    let ModelName = app.car_configurator_data.model_display_name;


    var orientation = screen.msOrientation || (screen.orientation || screen.mozOrientation || {}).type;
    var ResolutionOrientation = "h";
    if (orientation === "portrait-secondary" || orientation === "portrait-primary") {
        ResolutionOrientation = 'v';
    }



    
    let PriceType ='Gross Price';
    let PriceRateCurrency = 'AUD';
    let PriceRateTotal = String(app.car_configurator_data.mrrp) ; //PriceRateTotal = <Total value of vehicle including the $500 deposit, minus paint if that is additional cost>
    let PriceTotalCurrency ='AUD';
    let PriceTotalBasic = String(app.car_configurator_data.mrrp) ;//PriceTotalBasic = <Total value of vehicle including the $500 deposit, minus paint if that is additional cost>
    let PriceTotalAdditional = getAddOnPrice();
   // let PriceTotalTotal = String(parseInt(PriceTotalBasic) + parseInt(PriceTotalAdditional));//PriceTotalTotal = <Total value of vehicle including the $500 deposit and any included paint options pricing>
    let PriceTotalTotal   = String(app.car_configurator_data.mrdp) ;;

    PriceTotalAdditional = PriceTotalAdditional;
   // PriceTotalTotal      = PriceTotalTotal;


    var vwdata = window.vwdata = window.vwdata || [];
    vwdata.push({


        eventInfo: {

            eventAction : 'VWBasic_VehicleFormStep_Load',
            pageId : window.location.href.replace(/(^\w+:|^)\/\//, 'www.') , 
            pageName : pageName,
            pageCategory : undefined,
            templateType : undefined,
            sectionName:undefined

        },


        environment: {

            applicationId : ApplicationID, 
            language : 'en',
            country : 'AU'

        },


        user: {

            loginStatus : false,
            browserResolutionHeight : String(window.innerHeight),
            browserResolutionWidth : String(window.innerWidth),
            browserResolutionBreakpoint : getBrowserResolutionBreakpoint(),
            browserResolutionOrientation : ResolutionOrientation

        },


        personalization: {

            status : false,
            placeholderId : undefined,
            contentId : undefined,
            activityId : undefined,
            activityName : undefined,
            experienceId:undefined,
            experienceName:undefined,
            offerId:undefined,
            offerName:undefined

        },


        configuration: {

           


            BodyTypeName:undefined,
            CarlineId : CarlineId,
            CarlineName : CarlineName,
            SalesgroupId : salesGroupId,
            SalesgroupName : salesGroupName,
            EquipmentlineName : undefined,
            ModelId:undefined,
            ModelName:ModelName,

            PriceType : PriceType,
            PriceTypeParameter : undefined,
            PriceRateCurrency : PriceRateCurrency,
            PriceRateType : undefined,
            PriceRateBasic : undefined,
            PriceRateAdditional : undefined,
            PriceRateTotal : PriceRateTotal,
            PriceTotalCurrency : PriceTotalCurrency,
            PriceTotalBasic : PriceTotalBasic,
            PriceTotalAdditional : PriceTotalAdditional,
            PriceTotalTotal : PriceTotalTotal,

        },


        partner: {

            informationBnr : informationBnr,
            informationName : informationName,
            informationDepartment : informationDepartment,
            informationZIP : informationZIP

        },


        form: {

            FormType : 'prebooking',
            FormName : "Online Order",
            FormVersion : "1",
            FormStart : true ,

        },


        process: {

            Name : 'Online Order',
            StepName : stepName,
            StepNumber : String(stepNumber)

        }
    });

    if(GLOBAL_APP_DEBUG == true)
    {
        console.log(vwdata.getEventList());
    }


}
function VWBasic_VehicleFormCTA_Click(){

    var ApplicationID = "VWLocalAUOnlineOrderD6";
    let pageName     = 'Confirm order';
    let informationBnr =app.enquiryDetails.dealer.code!=''?app.enquiryDetails.dealer.code:undefined;
    let informationName =app.enquiryDetails.dealer.name!=''?app.enquiryDetails.dealer.name:undefined;
    let informationDepartment ='sales';
    let informationZIP = app.enquiryDetails.postcode_details.code!=''?String(app.enquiryDetails.postcode_details.code):undefined;
    let CarlineId = undefined;
    let CarlineName = app.car_configurator_data.model_name;
    let salesGroupId = undefined;
    let salesGroupName = app.car_configurator_data.sub_varient_name;  
    let ModelName = app.car_configurator_data.model_display_name;


    var orientation = screen.msOrientation || (screen.orientation || screen.mozOrientation || {}).type;
    var ResolutionOrientation = "h";
    if (orientation === "portrait-secondary" || orientation === "portrait-primary") {
        ResolutionOrientation = 'v';
    }



    
    let PriceType ='Gross Price';
    let PriceRateCurrency = 'AUD';
    let PriceRateTotal = String(app.car_configurator_data.mrrp) ; //PriceRateTotal = <Total value of vehicle including the $500 deposit, minus paint if that is additional cost>
    let PriceTotalCurrency ='AUD';
    let PriceTotalBasic = String(app.car_configurator_data.mrrp) ;//PriceTotalBasic = <Total value of vehicle including the $500 deposit, minus paint if that is additional cost>
    let PriceTotalAdditional = getAddOnPrice();
   // let PriceTotalTotal = String(parseInt(PriceTotalBasic) + parseInt(PriceTotalAdditional));//PriceTotalTotal = <Total value of vehicle including the $500 deposit and any included paint options pricing>
    let PriceTotalTotal   = String(app.car_configurator_data.mrdp) ;;

    PriceTotalAdditional = PriceTotalAdditional;
   // PriceTotalTotal      = PriceTotalTotal;
 
 
    var vwdata = window.vwdata = window.vwdata || [];
    vwdata.push({
 
 
        eventInfo: {
 
            eventAction : 'VWBasic_VehicleFormCTA_Click',
            pageId : window.location.href.replace(/(^\w+:|^)\/\//, 'www.') , 
            pageName : pageName,
            pageCategory : undefined,
            contentId : "Confirm and pay",
            templateType : undefined,
            sectionName:undefined

 
        },
 
 
        environment: {
 
             applicationId : ApplicationID,
             language : 'en',
             country : 'AU'
 
        },
 
 
        user: {
 
             loginStatus : false,
             browserResolutionHeight : String(window.innerHeight),
             browserResolutionWidth : String(window.innerWidth),
             browserResolutionBreakpoint : getBrowserResolutionBreakpoint(),
             browserResolutionOrientation : ResolutionOrientation
 
        },
 
 
        personalization: {
 
             status : false,
             placeholderId : undefined,
             contentId : undefined,
             activityId : undefined,
             activityName : undefined,
             experienceId:undefined,
             offerId:undefined,
             offerName:undefined
 
        },
 
 
        configuration: {
 
            BodyTypeName:undefined,
            CarlineId : CarlineId,
            CarlineName : CarlineName,
            SalesgroupId : salesGroupId,
            SalesgroupName : salesGroupName,
            EquipmentlineName : undefined,
            ModelId:undefined,
            ModelName:ModelName,

            PriceType : PriceType,
            PriceTypeParameter : undefined,
            PriceRateCurrency : PriceRateCurrency,
            PriceRateType : undefined,
            PriceRateBasic : undefined,
            PriceRateAdditional : undefined,
            PriceRateTotal : PriceRateTotal,
            PriceTotalCurrency : PriceTotalCurrency,
            PriceTotalBasic : PriceTotalBasic,
            PriceTotalAdditional : PriceTotalAdditional,
            PriceTotalTotal : PriceTotalTotal,
 
        },
 
 
        partner: {
 
             informationBnr : informationBnr,
             informationName : informationName,
             informationDepartment : informationDepartment,
             informationZIP : informationZIP
 
        },
 
 
        form: {
 
         FormType : "prebooking",
         FormName : 'Online Order',
         PrefContactChannels : undefined,
         FormVersion : "1",
         MarketingConsent : [{
             communication : app.enquiryDetails.subscription  //marketing Flag  : true or False . 
         }],
         NewsletterType : undefined,
         Questionnaire : undefined
 
        },
        process : {
 
            Name : 'Online Order',
            StepName : 'Confirm order',
            StepNumber : "4"

        },
 
        link: {
 
             url : window.location.href,
             name : "Confirm and pay"
 
        },
 
 
        ownership: {
 
             vehicle : undefined
 
        }
 
 
    });
 
 
    if(GLOBAL_APP_DEBUG == true)
    {
        console.log(vwdata.getEventList());
    }
 
 }
 function VWBasic_VehicleFormSubmissionSuccessMessage_Load(){
    

    var ApplicationID = "VWLocalAUOnlineOrderD6";
    let pageName     = 'Order placed';
    let informationBnr =app.enquiryDetails.dealer.code!=''?app.enquiryDetails.dealer.code:undefined;
    let informationName =app.enquiryDetails.dealer.name!=''?app.enquiryDetails.dealer.name:undefined;
    let informationDepartment ='sales';
    let informationZIP = app.enquiryDetails.postcode_details.code!=''?String(app.enquiryDetails.postcode_details.code):undefined;
    let CarlineId = undefined;
    let CarlineName = app.car_configurator_data.model_name;
    let salesGroupId = undefined;
    let salesGroupName = app.car_configurator_data.sub_varient_name;  
    let ModelName = app.car_configurator_data.model_display_name;


    var orientation = screen.msOrientation || (screen.orientation || screen.mozOrientation || {}).type;
    var ResolutionOrientation = "h";
    if (orientation === "portrait-secondary" || orientation === "portrait-primary") {
        ResolutionOrientation = 'v';
    }



    
    let PriceType ='Gross Price';
    let PriceRateCurrency = 'AUD';
    let PriceRateTotal = String(app.car_configurator_data.mrrp) ; //PriceRateTotal = <Total value of vehicle including the $500 deposit, minus paint if that is additional cost>
    let PriceTotalCurrency ='AUD';
    let PriceTotalBasic = String(app.car_configurator_data.mrrp) ;//PriceTotalBasic = <Total value of vehicle including the $500 deposit, minus paint if that is additional cost>
    let PriceTotalAdditional = getAddOnPrice();
   // let PriceTotalTotal = String(parseInt(PriceTotalBasic) + parseInt(PriceTotalAdditional));//PriceTotalTotal = <Total value of vehicle including the $500 deposit and any included paint options pricing>
    let PriceTotalTotal   = String(app.car_configurator_data.mrdp) ;;

    PriceTotalAdditional = PriceTotalAdditional;
   // PriceTotalTotal      = PriceTotalTotal;
 
    var vwdata = window.vwdata = window.vwdata || [];
    vwdata.push({
 
 
        eventInfo: {
 
             eventAction : 'VWBasic_VehicleFormSubmissionSuccessMessage_Load',
             pageId : window.location.href.replace(/(^\w+:|^)\/\//, 'www.') , 
             pageName : pageName,
             pageCategory : undefined,
             contentId : "Confirm and pay",
             templateType : undefined
 
        },
 
 
        environment: {
 
             applicationId : ApplicationID,
             language : 'en',
             country : 'AU'
 
        },
 
 
        user: {
 
             locationLatitude : undefined,
             locationLongitude : undefined,
             loginStatus : false,
             locationZIP : undefined,
             browserResolutionHeight : String(window.innerHeight),
             browserResolutionWidth : String(window.innerWidth),
             browserResolutionBreakpoint : getBrowserResolutionBreakpoint(),
             browserResolutionOrientation : ResolutionOrientation
 
        },
 
 
        personalization: {
 
             status : false,
             placeholderId : undefined,
             contentId : undefined,
             activityId : undefined,
             activityName : undefined,
             experienceId:undefined,
             offerId:undefined,
             offerName:undefined
 
        },
 
 
        configuration: {
 
            BodyTypeName:undefined,
            CarlineId : CarlineId,
            CarlineName : CarlineName,
            SalesgroupId : salesGroupId,
            SalesgroupName : salesGroupName,
            EquipmentlineName : undefined,
            ModelId:undefined,
            ModelName:ModelName,

            PriceType : PriceType,
            PriceTypeParameter : undefined,
            PriceRateCurrency : PriceRateCurrency,
            PriceRateType : undefined,
            PriceRateBasic : undefined,
            PriceRateAdditional : undefined,
            PriceRateTotal : PriceRateTotal,
            PriceTotalCurrency : PriceTotalCurrency,
            PriceTotalBasic : PriceTotalBasic,
            PriceTotalAdditional : PriceTotalAdditional,
            PriceTotalTotal : PriceTotalTotal,
        },
 
 
        partner: {
 
             informationBnr : informationBnr,
             informationName : informationName,
             informationDepartment : informationDepartment,
             informationZIP : informationZIP
 
        },
 
 
        form: {
 
             FormType : 'prebooking',
             FormName : 'Online Order',
             PrefContactChannels : undefined,
             FormVersion : "1",
             MarketingConsent : [{
                                 communication : app.enquiryDetails.subscription //marketing Flag  : true or False . 
                                 }],
             LeadID : app.enquiryDetails.katz_receipt_no.toString(),
             // LeadID : '10000001',
             NewsletterType : undefined,
             Questionnaire : undefined
 
        },
 
 
        ownership: {
 
             vehicle : undefined
 
        },
 
 
         process : {
 
             Name : 'Online Order',
             StepName : 'Order placed',
             StepNumber : "5"
 
         }
 
    });
 
 
    if(GLOBAL_APP_DEBUG == true)
    {
        console.log(vwdata.getEventList());
    }
 
 }