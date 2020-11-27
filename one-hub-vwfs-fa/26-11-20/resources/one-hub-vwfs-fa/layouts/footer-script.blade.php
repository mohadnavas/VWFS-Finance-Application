@if(isset($payload))
<script>
    var vwfs_pyalod = @json($payload); 
    var payload_id = {{$data_id}};
    // console.log("payload_id"+payload_id);
 </script>
 @endif
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="<?php echo APP_RESOURCE_URL; ?>/one-hub-vwfs-fa/js/popper.min.js"></script>
<script src="<?php echo APP_RESOURCE_URL; ?>/one-hub-vwfs-fa/js/bootstrap.min.js"></script>
<script src="<?php echo APP_RESOURCE_URL; ?>/one-hub-vwfs-fa/js/owl.carousel.min.js"></script>
<script src="<?php echo APP_RESOURCE_URL; ?>/one-hub-vwfs-fa/js/jquery.scrollbar.min.js"></script>
<!-- <script src="https://js.stripe.com/v3/"></script>
<script src="<?php echo APP_RESOURCE_URL; ?>/one-hub-vwfs-fa/js/app/stripe-client.js"></script> -->


<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<link href="https://unpkg.com/vue-bootstrap-typeahead/dist/VueBootstrapTypeahead.css" rel="stylesheet">
<script src="https://unpkg.com/vue-bootstrap-typeahead@0.2.6/dist/VueBootstrapTypeahead.umd.min.js"></script>
<script src="<?php echo env("HEROKU_ASSET_JS_AXIOS"); ?>"></script>
<script src="<?php echo APP_RESOURCE_URL; ?>/one-hub-vwfs-fa/js/jquery.fancybox.min.js"></script>

<script>
    axios.defaults.baseURL = @json(APP_RESOURCE_URL, JSON_PRETTY_PRINT);
    //axios.defaults.baseURL = "https://onehub-uat.herokuapp.com/";
</script>



<!-- Data Layer Integration Scripts -->
<!-- <script type="text/javascript" src="<?php echo env("ADOBE_ANALYTICS_URL"); ?>"></script> -->
<script src="//tam.volkswagen.com/vwd6/au_one/Bootstrap.js"></script>
<script type="text/javascript">
    if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
        document.write("\x3Cscript src='https://cdnjs.cloudflare.com/ajax/libs/bluebird/3.3.4/bluebird.min.js'>\x3C/script>");
        document.write("\x3Cscript src='<?php echo APP_RESOURCE_URL; ?>/one-hub-vwfs-fa/js/app/app-ie.js'>\x3C/script>");
    } else {
        document.write("\x3Cscript src='<?php echo APP_RESOURCE_URL; ?>/one-hub-vwfs-fa/js/app/app.js'>\x3C/script>");
    }
</script>



<!--
<script type="text/javascript">
    if ($(window).width() < 599) {
        $("#localitySearch").attr("placeholder", "Enter your postcode or suburb");
    } else {
        $("#localitySearch").attr("placeholder", "Please enter your suburb or postcode");
    }
    $(window).resize(function() {
        if ($(window).width() < 599) {
            $("#localitySearch").attr("placeholder", "Enter your postcode or suburb");
        } else {
            $("#localitySearch").attr("placeholder", "Please enter your suburb or postcode");
        }
    });
</script>
-->


<script>
    jQuery(document).ready(function() {
        jQuery('.scrollbar-inner').scrollbar();
    });
</script>
<script type="text/javascript">
    @if(isset($data_id))
    app.data_id = @json($data_id, JSON_PRETTY_PRINT);
    @endif
</script>

