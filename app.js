jQuery(document).ready(function ($) {
	let owl = $('#owl-demo-1');
	owl.owlCarousel({
		autoplay: false,
		autoplayTimeout: 1000,
		autoplayHoverPause: true,
		items: 3,
		loop: false,
		center: false,
		rewind: false,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,
		margin: 54,
		stagePadding: 0,
		merge: false,
		mergeFit: true,
		autoWidth: false,
		startPosition: 0,
		rtl: false,
		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,
		dots: false,
		nav: true,
		responsive: {
			0: {
				items: 1,
			},
			480: {
				items: 2,
			},
			768: {
				items: 2,
			},
			992: {
				items: 3,
			},
		},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,
		fallbackEasing: 'swing',
		info: false,
		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',
		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab',
		autoHeight: false,
		lazyLoad: false,
		navText: [$('.prev'), $('.next')],
		navContainerClass: 'services_carousel-nav',
	});

	$('.next').click(function () {
		owl.trigger('owl.next');
	});
	$('.prev').click(function () {
		owl.trigger('owl.prev');
	});
});

jQuery(document).ready(function ($) {
	let owl = $('#owl-demo-2');
	owl.owlCarousel({
		autoplay: false,
		autoplayTimeout: 1000,
		autoplayHoverPause: true,
		items: 3,
		loop: false,
		center: false,
		rewind: false,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,
		margin: 42,
		stagePadding: 0,
		merge: false,
		mergeFit: true,
		autoWidth: false,
		startPosition: 0,
		rtl: false,
		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,
		dots: false,
		nav: true,
		responsive: {
			0: {
				items: 1,
			},

			768: {
				items: 2,
			},
			992: {
				items: 4,
			},
		},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,
		fallbackEasing: 'swing',
		info: false,
		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',
		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab',
		autoHeight: false,
		lazyLoad: false,
		navText: [$('.prev-testi'), $('.next-testi')],
		navContainerClass: 'testimonials_slider-nav',
	});

	$('.next').click(function () {
		owl.trigger('owl.next');
	});
	$('.prev').click(function () {
		owl.trigger('owl.prev');
	});
});

const headerNav = document.querySelector('.header_nav');
const headerNavToggleBtn = document.querySelector('.header_nav-toggle-btn');

headerNavToggleBtn.addEventListener('click', () => {
	headerNav.style.display = 'block';
});

headerNav.addEventListener('click', (e) => {
	if (e.target.classList.contains('header_nav')) {
		headerNav.style.display = 'none';
		headerNav.removeAttribute('style');
	}
});
