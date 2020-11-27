
<section class="privacyCollectionStattementSection" v-show="form_step>0 && form_step!=5">
	
	
	
	
	
	
    <div class="container p-sm-lr-20">
    <div class="vga-oh-sdk-depositor-mid-main priv_pad" style="float: inherit;">
		
		
		 <div class="vga-oh-sdk-depositor-priv" :style="[ form_step == 2 ? {'border-top':'none'} : {} ]">
			 
			 {{-- <span v-if="car_configurator_data.online_discount && car_configurator_data.online_discount_discalimer!='' && car_configurator_data.online_discount_discalimer!=undefined"><span v-html="car_configurator_data.online_discount_discalimer">Discount is a reduction off the MRRP, and only available for eligible vehicles ordered online. Discount is not available in conjunction with any other current offers on eligible vehicles, such as the offers advertised on <a href="https://www.volkswagen.com.au/app/locals/offers-pricing" target="_blank">https://www.volkswagen.com.au/app/locals/offers-pricing</a>.  Purchaser must enter into a contract of sale with a dealer for the vehicle within 5 days of paying deposit online in accordance with the <a href="#" style="color: #b6b6b6"  data-toggle="modal" data-target="#vgaOH_DisclaimerPopupTrigger" data-backdrop="static" data-keyboard="false">Terms and Conditions</a>.” 

			
        </span> --}}
        <br><br>
        </span>

      
             <span v-show="form_step == 1" v-html="disclaimer_first_line" >             	
             </span>
             <br v-show="form_step == 1" />
             <br v-show="form_step == 1" />
              									
             <span v-show="form_step == 1" v-html="landing_page_vwfs_disclaimer" >
             </span>            
             <span v-show="form_step == 3 || form_step == 4" v-html="disclaimerText" >             	
             </span>

        </div>
   
  
        <div class="">
            <div class="privacyCollection_minusMarg">
                <div class="panel-group" id="accordion1">
                    <div class="panel panel-default">
                        <div class="panel-heading vga-oh-savn-privacyAccoHead" v-show="1==2">
                            <p class="panel-title vga-oh-sdk-depositor-address-terms"  data-toggle="modal" data-target="#vgaOH_DisclaimerPopupTrigger" data-backdrop="static" data-keyboard="false"><img src="https://one-hub-assets.s3-ap-southeast-2.amazonaws.com/one-hub-test-drive/img/magnifier-plus.svg"><suP>†</suP> Terms and Conditions</p>
                        </div>
                        <div class='clearfix'></div>
                        <div id="collapseTwo" class="panel-collapse collapse">
                            


                        </div>
                    </div>
                </div>
            </div>
        </div>
   
    </div>
    </div>








    <!--  model choose modal-->
  <div class="modal fade vga-oh-savn-popup-disclaimerModal" id="vgaOH_DisclaimerPopupTrigger" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered vga-oh-savan-disclimer-PopupOuter" role="document">
      <div class="modal-content">
        <h2 class="vga-oh-savn-Disclaimer-OuterMainHeadPopup"><span> Terms and conditions</span></h2>
        <div class="modal-body">
          <div class="col-lg-12">
            <div class="vga-oh-savn-ModelpopupCustRow">
              <div class="vga-oh-savn-4w2mLayout">
                <div class="vga-oh-savn-modelPopupListingDisclaimer">
                  <div  class="scrollbar-inner vga-oh-disclaimerContentpopup">
                    <div class="panel-body vga-oh-savn-PrivacyAccoBody"> 



                                <span>1.</span> 	Volkswagen Group Australia Pty Ltd ABN 14 093 117 876 (Volkswagen, us or we) offers the ability to place a deposit on selected Volkswagen Passenger and Commercial Vehicles through <a href="https://www.volkswagen.com.au/en.html" target="_blank"> www.volkswagen.com.au</a> website (the <b>Website</b>) by placing a $500 deposit in selected Volkswagen vehicles (the <b>Service</b>). .<br><br>



<span>2.</span>  	Your use of the Service is governed by these Terms and Conditions, and by using the Service, you agree to these Terms and Conditions.
<br><br>
						
						
<span>3. </span> 	To be eligible to use the Service you must be aged over 18 years and be an Australian resident residing in Australia.
<br><br>

<b>Order Process </b><br><br>
						
<span>4.</span>	On the Website, you can:      <br> <br>
						
	<div class="vga-oh-savn-PrivacyAccoBody-inner">
	<div class="vga-oh-savn-PrivacyAccoBody-inner-main">
    <span> a.</span>  <p>	Configure your Volkswagen by selecting a model variant, options and colours (<b>Selected Vehicle</b>);</p>
	</div>
		
	
	<div class="vga-oh-savn-PrivacyAccoBody-inner-main">
     <span> b.</span> <p>	Nominate the authorised Volkswagen dealer (<b>Dealer</b>) from whom you wish to buy the Selected Vehicle; and </p>
	</div>
		
		
	<div class="vga-oh-savn-PrivacyAccoBody-inner-main">	
     <span> c.</span> <p>	Provide your contact details and pay us a deposit of $500 using your credit card (the <b>Deposit Fee</b>). We will not store your credit card details and a third party gateway provider will be used to process your payment.</p>
	</div>
		
	</div>


