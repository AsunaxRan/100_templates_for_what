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
	let header_height = $("#header").height();
	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top - header_height + 1
	}, 500);
	return false;
});

$("html").easeScroll();

$('body').scrollspy({ 
	target: '#header',
	offset: $("#header").height()
});

$(document).ready(function() {
	var wow = new WOW({
	    boxClass:     'wow',      // animated element css class (default is wow)
	    animateClass: 'animated', // animation css class (default is animated)
	    offset:       $("#header").height(),          // distance to the element when triggering the animation (default is 0)
	    mobile:       true,       // trigger animations on mobile devices (default is true)
	    live:         true,       // act on asynchronously loaded content (default is true)
	    callback:     function(box) {
	      // the callback is fired every time an animation is started
	      // the argument that is passed in is the DOM node being animated
	    },
	    scrollContainer: null // optional scroll container selector, otherwise use window
	});
	wow.init();
});