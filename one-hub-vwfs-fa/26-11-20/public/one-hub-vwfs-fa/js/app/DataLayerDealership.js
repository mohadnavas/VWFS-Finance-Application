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

function VWBasic_Form_Pageload()
{
    // Page oriented 
    var ApplicationID = 'VWLocalAUForms';

    // if(! Bootstrapper.hasOwnProperty("ngw"))
    {
        Bootstrapper.ngw = {};
    }
    
    Bootstrapper.ngw.ngw_eventInfo = {
        eventAction : 'VWBasic_Form_Pageload',
        pageId :  window.location.href.replace(/(^\w+:|^)\/\//, 'www.'),
        pageName : "Home",
        contentTags : undefined
    }

    Bootstrapper.ngw.ngw_environment = {
        ApplicationID : ApplicationID,          // Page Based
        Language : 'en',
        Country : 'AU'
    }

    var orientation = screen.msOrientation || (screen.orientation || screen.mozOrientation || {}).type;
    var ResolutionOrientation = "h";
    if (orientation === "portrait-secondary" || orientation === "portrait-primary") {
        ResolutionOrientation = 'v';
    } 
    
    Bootstrapper.ngw.ngw_user = {
        BrowserResolutionHeight : String(window.innerHeight),
        BrowserResolutionWidth : String(window.innerWidth),
        BrowserResolutionBreakpoint : getBrowserResolutionBreakpoint(),
        BrowserResolutionOrientation : ResolutionOrientation
    }

    Bootstrapper.ngw.ngw_configuration = {
        PriceRateCurrency : undefined,
        PriceRateType : undefined,
        PriceRateBasic : undefined,
        PriceRateAdditional : undefined,
        PriceRateTotal : undefined,
        PriceTotalCurrency : undefined,
        PriceTotalBasic : undefined,
        PriceTotalAdditional : undefined,
        PriceTotalTotal :undefined
    }

    Bootstrapper.ngw.ngw_form = {
        FormType : "contact", // Request a testdrive: “testdrive” // Download a brochure: “otherform”
        FormName : "Dealership enquiry form", // Page Based
        FormVersion : "1",
        FormStart : true
    }

    if(GLOBAL_APP_DEBUG == true)
    {
        console.log(Bootstrapper.ngw);
    }

    Bootstrapper.ensEvent.trigger("VWBasic_Form_Pageload");
    
}

function VWBasic_ModelSelect_Click() {
    // Page oriented 
    var ApplicationID = 'VWLocalAUForms';

    // if(! Bootstrapper.hasOwnProperty("ngw"))
    {
        Bootstrapper.ngw = {};
    }
    
    Bootstrapper.ngw.ngw_eventInfo = {
        eventAction : 'VWBasic_ModelSelect_Click',
        pageId :  window.location.href.replace(/(^\w+:|^)\/\//, 'www.'),
        pageName : "Home",
        contentID : "VW-110905122020"
    }

    Bootstrapper.ngw.ngw_environment = {
        ApplicationID : ApplicationID,          // Page Based
        Language : 'en',
        Country : 'AU'
    }


    var orientation = screen.msOrientation || (screen.orientation || screen.mozOrientation || {}).type;
    var ResolutionOrientation = "h";
    if (orientation === "portrait-secondary" || orientation === "portrait-primary") {
        ResolutionOrientation = 'v';
    } 

    Bootstrapper.ngw.ngw_user = {
        BrowserResolutionHeight : String(window.innerHeight),
        BrowserResolutionWidth : String(window.innerWidth),
        BrowserResolutionBreakpoint : getBrowserResolutionBreakpoint(),
        BrowserResolutionOrientation : ResolutionOrientation
    }

    let CarlineId = undefined;
    let CarlineName = undefined;
    let salesGroupId = undefined;
    let salesGroupName = undefined;
    let EquipmentlineName = undefined;
    let TrimId = undefined;

    if(app.enquiryDetails.preference.carlineId != ""){
        CarlineId = app.enquiryDetails.preference.carlineId;
    }
    if(app.enquiryDetails.preference.carlineName != ""){
        CarlineName = app.enquiryDetails.preference.carlineName;
    }
    if(app.enquiryDetails.preference.salesGroupId != ""){
        salesGroupId = app.enquiryDetails.preference.salesGroupId;
    }
    if(app.enquiryDetails.preference.carlineName != ""){
        // salesGroupName = app.enquiryDetails.preference.salesGroupName;
        salesGroupName = app.enquiryDetails.preference.carlineName; // Set carline = salesgroup as per the requirment
    }

    if(app.enquiryDetails.preference.salesGroupName != ""){
        EquipmentlineName = app.enquiryDetails.preference.salesGroupName; // Set EquipmentlineName = salesGroupName as per the requirment
    }

    if(app.enquiryDetails.preference.trimId != ""){
        TrimId = app.enquiryDetails.preference.trimId;
    }

    Bootstrapper.ngw.ngw_configuration = {
        CarlineId :CarlineId,
        CarlineName :CarlineName, 
        SalesgroupId :salesGroupId,
        SalesgroupName :salesGroupName,
        EquipmentlineId :TrimId,
        EquipmentlineName :EquipmentlineName,
        ModelId : undefined,//app.enquiryDetails.car_details.name,//Set as undefined due to requirment
        ModelName : undefined,//app.enquiryDetails.car_details.brochureLabel,//Set as undefined due to requirment
        ModelYear :undefined
    }

    if(GLOBAL_APP_DEBUG == true)
    {
        console.log(Bootstrapper.ngw);
    }

    Bootstrapper.ensEvent.trigger("VWBasic_ModelSelect_Click");

}

function VWBasic_FormCTA_Click() {
    // Page oriented 
    var ApplicationID = 'VWLocalAUForms';

    // if(! Bootstrapper.hasOwnProperty("ngw"))
    {
        Bootstrapper.ngw = {};
    }
    
    Bootstrapper.ngw.ngw_eventInfo = {
        eventAction : 'VWBasic_FormCTA_Click',
        pageId :  window.location.href.replace(/(^\w+:|^)\/\//, 'www.'),
        pageName : "Home",
        contentID : "VW-110905122020"
    }

    Bootstrapper.ngw.ngw_environment = {
        ApplicationID : ApplicationID,              // Page Based
        Language : 'en',
        Country : 'AU'
    }

    Bootstrapper.ngw.ngw_user = {
        LocationLatitude : undefined,
        LocationLongitude : undefined,
        LocationZIP : app.enquiryDetails.postcode_details.code
    }
    
    Bootstrapper.ngw.ngw_configuration = { 
        PriceRateCurrency :undefined,
        PriceRateType :undefined,
        PriceRateBasic :undefined,
        PriceRateAdditional :undefined,
        PriceRateTotal :undefined,
        PriceTotalCurrency :undefined,
        PriceTotalBasic :undefined,
        PriceTotalAdditional :undefined,
        PriceTotalTotal :undefined
    }

    Bootstrapper.ngw.ngw_partner = {
        InformationBnr : app.enquiryDetails.dealer.code,
        InformationName : app.enquiryDetails.dealer.name,
        InformationDepartment : undefined,
        InformationZIP : app.enquiryDetails.postcode_details.code
    }

    Bootstrapper.ngw.ngw_form = {
        FormType : "contact", // Request a testdrive: “testdrive” // Download a brochure: “otherform”
        FormName : "Dealership enquiry form",
        FormVersion : "1",
        MarketingConsent : [{
            // privacypolicy : app.enquiryDetails.privacy_policy,
            communication : app.enquiryDetails.subscription
        }],
        NewsletterType : undefined,
        Questionnaire : {
            id: "Questionnaire dealership enquiry",
            version: "1",
            content: [{
                question: "nature of the enquiry",
                answer: [{
                    type: "value",
                    value: app.enquiryDetails.enquiry_nature
                }]
            },
            {
                question: "Preference in the range",
                answer: [{
                    type: "value",
                    value: app.enquiryDetails.preference.value
                }]
            },
            {
                question: "Preferred contact method",
                answer: [{
                    type: "value",
                    value: app.enquiryDetails.personal_info.contact_method
                }]
            }]
        }
    }

    Bootstrapper.ngw.ngw_link = { 
        Url : window.location.href.replace(/(^\w+:|^)\/\//, 'www.'),
        Name : window.location.pathname
    }

    let CarlineId = undefined;
    let CarlineName = undefined;
    let salesGroupId = undefined;
    let salesGroupName = undefined;
    let TrimId = undefined;
    let TrimName = undefined;

    if(app.enquiryDetails.preference.carlineId != ""){
        CarlineId = app.enquiryDetails.preference.carlineId;
    }
    if(app.enquiryDetails.preference.carlineName != ""){
        CarlineName = app.enquiryDetails.preference.carlineName;
    }
    if(app.enquiryDetails.preference.salesGroupId != ""){
        salesGroupId = app.enquiryDetails.preference.salesGroupId;
    }
    if(app.enquiryDetails.preference.carlineName != ""){
        salesGroupName = app.enquiryDetails.preference.carlineName; // Set salesGroupName = carlineName as per the requirment
    }
    if(app.enquiryDetails.preference.trimId != ""){
        TrimId = app.enquiryDetails.preference.trimId;
    }
    if(app.enquiryDetails.preference.salesGroupName != ""){
        TrimName = app.enquiryDetails.preference.salesGroupName;// Set TrimName = salesGroupName as per the requirment
    }

    Bootstrapper.ngw.ngw_vehicleContent = {
        CarlineId : CarlineId,
        CarlineName : CarlineName,
        VersionSalesgroupId : salesGroupId,
        VersionSalesgroupName : salesGroupName,
        TrimId : TrimId,
        TrimName : TrimName
    }

    if(GLOBAL_APP_DEBUG == true)
    {
        console.log(Bootstrapper.ngw);
    }

    Bootstrapper.ensEvent.trigger("VWBasic_FormCTA_Click");

}

function VWBasic_FormStep_Load() {
    
    // Page oriented 
    var ApplicationID = 'VWLocalAUForms';

    // if(! Bootstrapper.hasOwnProperty("ngw"))
    {
        Bootstrapper.ngw = {};
    }
    
    Bootstrapper.ngw.ngw_eventInfo = {
        eventAction : 'VWBasic_FormStep_Load',
        pageId :  window.location.href.replace(/(^\w+:|^)\/\//, 'www.'),
        pageName : "Home",
        contentTags : undefined
    }

    Bootstrapper.ngw.ngw_environment = {
        ApplicationID : ApplicationID,              // Page Based
        Language : 'en',
        Country : 'AU'
    }

    var orientation = screen.msOrientation || (screen.orientation || screen.mozOrientation || {}).type;
    var ResolutionOrientation = "h";
    if (orientation === "portrait-secondary" || orientation === "portrait-primary") {
        ResolutionOrientation = 'v';
    } 

    var LocationZIP = undefined;
    if(app.enquiryDetails.postcode_details.code != "")
    {
        LocationZIP = app.enquiryDetails.postcode_details.code;
    }

    Bootstrapper.ngw.ngw_user = {
        LocationLatitude : undefined,
        LocationLongitude : undefined,
        LocationZIP : LocationZIP,
        BrowserResolutionHeight : String(window.innerHeight),
        BrowserResolutionWidth : String(window.innerWidth),
        BrowserResolutionBreakpoint : getBrowserResolutionBreakpoint(),
        BrowserResolutionOrientation : ResolutionOrientation
    }

    Bootstrapper.ngw.ngw_configuration = { 
        PriceRateCurrency : undefined,
        PriceRateType : undefined,
        PriceRateBasic : undefined,
        PriceRateAdditional : undefined,
        PriceRateTotal : undefined,
        PriceTotalCurrency : undefined,
        PriceTotalBasic : undefined,
        PriceTotalAdditional : undefined,
        PriceTotalTotal : undefined
    }

    // get Dealer detail
    var InformationBnr = undefined;
    if(app.enquiryDetails.dealer.code != "")
    {
        InformationBnr = app.enquiryDetails.dealer.code;
    }

    var InformationName = undefined;
    if(app.enquiryDetails.dealer.name != "")
    {
        InformationName = app.enquiryDetails.dealer.name;
    }

    var InformationZIP = undefined;
    if(app.enquiryDetails.postcode_details.code != "")
    {
        InformationZIP = app.enquiryDetails.postcode_details.code;
    }

    Bootstrapper.ngw.ngw_partner = {
        InformationBnr : InformationBnr,
        InformationName : InformationName,
        InformationDepartment : undefined,
        InformationZIP : InformationZIP
    }

    var FormStart = true;
    if(app.form_step > 1)
    {
        FormStart = false;
    }

    Bootstrapper.ngw.ngw_form = {
        FormType : "contact", // Request a testdrive: “testdrive” // Download a brochure: “otherform”
        FormName : "Dealership enquiry form",
        FormVersion : "1",
        FormStart : FormStart
    }

    if(app.form_step == 1) {
        var StepName = 'modelselector';
    }
    else if(app.form_step == 2) {
        var StepName = 'dealerselector';
    }
    else {
        var StepName = 'personaldata';
    }
    Bootstrapper.ngw.ngw_process = {
        StepName : StepName,
        StepNumber: String(app.form_step)
    }


    let CarlineId = undefined;
    let CarlineName = undefined;
    let TrimId = undefined;
    let TrimName = undefined;
    let salesGroupId = undefined;
    let salesGroupName = undefined;

    if(app.enquiryDetails.preference.carlineId != ""){
        CarlineId = app.enquiryDetails.preference.carlineId;
    }
    if(app.enquiryDetails.preference.carlineName != ""){
        CarlineName = app.enquiryDetails.preference.carlineName;
    }
    if(app.enquiryDetails.preference.trimId != ""){
        TrimId = app.enquiryDetails.preference.trimId;
    }
    if(app.enquiryDetails.preference.salesGroupName != ""){
        TrimName = app.enquiryDetails.preference.salesGroupName; // Set TrimName = salesGroupName as per the requirment
    }
    if(app.enquiryDetails.preference.SalesgroupId != ""){
        salesGroupId = app.enquiryDetails.preference.salesGroupId;
    }
    if(app.enquiryDetails.preference.carlineName != ""){
        salesGroupName = app.enquiryDetails.preference.carlineName; // Set salesGroupName = carlineName as per the requirment
    }
    
    Bootstrapper.ngw.ngw_vehicleContent = {
        CarlineId : CarlineId,
        CarlineName : CarlineName,
        VersionSalesgroupId : salesGroupId,
        VersionSalesgroupName : salesGroupName,
        TrimId : TrimId,
        TrimName : TrimName
    }

    Bootstrapper.ngw.ngw_product = {
        Manufacturer : undefined,
        ID : undefined,
        Name : undefined,
        Category : undefined,
        Attributes : undefined,
        Price : undefined
    }

    if(GLOBAL_APP_DEBUG == true)
    {
        console.log(Bootstrapper.ngw);
    }
    
    Bootstrapper.ensEvent.trigger("VWBasic_FormStep_Load");

}

function VWBasic_FormSubmissionSuccessMessage_Load() {
    
    // Page oriented 
    var ApplicationID = 'VWLocalAUForms';

    // if(! Bootstrapper.hasOwnProperty("ngw"))
    {
        Bootstrapper.ngw = {};
    }
    
    Bootstrapper.ngw.ngw_eventInfo = {
        eventAction : 'VWBasic_FormSubmissionSuccessMessage_Load',
        pageId :  window.location.href.replace(/(^\w+:|^)\/\//, 'www.'),
        pageName : "Home",
        contentID : "VW-110905122020"
    }

    Bootstrapper.ngw.ngw_environment = {
        ApplicationID : ApplicationID,              // Page Based
        Language : 'en',
        Country : 'AU'
    }

    var orientation = screen.msOrientation || (screen.orientation || screen.mozOrientation || {}).type;
    var ResolutionOrientation = "h";
    if (orientation === "portrait-secondary" || orientation === "portrait-primary") {
        ResolutionOrientation = 'v';
    } 
    Bootstrapper.ngw.ngw_user = {
        LocationLatitude : undefined,
        LocationLongitude : undefined,
        LocationZIP : app.enquiryDetails.postcode_details.code,
        BrowserResolutionHeight : String(window.innerHeight),
        BrowserResolutionWidth : String(window.innerWidth),
        BrowserResolutionBreakpoint : getBrowserResolutionBreakpoint(),
        BrowserResolutionOrientation : ResolutionOrientation
    }

    Bootstrapper.ngw.ngw_configuration = {
        PriceRateCurrency : undefined,
        PriceRateType : undefined,
        PriceRateBasic : undefined,
        PriceRateAdditional : undefined,
        PriceRateTotal : undefined,
        PriceTotalCurrency : undefined,
        PriceTotalBasic : undefined,
        PriceTotalAdditional : undefined,
        PriceTotalTotal : undefined
    }

    Bootstrapper.ngw.ngw_partner = {
        InformationBnr  : app.enquiryDetails.dealer.code,
        InformationName : app.enquiryDetails.dealer.name,
        InformationDepartment : undefined,
        InformationZIP : app.enquiryDetails.postcode_details.code
    }
    
    Bootstrapper.ngw.ngw_form = {
        FormType : "contact", // Request a testdrive: “testdrive” // Download a brochure: “otherform”
        FormName : "Dealership enquiry form",
        FormVersion : "1",
        LeadID : "AUS-" + app.enquiryDetails.leadID,
        NewsletterType : undefined,
        Questionnaire : {
            id: "Questionnaire dealership enquiry",
            version: "1",
            content: [{
                question: "nature of the enquiry",
                answer: [{
                    type: "value",
                    value: app.enquiryDetails.enquiry_nature
                }]
            },
            {
                question: "Preference in the range",
                answer: [{
                    type: "value",
                    value: app.enquiryDetails.preference.value
                }]
            },
            {
                question: "Preferred contact method",
                answer: [{
                    type: "value",
                    value: app.enquiryDetails.personal_info.contact_method
                }]
            }]
        }
    }

    let CarlineId = undefined;
    let CarlineName = undefined;
    let TrimId = undefined;
    let TrimName = undefined;
    let salesGroupId = undefined;
    let salesGroupName = undefined;

    if(app.enquiryDetails.preference.carlineId != ""){
        CarlineId = app.enquiryDetails.preference.carlineId;
    }
    if(app.enquiryDetails.preference.carlineName != ""){
        CarlineName = app.enquiryDetails.preference.carlineName;
    }
    if(app.enquiryDetails.preference.trimId != ""){
        TrimId = app.enquiryDetails.preference.trimId;
    }
    if(app.enquiryDetails.preference.salesGroupName != ""){
        TrimName = app.enquiryDetails.preference.salesGroupName; //Set TrimName = salesGroupName as per the requirment
    }
    if(app.enquiryDetails.preference.salesGroupId != ""){
        salesGroupId = app.enquiryDetails.preference.salesGroupId;
    }
    if(app.enquiryDetails.preference.carlineName != ""){
        salesGroupName = app.enquiryDetails.preference.carlineName; //Set salesGroupName = carlineName as per the requirment
    }

    Bootstrapper.ngw.ngw_vehicleContent = {
        CarlineId : CarlineId,
        CarlineName : CarlineName,
        VersionSalesgroupId : salesGroupId,
        VersionSalesgroupName : salesGroupName,
        TrimId : TrimId,
        TrimName : TrimName
    }

    if(GLOBAL_APP_DEBUG == true)
    {
        console.log(Bootstrapper.ngw);
    }
    
    Bootstrapper.ensEvent.trigger("VWBasic_FormSubmissionSuccessMessage_Load");

}