<span>5.</span> 	Only selected vehicles labelled “Order Now” can be ordered online (varies with stock availability). <br><br>


<span>6. </span> 	Once the Deposit Fee has been processed, please retain the order confirmation as proof of the Deposit Fee, which must be presented to the Dealer to redeem your deposit. The dealership will need to take a copy of this for processing and auditing purposes.<br><br>


<span>7.</span> 	Once your order is received, the Dealer will contact you to discuss your Selected Vehicle and securing this Selected Vehicle in the event your preferred Dealer does not have available stock. <br><br>

						
<span>8.</span>	Vehicles delivery times varies based on complexity and demand of the Selected Vehicle. Delivery times can vary from 1 week and up to 6 months in rare circumstances. Conditions of purchase are subject to COVID-19 State and Federal Government public orders and regulations, which may result in wait times being extended. Your Dealer will be able to provide you more up to date advice and discuss delivery options with you, including delivery to your place of residence.<br><br>
						
						
<span>9.</span>	If you would like to transfer the Deposit Fee to another vehicle in the Volkswagen Passenger Vehicle or Commercial vehicle range – this will be permitted in consultation with the Dealer.<br><br>
						

<span>10.</span>	The Deposit Fee cannot be used on anything other than the purchase of the Volkswagen Passenger or Volkswagen Commercial Vehicle. <br><br>
						

<span>11.</span>	The payment of the Deposit fee does not secure ownership of the Selected Vehicle. To buy the Selected Vehicle, you will need to go to the Dealer (subject to COVID-19 State and Federal Government public orders and regulations), agree a purchase price for the Selected Vehicle with the Dealer, and sign a contract of sale with the Dealer for the Selected Vehicle (<b>Dealer Contract of Sale</b>).<br><br>
						
		
						
						
					

<span>12.</span>	Once you sign a Dealer Contract of Sale:<br><br>
						
	<div class="vga-oh-savn-PrivacyAccoBody-inner">		
		
		<div class="vga-oh-savn-PrivacyAccoBody-inner-main">
      <span>a.</span>  <p> a.	You will be required to pay the Dealer the purchase price you agree with the Dealer for the Selected Vehicle less the amount of the Online deposit Fee;</p>
		</div>
		
		
		<div class="vga-oh-savn-PrivacyAccoBody-inner-main">
						
     <span>b.</span>   <p>b.	the Dealer will (subject to COVID-19 State and Federal Government public orders and regulations) deliver the Selected Vehicle to you in accordance with the Dealer Contract of Sale; and</p>
			
		</div>
		
		<div class="vga-oh-savn-PrivacyAccoBody-inner-main">
						
		<span>c.</span>  <p>c.	We will pay the Deposit Fee to the Dealer.</p>
			
		</div>
		
	</div><br><br>
						
						

	<b>Refund of the Deposit Fee </b><br><br>
						
						
	<span>13.</span>	You may seek a refund of the Deposit Fee from us at any time prior to signing the Dealer Contract of Sale by using the refund mechanism in the Confirmation Email. After receiving this request, we will refund the in full to the credit card you used on the Website.<br><br>
						
						
	<span>14.</span>	If you request a refund of the Deposit Fee, your deposit for the Selected Vehicle will be cancelled, and the Dealer will be able to sell the Selected Vehicle to someone else. If you request a refund, and later change your mind and wish to deposit another Volkswagen Passenger or Commercial vehicle, you will only be able to do so if there is remaining stock. <br><br>				
						
						
						
	<span>15.</span>	Subject to COVID-19 State and Federal Government public orders and regulations, within five (5) days of being notified by the Dealer that the Selected Vehicle is available for purchase, you will be required to complete a contract of sale in your name for the Selected Vehicle and pay the Dealer the purchase price less the Deposit Fee for the Selected Vehicle. For the avoidance of any doubt, you cannot nominate another person or entity as the purchaser under the contract of sale.   <br><br>				
											
						
						

	<span>16.</span>	The Dealer will be entitled to terminate this Online Vehicle Deposit Agreement for the Selected Vehicle if you fail to sign the contract of sale in your name and pay the Dealer the required purchase price within the timeframe mentioned.<br><br>		
						
						
						
						
	<span>17.</span>	You can terminate this Online Vehicle Deposit Agreement for the Selected Vehicle at any time by sending the Dealer written notice requesting that it be cancelled.<br><br>		
						
						
						
						
						
	<span>18.</span>	All refund requests will be approved, unless the Dealer Contract of Sale has already been signed.<br><br>							
						
						
						
	<span>19.</span>	Where this deposit for the Selected Vehicle is terminated by you or the Dealer, we will send you a written notice and refund the Deposit Fee by cheque, or by transferring it to your credit card or bank account.<br><br>							
											
						
						
						
						
	<span>20.</span>	This deposit for the Selected Vehicle is not assignable without the other party’s written consent. Each party has sole and absolute discretion whether it wishes to provide its consent.<br><br>							
						
						
						
						
						
		