<script>
    jQuery(document).ready(function() {
    // Filter dropdown script
    var ClickRef = $('.__DropMe');
    var dropdownFlt = $('.vwa-stock-filter-prs-model-dropdown');
    var timesClicked = 0;
    var Clicked = $('.vga-stock-body-prs-label');
    ClickRef.click(function(event) {
        if ($(this).find(Clicked).hasClass('drp-stock-arrow') == false) {
            Clicked.removeClass('drp-stock-arrow'); // rotate arrow
            $(this).find(Clicked).addClass('drp-stock-arrow'); // rotate arrow
            //dropdownFlt.removeClass("flt_active");
            $('.vwa-stock-filter-prs-model-dropdown').removeClass('flt_active');
            $('.vga-stock-body-prs-label').css({
                "border-bottom-color": "#d0d0d0"
            });
            $(this).find(Clicked).css({
                "border-bottom-color": "white"
            });
            $(this).find(dropdownFlt).toggleClass('flt_active');
            Clicked.removeClass('Clicked');
            $('.__DropMe').css({
                "z-index": ""
            });
            $(this).css({
                "z-index": ""
            });
            event.stopPropagation();
        } else {
            dropdownFlt.removeClass("flt_active");
            Clicked.css({
                "border-bottom-color": "#d0d0d0"
            });
            Clicked.removeClass('drp-stock-arrow'); // rotate arrow
        }
    });

    $('body').click(function() {
        var Clicked = $('.vga-stock-body-prs-label');
        dropdownFlt.removeClass("flt_active");
        Clicked.css({
            "border-bottom-color": "#d0d0d0"
        });
        Clicked.removeClass('drp-stock-arrow'); // rotate arrow
    });

    $(".vws-stock-flt-drprs-cplose").click(function() {
        dropdownFlt.removeClass("flt_active");
        Clicked.removeClass('Clicked');
    });
});


    $(".js-notification-close").click(function(){
        document.cookie = "cookie_accept=true";
        $("#js-notifications-group").css("display", "none");
        $('body.compensate-for-scrollbar').css(
                    "overflow", "auto"
                );
    });
    function cookie_close()
    {
        // $( "body" ).removeClass("compensate-for-scrollbar");
        // $('body.compensate-for-scrollbar').css(
        //             "overflow", "auto"
        //         );
        $("#js-notifications-group").css("display", "none");
        document.cookie = "cookie_accept=true";
        window.open('<?php echo APP_RESOURCE_URL; ?>/finance-services?pages=cookie','_blank');
    }

   



    </script>


<!--Term Slider -->

<script>
    var sheet = document.createElement('style'),  
      $rangeInput = $('.range input'),
      prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];
    
    document.body.appendChild(sheet);
    
    var getTrackStyle = function (el) {  
      var total_labels = $('.range-labels li').length;
      var total_labels = app.terms_in_moths.length;
      //var curVal = el.value;

      let key = 0;
      for(var k in app.terms_in_moths) {
            if(app.terms_in_moths[k] == app.choosed_term){
                key = k;   
            }
      }
      key++;
      var curVal = key;
      //var curVal = el.value;
      
      //val = (curVal - 1) *32.80,
     // var val = (curVal-1) * (100/(total_labels-1));
      var val = (curVal-1) * (100/(total_labels-1));
      var style = '';

      
      
      
      // Set active label
      $('.range-labels li').removeClass('active selected');
      
      var curLabel = $('.range-labels').find('li:nth-child(' + curVal + ')');
      
      curLabel.addClass('active selected');
      curLabel.prevAll().addClass('selected'); 
      
      // Change background gradient
      for (var i = 0; i < prefs.length; i++) {
        style += '.range {background: linear-gradient(to right, #001e50 0%, #001e50 ' + val + '%, #dfe4e8 ' + val + '%, #dfe4e8 100%)}';
        style += '.range input::-' + prefs[i] + '{background: linear-gradient(to right, #001e50 0%, #001e50 ' + val + '%, #dfe4e8 ' + val + '%, #dfe4e8 100%)}';
      }

      $('.range-labels li').css('width',(100/(total_labels-1))+'%');      
    
      return style;
    }
    
    $rangeInput.on('input', function () {
      console.log('range triggered')
      sheet.textContent = getTrackStyle(this);
    });
    
    // Change input value on label click
    $('body').on('click','.range-labels li', function () {
      var index = $(this).index();      
      $rangeInput.val(index + 1).trigger('input');
      
    });

    </script>
 <script type="text/javascript">
    $(window).on("load",function(){
          $('.loan_method_choice').prop('checked', false);
          $('.loan_method').prop('checked', true);
          $(".loantypeCh").prop('checked', true);
          $(".loantypeC").prop('checked', true);
          $(".payment_term_option").prop('checked', false);


          $(".infobox-opener").click(function(){
            $(this).closest('.infobox, .vgaInfoboxomD').find('.infobox-benefits').fadeIn()
          });
          $(".closebutton, .closebuttonoption").click(function(){
            $(this).closest('.infobox-benefits').fadeOut()
          });

          $('#term_ranger').trigger('input');
    });

  </script>

    </script>