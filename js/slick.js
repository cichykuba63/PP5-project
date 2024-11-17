$('.team-carousel').slick({
	infinite: true,
	autoplay: true,
    autoplaySpeed: 3000,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	mobileFirst: true,
	responsive: [
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2
			},
		},
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        }
	]
})
