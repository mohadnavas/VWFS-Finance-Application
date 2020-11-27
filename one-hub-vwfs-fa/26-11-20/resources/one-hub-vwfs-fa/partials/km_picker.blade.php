<h4>How many kilometres do you drive annually?</h4>
<p>Choose from 10,000 to 40,000km. The number will impact the minimum future value of your Volkswagen. </p>

<span v-show="error_km_message!=''">
<p style="color:red" >@{{error_km_message}}</p>
</span>

<div class=vwfs-ssn-kilometer-annually-drive-number-increment-section>
    <div class="kilometer-chooser mt-3 mb-4">
        <form method="post" action="">
            <div class="inc kilometer-chooser-plus-button"><span class="no-select" v-on:click="increaseKM()">+</span></div>
            <div class="dec kilometer-chooser-minus-button"><span class="no-select" v-on:click="decreaseKM()">-</span></div>
            <div class="show-kilometer" v-html="chosenKMFormated"></div>
        </form>
        <div class="clearfix"></div>
        </div>

</div>