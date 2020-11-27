@extends('one-hub-vwfs-fa.main')

@section('title', 'Finance Services | Volkswagen')

@section('header')
@include('one-hub-vwfs-fa.layouts.header')
@stop


@section('content')

<!-- <body> -->
<!-- @ include('one-hub-dealer-callback.common.menu') -->
<main>

	<div id="vwfs-holder-div" v-cloak>

		<div id="vwContents1">
			<div id="stepperForm">
				<div>


					<!--===========erro start========-->
					<div class="vga-oh-sdk-error-outer">

						<div class="vga-oh-sdk-error-inner">
							<div class="row">
								<div class="col-md-12">
									<div class="vga-oh-sdk-error-ic">
										<img src="https://one-hub-assets.s3-ap-southeast-2.amazonaws.com/common-assets/error.svg">
									</div>
								</div>

								<div class="col-md-12">
									<div class="vga-oh-sdk-error-right">
										<div class="vga-oh-sdk-error-head">An error occurred</div>
										<div class="vga-oh-sdk-error-text">
											As the interest rate is not available for this Model. Please try again later 
										</div>
										<!-- <div class="vga-oh-sdk-error-text-btblock">
										<a href="#"><button type="button" class="btn btn-primary vga-oh-sdk-error-bt">Back to home </button></a>
									</div> -->
									</div>
								</div>

							</div>
						</div>
					</div>


					<!--===========erro end========-->




				</div>

				<div class="clearfix"></div>

				<div v-show="layout == 'thankyou'">
					<!-- @ include('one-hub-car-depositor.sections.section-6') -->
				</div>

			</div>

		</div>
	</div>
</main>
<!-- </body> -->
@stop



@section('footer')
<!-- @ include('one-hub-dealer-callback.layouts.footer') -->
@include('one-hub-vwfs-fa.layouts.footer-script')
@stop