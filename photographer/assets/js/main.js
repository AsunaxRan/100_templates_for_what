$(window).on('load', function() {
	$('.preloader').fadeOut('fast');
});

/*----------------| scrollTo |----------------*/
$('.smoothScroll').click(function(){
	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 500);
	return false;
});

/*----------------| countUp |----------------*/
$(document).ready(function() {
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
});