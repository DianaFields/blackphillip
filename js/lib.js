function cursorDetect(){
	$( "nav" ).mouseover(function() {
		$("#first-image").css('opacity','0');
		$("#second-image").css('opacity','1');
	});
	$( "nav" ).mouseleave(function() {
		$("#first-image").css('opacity','1');
		$("#second-image").css('opacity','0');
	});
}
function logotype(){
	
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop > 300){
			$('h1').addClass('fixed-logo');
		}
		if(scrollTop < 300){
			$('h1').removeClass('fixed-logo');
		}
	});
}
function animateMenu(){
	(function($) {
		"use strict";
		$('.page-scroll').bind('click', function(event) {
			var $ele = $(this);
			$('html, body').stop().animate({
				scrollTop: ($($ele.attr('href')).offset().top - 60)
			}, 1450, 'easeInOutExpo');
			event.preventDefault();
		});
	})(jQuery);
}