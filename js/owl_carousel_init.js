$(function () {

  $('.owl-carousel--basic').owlCarousel({
    loop: true,
    center: true,
    nav: false,
    navText: '',
    dot: false,
    dotsEach: false,
    dotsContainer: false,
    autoplay: true,

    responsive : {

      0 : {
        items : 3,
      },

      640 : {
        items : 4,
      },

      1024 : {
        items : 6,
      }
    }
  });

});
