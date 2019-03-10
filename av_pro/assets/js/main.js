/*-------------- slider --------------*/
if ($('.last-movie-update').length !== 0
	&& $('.movie-section-distinct').length !== 0) {
	$('.last-movie-update').slick({
		autoPlay: false,
		prevArrow: '<button class="slick-arrow slick-prev"><i class="fas fa-chevron-left"></i></button>',
		nextArrow: '<button class="slick-arrow slick-next"><i class="fas fa-chevron-right"></i></button>',
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			}
		]
	});

	$('.movie-section-distinct').slick({
		autoPlay: false,
		prevArrow: '<a href="#" class="slick2-arrow slick2-prev"><i class="fas fa-chevron-left"></i></a>',
		nextArrow: '<a href="#" class="slick2-arrow slick2-next"><i class="fas fa-chevron-right"></i></a>',
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			}
		]
	});
}

$('.ranking-select').click(function(e) {
	e.preventDefault();
	$('.ranking-select').removeClass('active');
	$(this).addClass('active');
	var target = $(this).attr('href');
	$('.ranking-tab').removeClass('show');
	$(target).addClass('show');
});