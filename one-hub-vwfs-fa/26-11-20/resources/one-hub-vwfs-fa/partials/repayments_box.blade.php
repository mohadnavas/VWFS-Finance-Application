<div class="heading">Repayments</div> 

<div class="weekly-amt">
 <span>$@{{car_finance_calculator_weekly_payment | priceSpaceFormatter}}</span> /week*
</div>
<div class="monthly-amt  pb-2">
 It's <span>$@{{car_finance_calculator_monthly_payment | priceSpaceFormatter}}</span> /month*
</div>

<div class="img-placeholder-section mt-3" v-bind:style="{ background: getColourcode(car_configurator_data.car_background_color) }">
    <div class="img-placeholder-section-inner">
        <div class="img-placeholder-section-inner-content" v-bind:style="{ color: getFontColor(car_configurator_data.car_font_color) }">
        <div class="veh-name" v-bind:style="{ color: getFontColor(car_configurator_data.car_font_color) }">@{{ car_configurator_data.model_name }} @{{ car_configurator_data.sub_varient_name }}</div>
        <div class="veh-model" v-bind:style="{ color: getFontColor(car_configurator_data.car_font_color) }">@{{ car_configurator_data.transmission_desc }}</div>
    </div>
    <div class="clearfix"></div>
    <img class="img-fluid no-cur" :src="car_configurator_data.selected_model_img" @error="getDummyImage" />
</div>
</div>

<div class="payment-splitup-section">
 <ul>
     <li><span class="splitup-list">Vehicle Price </span><span class="splitup-dtls">$@{{ total_price | priceSpaceFormatter}}</span><div class="clearfix"></div></li>
     <li><span class="splitup-list">Interest Rate </span><span class="splitup-dtls">@{{ intrest }}%<sup>±</sup></span><div class="clearfix"></div></li>
     <li v-show="isChoice"><span class="splitup-list">Guaranteed Future Value</span> <span class="splitup-dtls">$@{{ car_finance_calculator_balloon_payment | priceSpaceFormatter }}</span><div class="clearfix"></div></li>
     <li><span class="splitup-list">Total Interest & Fees</span> <span class="splitup-dtls">$@{{ car_finance_calculator_weekly_result_total_interst | priceSpaceFormatter }}<sup>#</sup></span><div class="clearfix"></div></li>
     <li><span class="splitup-list">Total Repayment</span> <span class="splitup-dtls">$@{{ car_finance_calculator_weekly_result_total_repayable | priceSpaceFormatter }}</span><div class="clearfix"></div></li>
     <li v-show="1==2"><span class="splitup-list">Total Borrowed</span> <span class="splitup-dtls">$38,355<sup>#</sup></span><div class="clearfix"></div></li>
     
 </ul>
 
 <div class="clearfix"></div>
 </div>