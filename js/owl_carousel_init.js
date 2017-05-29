$(function () {

  $('.owl-carousel--basic').owlCarousel({
    loop: true,
    center: true,
    nav: false,
    navText: '',
    dots: false,
    dotsEach: false,
    dotsContainer: false,
    autoplay: true,
    margin: 150,

    responsive : {

      0 : {
        items : 1,
      },

      640 : {
        items : 1,
      },

      1024 : {
        items : 1,
      }
    }
  });

});