<span>21.</span>	You acknowledged:<br><br>
						
	<div class="vga-oh-savn-PrivacyAccoBody-inner">						
    	
		<div class="vga-oh-savn-PrivacyAccoBody-inner-main">
		<span>a.</span> <p>	that final Selected Vehicle production and availability numbers are presently unknown;</p>
			
		</div>
		
		<div class="vga-oh-savn-PrivacyAccoBody-inner-main">

		<span>b.</span> <p>b.	that you have not relied on any representation or warranty as to:</p>
			
			<div class="vga-oh-savn-PrivacyAccoBody-inner-main">
          <span style="margin-left: 25px;"> i.</span>  <p style="width: 82%">i.	the Selected Vehicle’s expected price, features, specifications and possible availability dates;</p>
			</div>
		
			<div class="vga-oh-savn-PrivacyAccoBody-inner-main">
		<span style="margin-left: 25px;"> ii. </span>   <p style="width: 82%">ii.	the trade-in price and/or value of any vehicle(s) you may own that you may wish to trade-in for the Selected Vehicle.</p>
			</div>
		
		</div>
	
	</div>
						
		<br><br>
						
						

<span>22.</span>	We hold the Deposit Fee on trust for you pending your signing of a Dealer Contract of Sale. Once we pay the Deposit Fee to the Dealer, to the full extent permitted by law, our obligations in relation to the Deposit Fee will cease. You may be entitled to seek a refund of the Deposit Fee from the Dealer in certain circumstances, depending on the terms of the Dealer Contract of Sale you sign, applicable statutory cooling off periods and your rights under the Australian Consumer Law.<br><br>
						
						
						

<b>Privacy</b><br><br>

<span>23.</span>We collect the personal information you provide on the Website in order to provide the Service, and may, for this purpose, and for the purpose of processing your deposit for a Selected Vehicle, disclose such information to third parties, including but not limited to agents, contractors, service providers, and our authorised dealers.<br><br>

						

<span>24.</span>	Where you have consented on the Website to receiving direct marketing communications from us, we may use the information you have provided to send you marketing communications.   <br><br>
						


<span>25.</span> For full details of how we may use and disclose your personal information, see our <a href="https://www.volkswagen.com.au/en/privacy-policy.html" target="_blank">Privacy Policy</a> here.<br><br>
						

<b>Other</b><br><br>

<span>26.</span>	By using the Service, you represent and warrant that all information you provide on the Website is true and accurate. If at any time we discover that any of the information you have provided is not true or not accurate, we reserve our right to cancel your deposit for the Selected Vehicle.<br><br>


<span>27.</span>	Any cost associated with accessing the Website are your responsibility and is dependent on the Internet service provider used.<br><br>


<span>28.</span>	To the full extent permitted by law, we exclude all liability for any loss (including any damage, claim, injury, cost or expense, including loss of opportunity) which you may suffer or incur in connection with the Service, including but not limited to any technical difficulties or access issues with the Website (whether or not under our control).  <br><br>


<span>29.</span>	We reserve the right to cancel the Service for any reason and at any time. <br><br>


<span>30.</span>	These Terms and Conditions are governed by the laws of New South Wales and the parties submit to the non-exclusive jurisdiction of those courts.<br><br>




                            </div>



                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <button type="button" class="btn-primary vga-oh-savn-modalpopupCloseBtn" data-dismiss="modal">
        <span>
        <svg class="" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" role="img">
          <path d="M20.956 3.985l-.942-.941L12 11.059 3.985 3.044l-.941.941L11.059 12l-8.015 8.015.941.941L12 12.941l8.014 8.015.942-.941L12.941 12z"></path>
        </svg>
        close</span></button> -->

         <div class="pop-back" data-dismiss="modal">
             <img src="https://one-hub-assets.s3-ap-southeast-2.amazonaws.com/troc-depositor/img/back-left.svg">
             <span>Back</span>
         </div>


      </div>
    </div>
  </div>
  <!-- model choose modal--> 


</section>




<!-- privacy accordion -->
<!-- <section class="privacyCollectionStattementSection">
    
    <div>
      <div class="panel-group" id="accordion1">
        <div class="panel panel-default">
          <div class="panel-heading vga-oh-savn-privacyAccoHead">
            <p class="panel-title"> <a class="accordion-toggle collapsed vga-oh-savn-privacyAccoToggleCls" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">Privacy Collection Statement </a> </p>
          </div>
          <div id="collapseTwo" class="panel-collapse collapse">
            <div class="panel-body vga-oh-savn-PrivacyAccoBody"> Dummy content Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->
  <!-- privacy accordion --> 							