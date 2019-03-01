/*----------------| hero-slider |----------------*/
$('.hero-slider').slick({
	autoplay: true,
	arrows: false,
	dots: false,
	infinite: true,
	speed: 500,
	fade: true,
	cssEase: 'linear'
});

/*----------------| scrollTo |----------------*/
$('.scrollTo').click(function(){
	let header_height = $("#header").height();
	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top - header_height + 1
	}, 500);
	return false;
});