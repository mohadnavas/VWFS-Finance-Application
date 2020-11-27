<!-- consumer loan -->
<div class="vga-oh-sdk-depositor-dealer-confirm-lefthead p0" v-show="loanChoice == 'consumerLoan'"> <span> Your options with </span> Consumer Loan </div>
<p v-show="loanChoice == 'consumerLoan'">Enjoy a new Volkswagen sooner with 100% finance for approved customers. There’s nothing to pay upfront, no account keeping or annual fees, and our competitive fixed interest rates mean you can budget with confidence.</p>

<!-- consumer loan choice -->
<div class="vga-oh-sdk-depositor-dealer-confirm-lefthead p0"  v-show="loanChoice == 'consumerLoan_choice'"> <span> Your options with </span> Volkswagen Choice</div>
<p v-show="loanChoice == 'consumerLoan_choice'">Volkswagen Choice provides guaranteed assurance of knowing exactly what the minimum value of your vehicle will be in the future and the option to trade-in, retain or return your vehicle. There are also no account keeping fees with a fixed interest rate.</p>

<!-- Chattel mortgage -->
<div class="vga-oh-sdk-depositor-dealer-confirm-lefthead p0"  v-show="loanChoice == 'chattelMortgage'"> <span> Your options with </span> Chattel Mortgage</div>
<p v-show="loanChoice == 'chattelMortgage'">A Chattel Mortgage is similar to a secured loan as Volkswagen Financial Services can provide the funds for you to purchase the vehicle and you'll take ownership at the time of purchase. Then VWFS takes a 'mortgage' over the vehicle as security for the loan. Once the contract is completed you'll own the vehicle outright.</p>

<!-- Chattel mortgage choice-->
<div class="vga-oh-sdk-depositor-dealer-confirm-lefthead p0"  v-show="loanChoice == 'chattelMortgage_choice'"> <span> Your options with </span> Volkswagen Choice</div>
<p v-show="loanChoice == 'chattelMortgage_choice'">Volkswagen Choice provides guaranteed assurance of knowing exactly what the minimum value of your vehicle will be in the future and the option to trade-in, retain or return your vehicle. There are also no account keeping fees with a fixed interest rate.</p>