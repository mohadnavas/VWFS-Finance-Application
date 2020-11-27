<div class="form-group"> 
	<label>Your balloon payment (optional)</label>
	<input type="text" class="form-control"@blur="validateBaloonPayment" v-on:keyup.enter="validateBaloonPayment" v-model="car_finance_calculator_balloon_payment_non_option" placeholder="Enter Balloon payment ">
	<i class="form-control-feedback fa fa-usd"></i>
</div>

<div class="infobox">
	<div>
		<a href="javascript:void(0)" name="" class="infobox-opener">What is this?</a>
	</div> 
	<div class="infobox-benefits" style="display:none;">
		<p>A <span>balloon payment</span> is your final payment paid at the end of your loan. Increasing the size of the balloon payment may decrease your monthly repayments.</p>
    <div>
        <a href="javascript:void(0)" class="closebutton"><img src="https://one-hub-assets.s3-ap-southeast-2.amazonaws.com/vwfs/img/close.svg"></a>
	</div> 
	</div> 
</div>