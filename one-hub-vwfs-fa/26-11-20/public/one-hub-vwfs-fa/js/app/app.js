/**
 * VWFS 
 */
var CancelToken = axios.CancelToken;
const app = new Vue({
    el: '#vwfs-holder-div',
    components: {},

    data() {

        return {
            polk_error_messgae:'Service error',
            loan_type:'consumerLoan',
            loan_type_choice:'',
            polk_success:true,
            polk_error_msg:'Service error',
            price_calculated:false,
            drive_away_tot:0,
            polk_price_flag: false,
            polkCancelSource: '',
            is_lead_created:false,
            data_not_found:0,
            batch_no:'',
            is_car_configure_data_set:false,
            layout: 'home',
            form_submit_flag: false,
            form_step: 1,
            form_step_min: 1,
            form_step_max: 6,
            api_url: {},
            car_models_show: false,
            car_models: [],
            dealers: [],
            launchDate: '2019-04-25',
            show_touareg_brochure: false,
            car_selected: false,
            validation_error_flag: false,
            validation_types: ['length', 'null', 'email', 'phone'],
            validation_errors: [],

            // Toast Manager
            toastflag: false,
            toastMsg: '',

            // ErroMessage flag
            selectedModel: '',
            allBackgroundColor: {},
            car_configurator_data:{},

            //vwfs
            find_km_flag : false,
            find_km_flag_class: 'find_km_flag_class',
            car_finance_calculator_total_km :0,
            total_price : 0,
            car_finance_calculator_balloon_payment:'',
            car_finance_calculator_deposit_amount:'1000',
            car_finance_calculator_amount_borrowed:'',
            car_finance_calculator_weekly_payment : 0,
            car_finance_calculator_monthly_payment : 0,
            car_finance_calculator_weekly_result_total_interst : '',
            car_finance_calculator_weekly_result_total_repayable : '',
            car_finance_calculator_monthly_result_total_interst : '',
            car_finance_calculator_monthly_result_total_repayable : '',
            car_finance_calculator_payment_term_option : false,
            car_finance_calculator_balloon_payment_non_option: '',
            car_finance_calculator_loan_method:'consumerLoan',
            error_message: '',
            terms_in_moths: [],
            intrest:0,
            finance_data: true,
            choosed_term:0,
            car_finance_calculator_finance_choice_term:[],
            choosed_km:0,
            car_finance_calculator_finance_choice_km:[],
            car_purchase_selected_options: [],
            location_details: {
                postcode: '',
                locality: '',
                state: ''
            },
            car_purchase_selected_options: [],
            choose_option_enum_value: [],
            redirect_storefrontLink: '',
            user_selected_options: [],
            ajax_flag : false,

            selected_term : { choice:'', nonChoice: '' },
            landing_page_vwfs_disclaimer : '',
            error_top_message: '',
            error_km_message:'',
            disclaimer_first_line: ' ^ Manufacturers recommended retail price (MRRP) ',

            dealer_code:'',
            dealer_name:'',
            dealer_postcode: '',
            dealer_state: '',
            dealer_city: '',
            dealer_phone:'',
            dealer_street:'',
            dealer_email:'',
            dealer_country:'',
            dealer_country_code:'',
            dealer_data: [],
            vin : '',
            
            dealer_info:{
                
                validation_errors: {
                    postcode_not_found: false
                },
                validation_messages: {
                    postcode_not_found: 'No matching postcodes found'
                },

                postcode_details: {
                    name: "",
                    code: "",
                    locality: "",
                    state: ""
                },
                postcode_results: [],
                show_filter: false,
                postcode_error: true,
                close_modal: false,
                postcodeString: '',
                postcode_ajax_flag: false,
                dealer_ajax_flag: false,
                dealer_list: [],
                selected_dealer:'',
                proceed_to_enquiry:false
            }
            
        }
    },
    computed: { 
        
        totalMRRP() {
            let total_mrrp = this.car_configurator_data.mrrp;
            total_mrrp = total_mrrp + this.car_configurator_data.color_price; //exterior
            total_mrrp = total_mrrp + this.car_configurator_data.interior_price; //interior
            
            for(var k in this.user_selected_options) {
                total_mrrp = total_mrrp + this.user_selected_options[k].price;
            }
            return total_mrrp; 
        },

        disclaimerText() {

            let text ='';
            if(this.car_configurator_data.on_offer == 1)
            {   
                if(this.car_finance_calculator_loan_method == 'chattelMortgage')
                    text = this.car_configurator_data.desclaimer['offer_chattel_disclaimer'];
                else if( this.car_finance_calculator_loan_method == 'consumerLoan')
                    text = this.car_configurator_data.desclaimer['offer_disclaimer'];
                else if( this.car_finance_calculator_loan_method == 'consumerLoan_choice')
                    text = this.car_configurator_data.desclaimer['consumerLoan_choice_offer']
                else if( this.car_finance_calculator_loan_method == 'chattelMortgage_choice')
                    text = this.car_configurator_data.desclaimer['chattelMortgage_choice_offer'];
            }
            else
            {
                text = this.car_configurator_data.desclaimer[this.car_finance_calculator_loan_method]
            }

            // text = text+"<br/><br/>"+"*The information provided by Volkswagen Financial Services is indicative only and is not a formal or binding quote. It is of a general nature, based on the accuracy of information you have provided and does not take into account your personal needs and financial circumstances. Nothing on this website constitutes or should be construed legal, taxation or financial advice. Before making a decision about any of the products and services featured on this website, you should consult with your own independent legal, taxation and financial advisor who can advise you about your personal circumstances.";
            text = text.replace('||COMPRATE||',this.intrest)
            text = text.replace('||DWPRICE||',this.priceFormatter(this.car_configurator_data.mrdp));
            text = text.replace('||ENDDATE||',this.car_configurator_data.offer_exp);
            text = text.split('\n').join('<br/>');
            let model_split = this.car_configurator_data.model_code.split('/')

            if(model_split[1] !== undefined)
                text = text.replace('||MDYEAR||',model_split[1])
            else
                text = text.replace('||MDYEAR||','--')

            text = text.replace('||MDDESC||',this.car_configurator_data.model_display_name)
            return text;
        },

        isNonChoice: function() {
            return this.car_finance_calculator_loan_method == 'consumerLoan' || this.car_finance_calculator_loan_method=='chattelMortgage';
        },

        isChoice: function() {
            return this.car_finance_calculator_loan_method == 'consumerLoan_choice' || this.car_finance_calculator_loan_method=='chattelMortgage_choice';
        },

        loanChoice: function() {
            return this.car_finance_calculator_loan_method;
        },

        chosenKMFormated: function() {
            return this.choosed_km +'km';
        },

        termIndex: {
            
            get:function() {

                let key = 0;
                for(var k in this.terms_in_moths) {
                    if(this.terms_in_moths[k] == this.choosed_term){
                        key = k;                        
                    }
                }
                key++;
                return key;
            },
            set: function(key) {
                this.choosed_term = this.terms_in_moths[key-1]
                this.setNonChoiceLoanTerm(this.choosed_term)
            }
        },

        isEveryThingOkay: function() {
            return this.error_message == '' && this.error_top_message == '' && this.error_km_message == '';
        },

        totalTerms: function(){
            return this.terms_in_moths.length
        }


    },

    methods: {
        
        postcodeSearch(){
            
            var postcode = this.dealer_info.postcode_details.name;

            if(postcode.length > 2 && this.dealer_info.postcode_ajax_flag == false && postcode != this.old_postcode){

                this.postcode_results = [];
                this.dealer_info.show_filter = false;
                this.old_postcode = postcode;
                this.dealer_info.postcodeString = postcode;
                this.dealer_info.postcode_ajax_flag = true;
                var source = CancelToken.source();
                this.request_source = source;
                this.dealer_info.dealer_list='';

                axios
                    .get(
                        this.api_url.API_URL_LOCALITYSEARCH,
                        {   //headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),'access-control-allow-origin': '*'},
                            params:{locality: postcode},
                            cancelToken: this.request_source.token
                        }
                    )
                    .then(response => {

                        this.dealer_info.show_filter = true;
                        this.dealer_info.postcode_results = response.data;
                        this.dealer_info.postcode_ajax_flag = false;
                        this.dealer_info.postcode_error = false;

                        this.$set(this.dealer_info.validation_errors, 'postcode_not_found', false);

                        if(this.dealer_info.postcode_details.name != this.dealer_info.postcodeString){
                            this.dealer_info.postcodeString = this.dealer_info.postcode_details.name;
                            this.postcodeSearch();
                        }

                        if(response.data.length == 0){

                            this.dealer_info.postcode_error = true;
                            this.$set(this.dealer_info.validation_errors, 'postcode_not_found', true);
                            this.dealer_info.show_filter = false;
                            this.dealer_info.validation_error_flag = true;
                        }
                    })
                    .catch(error => {

                        console.log("Request canceled");
                        console.log(error);
                        this.dealer_info.postcode_ajax_flag = false;
                        this.dealer_info.postcode_error = true;
                        this.$set(this.dealer_info.validation_errors, 'postcode_not_found', true);
                        this.dealer_info.validation_error_flag = true;
                    });

            }
        },
        selectPostocode(postcode, label, locality, state) {
            
            this.dealers_processed = false;
            this.dealer_info.show_filter = false;
            this.dealer_info.postcode_details.name = label;
            this.dealer_info.postcode_details.code = postcode;
            this.dealer_info.postcode_details.state = state;
            this.dealer_info.postcode_details.locality = locality;
            this.dealer_info.postcodeString = label; 
            this.old_postcode = label;
            this.animateTop();
            
           this.getDealerDetails(postcode);
        },
        
        getDealerDetails(postcode){
            
            this.dealer_info.dealer_ajax_flag = true;
            this.show_dealer_list = false;
            this.show_dealer_details_list = false;
            this.dealer_info.dealer_details_list_service = [];
            this.dealer_info.dealer_details_list_parts = [];
            this.dealer_info.dealer_details_list_used = [];
            
            
            // get dealer details
            axios
           .get(this.api_url.API_URL_GETMULTIPLEDEALERDETAILS, 
            {params: {brand: 'Volkswagen', subbrand : 'pv', type:'locality',searchstring:postcode}})
            .then(response => {
                
                let data = response.data.dealers;
                let dealer_list = [];
        
                for(let i=0; i<(data).length; i++){
                  dealer_list.push(data[i].dealer)
                }
                
                this.dealer_info.dealer_ajax_flag=false;
                dealer_list[0].isPrimary = true;
                this.dealer_info.dealer_list = dealer_list;
                this.chooseDealer(0);

            });
        },
        
        chooseDealer(index){
          
            this.dealer_info.selected_dealer = this.dealer_info.dealer_list[index];
            this.dealer_info.selected_dealer.street = (this.dealer_info.selected_dealer.dealerAddress).split(', ')[0];
            this.dealer_info.selected_dealer.city = (this.dealer_info.selected_dealer.dealerAddress).split(', ')[1];
        },
    
        proceed_to_dealer_selection(){

            if(this.error_message == '' && this.error_top_message == '' && this.error_km_message == ''){
               
                this.calculator();
                
                if(this.error_message == ''){
                    this.next();
                }
                
            }
        },

        apply_for_finance: function(){    

            this.calculator();

            this.redirect_storefrontid ='';
            if(this.car_finance_calculator_loan_method == 'consumerLoan_choice' || this.car_finance_calculator_loan_method == 'chattelMortgage_choice')
            {
                this.choosed_km =  this.choosed_km;
               
            }
            else
            {
                this.car_finance_calculator_balloon_payment = Math.round(this.car_finance_calculator_balloon_payment_non_option);
                this.choosed_km = '';
            }

            if(this.car_finance_calculator_loan_method == 'consumerLoan_choice')
            {
                this.choose_option_enum_value ='CONSUMER_LOAN_CHOICE';
            }
            else  if(this.car_finance_calculator_loan_method == 'chattelMortgage_choice')
            {
                this.choose_option_enum_value ='CHATTLE_MORTGAGE_CHOICE';
            }
            else  if(this.car_finance_calculator_loan_method == 'chattelMortgage')
            {
                this.choose_option_enum_value ='CHATTLE_MORTGAGE';
            }
            else
            {
                this.choose_option_enum_value ='CONSUMER_LOAN';
            }
            this.clearMessages();

            this.dealer_info_ajax_flag = true;            
            // this.dealer_phone =    
            let dealer_ph = this.dealer_info.selected_dealer.phone.toString();
            dealer_ph = dealer_ph.replace(/ /g, "");
            // alert(dealer_ph);
            this.dealer_info.proceed_to_enquiry = true;
            
            axios
            .get('/apply_for_finance',
            {
                params: {
                    'purchasePriceAmount':this.total_price,
                    'vehicleImageUrl' : this.car_configurator_data.selected_model_img,
                    'description' : this.car_configurator_data.model_display_name,
                    'exterior' : this.car_purchase_selected_options.exterior.name,
                    'duration': this.choosed_term,
                    'yearlyMileage':this.car_finance_calculator_total_km,
                    'effectiveInterestRate':this.intrest/100,
                    'downPaymentAmount': this.car_finance_calculator_deposit_amount,
                    'balloonPayment' : this.car_finance_calculator_balloon_payment,
                    'monthlyLeasingAmount' : this.car_finance_calculator_monthly_payment,
                    'interior' :this.car_purchase_selected_options.interior.name,
                    'options': JSON.stringify(this.car_purchase_selected_options.options),
                    'model':this.car_purchase_selected_options.model,
                    'variant':this.car_purchase_selected_options.variant,
                    'sub_variant': this.car_purchase_selected_options.sub_variant,
                    'post_code' : this.location_details.postcode,
                    'finance_choosen_option' : this.choose_option_enum_value,
                    'disclaimer' :  this.disclaimerText,
                    'payload_id' :payload_id,
                    'vin': this.vin,
                    'dealer_street': this.dealer_info.selected_dealer.street, 
                    'dealer_code': this.dealer_info.selected_dealer.dealerCode,
                    'dealer_name': this.dealer_info.selected_dealer.dealerName,
                    'dealer_state': this.dealer_info.selected_dealer.dealerState,
                    'dealer_city' : this.dealer_info.selected_dealer.city,
                    'dealer_email': this.dealer_info.selected_dealer.SalesEmailCode,
                    'dealer_phone' : dealer_ph,
                    'dealer_country': this.dealer_country,
                    'dealer_country_code':this.dealer_country_code,
                    'dealer_zip':this.dealer_info.selected_dealer.dealerPostcode,
                
                    // 'disclaimer' :  this.disclaimerText.split('<br/>').join('\n')
                }
                
            })
            .then(response => {
                this.dealer_info_ajax_flag = false;
                let data=response.data;
                
                this.redirect_storefrontid =  data.id;
                // return false;
                if(this.redirect_storefrontid!='' && typeof this.redirect_storefrontid!='undefined')
                {
                   let _link= this.redirect_storefrontLink+ this.redirect_storefrontid;
                   window.location.assign(_link);
                }
                else
                {
                    this.dealer_info_ajax_flag = false;
                    this.error_top_message = 'Could not complete the request';
                
                }
            })
            .catch(error => {
                this.dealer_info_ajax_flag = false;
                this.error_top_message = 'Could not complete the request';
            });

            
        },

        validateBaloonPayment: function(){

            let loanMethod = this.car_finance_calculator_loan_method;
            
            if(loanMethod == 'consumerLoan' || loanMethod == 'chattelMortgage') {
                
                let currentBaloon = Math.round(this.car_finance_calculator_balloon_payment_non_option);
                let choosenTerm = this.choosed_term;
                /*let vehicleValue = this.total_price;*/
                /*let vehicleValue = this.car_configurator_data.mrrp;*/
                let vehicleValue = this.totalMRRP;
                let vehicleType = this.car_configurator_data.sub_brand.toLowerCase(); // cv or pv
                let baloonValidationRule = this.car_configurator_data.baloon_payment_max_min[loanMethod][vehicleType];

                // console.log(baloonValidationRule)
                // console.log(vehicleType)
                
                let matchingTerm = false;
                let set = 0;
                let maximumPossibleBaloonValue = 0;
                let minimumPossibleBaloonValue = 0;
                let isValid = true;

                for(let k in baloonValidationRule) {

                    set = baloonValidationRule[k];

                    //prepare a term if no terms matches
                    if(set.months >= choosenTerm && matchingTerm == false) {
                        matchingTerm = set;
                    }

                    //only for the chosen term
                    if(set.months == choosenTerm) {

                        maximumPossibleBaloonValue = Math.round(vehicleValue * (set.max/100));
                        minimumPossibleBaloonValue = Math.round(vehicleValue * (set.min/100));
                        
                        if(currentBaloon < minimumPossibleBaloonValue) {
                            isValid = false;
                        }else if(currentBaloon > maximumPossibleBaloonValue) {
                            isValid = false;
                        }
                    }
                }

                //if the chosen term is not in the term list
                /*if(isValid) {
                    maximumPossibleBaloonValue = vehicleValue * (matchingTerm.max/100);
                    minimumPossibleBaloonValue = vehicleValue * (matchingTerm.min/100);

                    if(currentBaloon < minimumPossibleBaloonValue) {
                        isValid = false;
                    }else if(currentBaloon > maximumPossibleBaloonValue) {
                        isValid = false;
                    }
                }*/ 

                

                if(!isValid) {
                    this.car_finance_calculator_balloon_payment_non_option = 0;//parseFloat(0).toFixed(2);
                    this.calculator();
                    this.error_message = 'The balloon payment amount must be in between $' + this.priceFormatter(Math.round(minimumPossibleBaloonValue)) + ' and $' + this.priceFormatter(Math.round(maximumPossibleBaloonValue));                  
                    
                } else {

                    this.error_message = '';
                    this.calculator();
                }

            } else {
                this.choiceRvCalculator();
            }

        },

        PMT: function(rate_per_period, number_of_payments, present_value, future_value, type=0){
           
            future_value = typeof future_value !== 'undefined' ? future_value : 0;
            type = typeof type !== 'undefined' ? type : 0;
         
            if(rate_per_period != 0.0){
                // Interest rate exists
                var q = Math.pow(1 + rate_per_period, number_of_payments);
                return -(rate_per_period * (future_value + (q * present_value))) / ((-1 + q) * (1 + rate_per_period * (type)));
         
            } else if(number_of_payments != 0.0){
                return -(future_value + present_value) / number_of_payments;
            }
         
            return 0;
        },

        choose_finance_last_term: function(value,index){
            this.choosed_term = value;
            this.selected_term.nonChoice = value;
            this.validateBaloonPayment();
        },

        
        choose_finance_term: function(value,index){
            this.choosed_term = value;
            this.selected_term.choice = value;
            this.find_km();
        },

        setFinanceServices: function(response) {

               let res_data = response;

               this.setDefaultInterestRate();

                if(this.car_configurator_data.default_term[this.car_finance_calculator_loan_method] != null){
                    this.finance_term = this.car_configurator_data.default_term[this.car_finance_calculator_loan_method];
                    this.financeCalculator_baloon_data = res_data;
                }else {
                    this.finance_term = 12;
                    this.financeCalculator_baloon_data = [];
                }
               
               /*terms & km per annuam*/
               this.car_finance_calculator_finance_choice_term = this.car_configurator_data.finance_choice.term;
               this.car_finance_calculator_finance_choice_term.sort();
               this.car_finance_calculator_finance_choice_km = this.car_configurator_data.finance_choice.km;
               //preset choosed_term & km on load
               //this.choosed_term = this.car_finance_calculator_finance_choice_term[0];
               this.choosed_km = this.getFirstTermElement();
               
               this.calculator();
        },

        getFirstTermElement: function() {
            //return Object.keys(this.car_finance_calculator_finance_choice_km)[0];
            return this.car_finance_calculator_finance_choice_km[0];
        },


        assignLoanOptions:function(value){

            this.car_finance_calculator_loan_method = value;
            this.clearMessages();
              
            if(this.car_finance_calculator_loan_method == 'consumerLoan_choice' || this.car_finance_calculator_loan_method == 'chattelMortgage_choice')
            {    

                /*this.choosed_term = this.car_finance_calculator_finance_choice_term[0];
                this.choosed_km = this.getFirstTermElement()*/

                /*reset loan term for choice*/
                if(this.selected_term.choice != '')    
                    this.choosed_term = this.selected_term.choice;
                else
                    this.choosed_term = this.car_finance_calculator_finance_choice_term[0];

                this.setDefaultInterestRate();
                this.find_km();
                this.validateBaloonPayment()
                
            }
            else
            {    
                /*reset loan term for non choice*/
                if(this.selected_term.nonChoice != '')
                    this.choosed_term = this.selected_term.nonChoice;
                else 
                    this.choosed_term = this.car_configurator_data.default_term[this.car_finance_calculator_loan_method];

                this.setDefaultInterestRate();


                /* if(this.car_configurator_data.default_term == null)    
                     this.choosed_term =this.finance_term;
                 else
                     this.choosed_term = this.car_configurator_data.default_term;*/

                 //this.choosed_km = '';
                 //this.calculator();
                 this.validateBaloonPayment()
            }

            this.getTerms();
            $('#term_ranger').trigger('input')

        },

        setDefaultInterestRate: function() {

            if(this.car_configurator_data.on_offer == 1){
                this.intrest = this.car_configurator_data.interest_rate
            }else if(this.car_finance_calculator_loan_method == 'consumerLoan' || this.car_finance_calculator_loan_method == 'consumerLoan_choice') {
                this.intrest = this.car_configurator_data.interest_rate                
            }else if(this.car_finance_calculator_loan_method == 'chattelMortgage' || this.car_finance_calculator_loan_method == 'chattelMortgage_choice') {
                this.intrest = this.car_configurator_data.chattel_interest_rate
            }else {
                this.intrest = 0;
            }
        },

        getTerms: function() {

            let choiceIndex = 'chattelMortgage';

            if(this.car_finance_calculator_loan_method == 'consumerLoan' || this.car_finance_calculator_loan_method == 'consumerLoan_choice') {
                choiceIndex = 'consumerLoan';
            }

            this.terms_in_moths = this.car_configurator_data.terms_array[this.car_configurator_data.sub_brand.toLowerCase()][choiceIndex];
        },

        calculator: function(){

            
            if(this.total_price == 0)
                this.total_price = this.car_configurator_data.mrdp

            if(this.car_finance_calculator_loan_method == 'consumerLoan' || this.car_finance_calculator_loan_method == 'chattelMortgage')
            {
                this.car_finance_calculator_balloon_payment_non_option = Math.round(this.car_finance_calculator_balloon_payment_non_option);
                this.car_finance_calculator_balloon_payment = Math.round(this.car_finance_calculator_balloon_payment_non_option);
            }else {
                this.car_finance_calculator_balloon_payment = Math.round(this.car_finance_calculator_balloon_payment);
            }

            if(isNaN(this.car_finance_calculator_deposit_amount) || this.car_finance_calculator_deposit_amount<0)
            {    
                this.car_finance_calculator_deposit_amount = parseFloat(0).toFixed(2);
                this.calculator();
                this.error_message= "Please enter a valid deposit amount";
            }
            else if(isNaN (this.car_finance_calculator_balloon_payment) || this.car_finance_calculator_balloon_payment <0)
            {
                this.car_finance_calculator_balloon_payment_non_option = 0;//parseFloat(0).toFixed(2);
                //this.calculator();
                this.error_message= "Please enter a valid balloon payment amount";
            }
            else if(Number(this.car_finance_calculator_deposit_amount) >=Number(this.total_price))
            {    
                this.car_finance_calculator_deposit_amount = parseFloat(0).toFixed(2);
               // this.calculator();
                this.error_message= "Deposit amount should be less than the vehicle value";
            }
            else if(Math.round(this.car_finance_calculator_balloon_payment)>=Number(this.total_price))
            {
                this.error_message= "Balloon payment should be less than the vehicle value";
            }
            else if( (Math.round(this.car_finance_calculator_balloon_payment)+Number(this.car_finance_calculator_deposit_amount)) >= Number(this.total_price))
            {    
                
                this.car_finance_calculator_deposit_amount = 0.00;
                // this.car_finance_calculator_balloon_payment = 0;
                 
                // alert('here');
                if(this.isChoice)
                    this.error_message= "Sum of guaranteed future value and deposit amount should be less than the vehicle value";
                else
                {
                    this.car_finance_calculator_balloon_payment_non_option =0;
                    this.error_message= "Sum of balloon payment and deposit amount should be less than the vehicle value";
                }
            }
            else
            {
                let loan_amount = Number(this.total_price);
                let deposit_amount = Number(this.car_finance_calculator_deposit_amount);
                /*let gfv = Number(this.car_finance_calculator_balloon_payment);*/
                let gfv = Math.round(this.car_finance_calculator_balloon_payment);
                var ir = Number(this.intrest)/100/12;
                var pv = loan_amount -deposit_amount ;

                let np = Number(this.choosed_term);
                this.error_message= "";
                this.car_finance_calculator_deposit_amount =  Number(this.car_finance_calculator_deposit_amount).toFixed(2);
                //this.car_finance_calculator_balloon_payment = Number(this.car_finance_calculator_balloon_payment).toFixed(2);
                this.car_finance_calculator_balloon_payment = Math.round(this.car_finance_calculator_balloon_payment);
              
                this.car_finance_calculator_amount_borrowed =Number(loan_amount - deposit_amount - gfv).toFixed(2);
                // this.car_finance_calculator_amount_borrowed = this.car_finance_calculator_amount_borrowed.toFixed(2);
                
                var pmt = this.PMT(ir,np,-pv,gfv,0);
                var total_repayable = (pmt * np) + gfv + deposit_amount;

                this.car_finance_calculator_weekly_payment = this.roundUp(pmt * 12 / 52, 0);
                this.car_finance_calculator_monthly_payment = Math.round(pmt);
                this.car_finance_calculator_weekly_result_total_interst = Math.round(total_repayable - loan_amount);
                this.car_finance_calculator_weekly_result_total_repayable = Math.round((pmt * np) + gfv);
                this.car_finance_calculator_monthly_result_total_interst = Math.round(total_repayable - loan_amount);
                this.car_finance_calculator_monthly_result_total_repayable = Math.round((pmt * np) + gfv);
            }
        },

        roundUp: function(number, digits) {
            var factor = Math.pow(10, digits);
            return Math.ceil(number * factor) / factor;
        },

        find_total_km: function(){

            this.car_finance_calculator_total_km= (this.choosed_term/12)*this.choosed_km;

            if(this.car_finance_calculator_loan_method == 'consumerLoan_choice' || this.car_finance_calculator_loan_method == 'chattelMortgage_choice')
            {
                this.choiceRvCalculator();
            }else {
                this.find_baloon_payment();
            }            
        },

        choose_finance_km: function(value,index){ 

            if(value != '') this.choosed_km = value;
            
            if(this.car_finance_calculator_loan_method == 'consumerLoan_choice' || this.car_finance_calculator_loan_method == 'chattelMortgage_choice')
            {
                this.find_total_km();
            }
            else
            {
                this.calculator();
            }
        },

        find_km: function(){

            this.find_km_flag = true;
            this.choose_finance_km(this.choosed_km,0);
            this.find_km_flag=false;
        },

        find_baloon_payment: function(){

            let result_arr= new Array();
            for(let i=0;i<this.financeCalculator_baloon_data.length;i++)
            {
                if(this.choosed_term == this.financeCalculator_baloon_data[i]['vga_term_in_months__c'] && this.car_finance_calculator_total_km ==this.financeCalculator_baloon_data[i]['vga_km_limit__c'])
                {
                    result_arr.push( this.financeCalculator_baloon_data[i]);
                }
            }

            //let vehicle_amount = this.car_configurator_data.mrrp;
            let vehicle_amount = this.totalMRRP;

            // console.log(result_arr);
            if (typeof result_arr[0] !='undefined' && ! isNaN(vehicle_amount))
            {
                let baloon_percent =Number(result_arr[0]['vga_balloon_rate__c']);
                this.car_finance_calculator_balloon_payment=(vehicle_amount * baloon_percent/100).toFixed(2);
            }
            else
            {
                let _temp =0;
                this.car_finance_calculator_balloon_payment = Number(_temp).toFixed;
            }

            this.car_finance_calculator_balloon_payment = Math.round(this.car_finance_calculator_balloon_payment)
            this.calculator();
        },
      
        prev: function() {
            this.clearMessages();
            this.form_step--;
            this.animateTop('#stepperForm');
        },

        next: function() {
            this.clearMessages();
            this.form_step++;
            this.animateTop('#stepperForm');
        },

        clearMessages: function() {
            this.error_message = '';
            this.error_top_message = '';
            this.error_km_message = '';
        },

        isNumber: function(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;

            //if ((charCode > 31 && (charCode < 48 || charCode > 57)) && ([43,45]).indexOf(charCode) == -1) {
            if ((charCode > 31 && (charCode < 48 || charCode > 57))) {
                evt.preventDefault();
            } else {
                return true;
            }
        },       
        choose_loan_assign : function()
        {
            // this.car_finance_calculator_loan_method = this.loan_type + this.loan_type_choice;
            // this.validateBaloonPayment();
            // this.next();
            this.assignLoanOptions(this.loan_type + this.loan_type_choice)
            this.next();
            this.animateTop();
        },

        animateTop: function(element = "") {

            var scrollTop_val = 0;
            if (element != "") {
                var scrollTop_val = $(element).offset().top;
            }

            $("html,body").animate({
                scrollTop: scrollTop_val
            }, "1000");
        },
        
        priceFormatter: function(price) {
            if (price && price!=0) {
                return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
            }
            return price;

        },
        priceFormatterWithComma: function(price) {
            if (price && price!=0) {
                price = Math.floor(price);
                return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            return price;

        },
        
        checkOptionsLength: function(){

            var length = false;
            $.each(this.car_configurator_data.addons, function(key, value) {

            if(value.price > 0)
            {
                length = true;
            }
           
            });

            return length ; 

        },

        getColourcode: function(colorCode = '') {
            if (colorCode.trim() == '') colorCode = 'B4B4'
            return 'linear-gradient(180deg, ' + colorCode + ' 80%, #ffffff 40%)';
        },

        getFontColor: function(colorCode = '') {
            if (colorCode.trim() == '') colorCode = '#fff';
            return colorCode;
        },

        getDummyImage: function(event) {
            event.target.src = 'https://one-hub-assets.s3-ap-southeast-2.amazonaws.com/common-assets/no-image.png';
        },

        buildAgain: function(event)
        {   
            window.location.href = 'https://www.volkswagen.com.au/en/models.html';
            //window.location.href = this.car_configurator_data.go_back_url;

        },

        optionsSum: function() {
            return this.totalMRRP - this.car_configurator_data.mrrp;
        },

        getRVBaseAmount: function() {
            let rvArray = this.car_configurator_data.finance_choice.rv_value;
            let baseAmount = 0;
            for(var k in rvArray) {
                if(rvArray[k].terms == this.choosed_term) {
                    baseAmount = rvArray[k]['km'][this.choosed_km];
                }
            }
            return baseAmount;
            //return this.car_configurator_data.rvValues[this.choosed_term][this.choosed_km];
        },

        choiceRvCalculator: function() {

            if(this.choosed_term == null || this.choosed_term == '' || this.choosed_term == undefined) {
                this.error_top_message = 'Please choose a term';
                this.car_finance_calculator_balloon_payment = 0;
            } else if(this.choosed_km == null || this.choosed_km == '' || this.choosed_km == undefined) {
                this.error_top_message = 'Please choose a KM per annuam';
                this.car_finance_calculator_balloon_payment = 0;
            }else {
                let rrp_edge = 67525;
                //let rrp_car = this.car_configurator_data.mrrp;
                let rrp_car = this.car_configurator_data.redbook_mrrp

                /*let rrp_car_net = (rrp_car < rrp_edge ) ? rrp_car : rrp_car - ((rrp_car - rrp_edge) * 0.33);*/
                let rrp_car_net = rrp_car;
                //let rrp_options = (this.car_configurator_data.on_offer == 1) ? 0 : this.optionsSum()
                let rrp_options = this.optionsSum();
                
                let rv_base_amount = this.getRVBaseAmount();
                let rv_base_perce = (rv_base_amount / rrp_car_net) * 100;
                
                let rv_options_amount = Math.min( rrp_options * rv_base_perce/100, rrp_car_net * 0.08 );
                let rv_calculated = +rv_base_amount + +rv_options_amount;
                this.car_finance_calculator_balloon_payment = rv_calculated;  
            } 

            this.calculator();           
        },

        setNonChoiceLoanTerm: function(termSelected) {
            this.choosed_term = termSelected;
            this.choose_finance_last_term(this.choosed_term)
        },

        increaseKM: function() {
            let array = this.car_finance_calculator_finance_choice_km
            index = array.indexOf(this.choosed_km);
            let nextKm = 0;
            this.error_km_message = '';
            if(index >= 0 && index < array.length - 1){
               nextKm = array[index + 1]
               this.choosed_km = nextKm
               this.choose_finance_km(this.choosed_km)
            }else{
                this.error_km_message = 'Maximum is ' + this.choosed_km + 'km'
                this.choosed_km = this.choosed_km
            }            
        },

        decreaseKM: function() {
            let array = this.car_finance_calculator_finance_choice_km
            index = array.indexOf(this.choosed_km);
            let nextKm = 0;
            this.error_km_message = '';
            if(index > 0){
               nextKm = array[index - 1]
               this.choosed_km = nextKm
               this.choose_finance_km(this.choosed_km)
            }else{
                this.error_km_message = 'Minimum is ' + this.choosed_km + 'km'
                this.choosed_km = this.choosed_km
            }      
        },

        setNonChoiceLoanTermByKey: function(){
            // let term_key = this.$refs.term_range.value
            // let term = this.terms_in_moths[term_key-1];
            // this.setNonChoiceLoanTerm(term)
        },


       
    },

    beforeMount() {
        
        this.car_configurator_data = JSON.parse(vwfs_pyalod);
        // console.log(this.car_configurator_data);

        axios
        .get('/api/getENV')
        .then(response => {
            this.api_url = response.data
            this.redirect_storefrontLink = response.data.API_VWFS_STOREFRONT_REDIRECT_URL;
            // this.landing_page_vwfs_disclaimer =  response.data.VWFS_LANDING_PAGE_DISCLAIMERS;
            return response;
        }).then( response => {

            
            //locality settings
            this.landing_page_vwfs_disclaimer =this.car_configurator_data.desclaimer.landing_disclaimers;
            this.location_details.postcode = this.car_configurator_data.postcode;
            this.location_details.state = null; //this.car_configurator_data.dealer_state;
            this.location_details.locality = null; //this.car_configurator_data.dealer_city;

            //options
            this.car_purchase_selected_options['options'] = this.car_configurator_data.options_selected;

            // purchased vehicle details
            this.car_purchase_selected_options['model'] = this.car_configurator_data.model_name;
            this.car_purchase_selected_options['variant'] = this.car_configurator_data.sub_varient_name;
            this.car_purchase_selected_options['sub_variant'] = this.car_configurator_data.model_code;
            this.car_purchase_selected_options['exterior'] = {
                name : this.car_configurator_data.color_name,
                imageURL: '',
                prcode: '',
                price: this.car_configurator_data.color_price,
                tileURL: ''
            }
            this.car_purchase_selected_options['interior'] = {
                exclude_flag: '',
                imageURL: '',
                include_flag: '',
                name: this.car_configurator_data.interior_name,
                prcode: '',
                price: this.car_configurator_data.interior_price,
                tileURL: ''
            }

            this.total_price = this.car_configurator_data.mrdp;
            this.car_finance_calculator_deposit_amount = this.car_configurator_data.online_deposit;

            //user selected options
            this.user_selected_options = this.car_configurator_data.options_selected;

            
            if(this.car_configurator_data.default_term[this.car_finance_calculator_loan_method] != null){
                this.choosed_term = this.car_configurator_data.default_term[this.car_finance_calculator_loan_method]               
            }



            if(this.car_configurator_data.terms_array[this.car_configurator_data.sub_brand.toLowerCase()][this.car_finance_calculator_loan_method] !== undefined)
                this.getTerms(); //assigned to terms_in_moths
            else
                this.terms_in_moths = [] //Nothing given



            if(this.car_configurator_data.model_code == null 
                || this.car_configurator_data.model_code == undefined 
                || this.car_configurator_data.model_code == '')
            {
                        window.location = window.location.origin +'/app/locals/car-depositor-error';
            }
            this.car_configurator_data.booking_currency = "$";


            this.car_configurator_data.online_discount_discalimer_icon  = "*";
            this.is_car_configure_data_set = true;
            this.drive_away_tot = this.car_configurator_data.mrdp!=undefined?this.car_configurator_data.mrdp:0;                    
            this.polk_price_flag = false;
            this.polk_success = true;
            this.price_calculated =true;

            
            this.total_price=Number(this.total_price).toFixed(2);
            // this.car_finance_calculator_loan_method = 'consumerLoan';
            this.car_finance_calculator_deposit_amount = 0;
            this.car_finance_calculator_balloon_payment = 0;
            this.car_finance_calculator_amount_borrowed = 0;
            this.car_finance_calculator_balloon_payment_non_option =0;


           let financeDataServices = this.car_configurator_data.finance_choice;

           this.dealer_code = this.car_configurator_data.dealerCode;
           this.dealer_name =this.car_configurator_data.dealerName;
           this.dealer_phone =this.car_configurator_data.dealer_phone;
           this.dealer_postcode =this.car_configurator_data.dealerPostalCode;
           this.dealer_city = this.car_configurator_data.dealerCity;
           this.dealer_state = this.car_configurator_data.dealerState;
           this.dealer_country = this.car_configurator_data.country;
           this.dealer_country_code =this.car_configurator_data.country_code;
           this.dealer_street = this.car_configurator_data.dealerStreet;
           this.dealer_email = this.car_configurator_data.dealer_email;
           
           this.dealer_info.postcode_details.name = this.dealer_postcode;
           this.postcodeSearch();
           

           if(typeof this.car_configurator_data.finance_choice.rv_value ==='undefined' || this.car_configurator_data.finance_choice.rv_value.length == 0  ) {
                 this.finance_data = false;                 
           }else {
               this.setFinanceServices(financeDataServices);
           }

           this.calculator()

        })

        

    },

    filters: {
        capitalize: function (value) {

            if (!value) return ''

            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        },

        priceFormatter: function (price) {
            
            if(price == 0){
                return price
            }
            else if (price) {
                price = Math.floor(price);
                return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }

        },

        priceSpaceFormatter: function(price) {

            if (price && price != 0) {
                price = Math.floor(price);
                return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
            }else{
                return price;
            }

        },
    },
    mounted(){
        
    }
});
