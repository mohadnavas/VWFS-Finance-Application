<!-- non choiece range term selector -->
<div class="vwfs-ssn-loan-term-chooser-section mt-4 pt-4" v-show="isNonChoice">
   <h4>Choose your loan term (in months)</h4>
   <div class="vwfs-ssn-term-chooser-section mt-4 mb-4">
    <div class="range">
        <input type="range" id="term_ranger" min="1" :max="totalTerms" steps="1" v-model="termIndex" ref="term_range"  />
    </div>

    <ul class="range-labels">
    <li   v-on:click="setNonChoiceLoanTerm(term)" v-for="(term,key) in terms_in_moths">@{{ term }}</li>
    </ul>
    </div>
    <div class="clearfix"></div>
</div>

<!-- choice term -->
<div class="vwfs-ssn-loan-term-chooser-month-section mt-4 pb-3" v-show="isChoice">
   <h4>Choose your loan term (months)</h4>
   <div>
       <div class="col p-0">
          
          <div class="vwfs-customRadio-session" v-for="(choice_term,index) in car_finance_calculator_finance_choice_term">
          <label class="vwfs-customRadio"> @{{ choice_term }}
              <input type="radio" :checked="choosed_term==choice_term" name="radio" v-on:click="choose_finance_term(choice_term)">
              <span class="checkmark"></span>
          </label>
          </div>
         
  </div> 
  <div class="clearfix"></div>
  </div>
</div>