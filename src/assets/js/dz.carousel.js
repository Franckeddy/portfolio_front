/* JavaScript Document */
jQuery(document).ready(function() {
    'use strict';

	
	/* image-carousel function by = owl.carousel.js */
	jQuery('.img-carousel').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},			
			1024:{
				items:3
			},
			1200:{
				items:4
			}
		}
	})

	/* image-carousel no margin function by = owl.carousel.js */
	jQuery('.img-carousel-content').owlCarousel({
		loop:true,
		autoplay:true,
		margin:30,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},			
			1024:{
				items:3
			},
			1200:{
				items:4
			}
		}
	})

	/* service carousel no margin function by = owl.carousel.js */
	jQuery('.service-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		margin:30,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},			
			1024:{
				items:3
			},
			1400:{
				items:3.7
			}
		}
	})

	/*  Portfolio Carousel no margin function by = owl.carousel.js */
	jQuery('.portfolio-carousel-nogap').owlCarousel({
		loop:true,
		autoplay:true,
		margin:0,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:2
			},
			1200:{
				items:4
			}
		}
	})
	
	/*  Blog post Carousel function by = owl.carousel.js */
	jQuery('.blog-carousel').owlCarousel({
		loop:true,
		autoplay:false,
		margin:30,
		nav:false,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},			
			991:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})
	
	/*  Blog post Carousel function by = owl.carousel.js */
	jQuery('.event-carousel').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:3
			},
			1000:{
				items:3
			}
		}
	})		
	
	/*  Blog post Carousel function by = owl.carousel.js */
	jQuery('.client-logo-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		margin:30,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:2
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:4
			},
			1000:{
				items:6
			}
		}
	})	
	
	/* Fade slider for home function by = owl.carousel.js */
	jQuery('.owl-fade-one').owlCarousel({
		loop:true,
		autoplay:true,
		autoplayTimeout:3000,
		margin:30,
		nav:true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		items:1,
		dots: false,
		animateOut:'fadeOut',
	})	
	
	/*  New Item function by = owl.carousel.js */
	jQuery('.new-item').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots: false,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		paginationSpeed: 1000,
		slideSpeed: 1000,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			991:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})
	
	/*  New Item function by = owl.carousel.js */
	jQuery('.city-item').owlCarousel({
		loop:true,
		margin:14,
		nav:true,
		dots: false,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		paginationSpeed: 1000,
		slideSpeed: 1000,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			360:{
				items:2
			},
			
			480:{
				items:3
			},			
			
			1024:{
				items:5
			},
			1200:{
				items:6
			}
		}
	})
	
	/*  testimonial four function by = owl.carousel.js */
	jQuery('.testimonial-center').owlCarousel({
		center: true,
		autoplay:false,
		items:3,
		loop:true,
		margin:10,
		nav:true,
		dots:true,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		paginationSpeed: 1000,
		slideSpeed: 1000,
		navText: ['<div class="glyph-icon flaticon-left-arrow"></div>', '<div class="glyph-icon flaticon-right-arrow"></div>'],
		responsive:{
			0:{
				items:1	
			},
			991:{
				items:1.8
			}
		}
	})
	
	/*  Quick Look function by = owl.carousel.js */
	jQuery('.quick-look').owlCarousel({
		loop:true,
		margin:30,
		nav:false,
		dots: true,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		paginationSpeed: 1000,
		slideSpeed: 1000,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			991:{
				items:3
			},
			1200:{
				items:4
			}
		}
	})
	
	/*  Quick Look function by = owl.carousel.js */
	jQuery('.specifications').owlCarousel({
		loop:true,
		autoplay:true,
		margin:2,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			991:{
				items:3
			},
			1200:{
				items:4
			}
		}
	})
	
});
/* Document .ready END */