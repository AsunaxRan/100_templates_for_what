$(window).on('load', function() {
	$('.preloader').fadeOut('fast');
});

window.onscroll = function() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("scroll-top").style.display = "inline-block";
	} else {
		document.getElementById("scroll-top").style.display = "none";
	}
}

/*----------------| scrollTo |----------------*/
$('.smoothScroll').click(function(){
	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 1000);
	return false;
});

var lightbox = $('.gallery a').simpleLightbox();

$("html").easeScroll();

$(document).ready(function(){
	var slider_last_item = $('.text-slider').length - 1;
	var slider_current_item = 0;
	var slider = setInterval(slider_next, 3000);

	function slider_reset() {
		clearInterval(slider);
		slider = setInterval(slider_next, 3000);
	}

	function slider_next() {
		$('.text-slider.active').removeClass('active');

		if (slider_current_item == slider_last_item) {
			slider_current_item = 0;
		} else {
			slider_current_item++;
		}
		$('.text-slider:nth-child(' + (slider_current_item + 1) + ')').addClass('active');
		slider_reset();
	}

	function slider_prev() {
		$('.text-slider.active').removeClass('active');

		if (slider_current_item == 0) {
			slider_current_item = slider_last_item;
		} else {
			slider_current_item--;
		}
		$('.text-slider:nth-child(' + (slider_current_item + 1) + ')').addClass('active');
		slider_reset();
	}

	$(".slider-next").click(slider_next);
	$(".slider-prev").click(slider_prev);
});