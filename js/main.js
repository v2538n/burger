(function($){
	$(document).ready(function(){

		$('.burger').append("<span class='burger__element'></span>");

		let btn = $('.burger, .top-nav');

		btn.click(function(){
			btn.toggleClass('active');
			$('body').toggleClass('lock');
		});

	});
})(jQuery);