<div class="form-group">
    <label>Your deposit (optional) </label>
    <input type="text" class="form-control" @change="validateBaloonPayment" v-model="car_finance_calculator_deposit_amount" placeholder="Enter deposit amount">
    <i class="form-control-feedback fa fa-usd"></i>
</div>
<div class="infobox">
<div>
    <a href="javascript:void(0)" name="" class="infobox-opener">What is this?</a>
</div> 
<div class="infobox-benefits" style="display:none;"><p>A <span>deposit payment</span> is your up-front payment. A larger deposit will reduce your total amount repayable and may decrease your monthly repayments. </p>
        <div>
            <a href="javascript:void(0)" class="closebutton"><img src="https://one-hub-assets.s3-ap-southeast-2.amazonaws.com/vwfs/img/close.svg"></a>
    </div> 
</div> 
</div>