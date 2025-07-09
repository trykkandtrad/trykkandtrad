
$('.banner-slider').owlCarousel({
  items: 1,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  loop: true,
  autoplay: true,
  margin: 10,
  nav: true,
  dots: true,
  navText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>'],
});

//client feedback 

$('.testimonial-slider').owlCarousel({
  items: 2,
  margin:10,
  lazyLoad: true,
  dots:true,
  autoPlay: true,
  loop: true,
  autoPlayTimeout: 3000,
  responsive:{
    0:{
      items:1,
    },
    600:{
      items:2,
    },
    1000:{
      items:2,
    }
  }
});