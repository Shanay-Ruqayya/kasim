$(document).ready(function($){

  // Nav Menu
  $(".mobile_menu_bar").click(function(){
      $(".hamburger").toggleClass("is-active");
  });


  // As Seen On Slider
  $('.mq-co-logo-section').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 981,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 3
        }
      },
    ]
  });

  // Speaker Video Function
  $('.overlay-image').click(function(event){
    $(this).css("opacity" , "0");
    $(this).css("z-index" , "-1");
    $('.speaker-content video').trigger('play');
});
  

});