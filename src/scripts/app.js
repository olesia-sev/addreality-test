//------Полноэкранное меню по клику на бургер
$(function() {
  $(".burger-menu").on("click", function(e) {
    e.preventDefault();

    $(".burger-menu").toggleClass("menu-on");
    $(".full-screen-menu").toggleClass("full-screen-menu__active");
    $('html, body').toggleClass("no-scroll");
  });
});
 
  //-----close menu on ESC
  $(document).on("keydown", function(e) {
    if (e.keyCode === 27) {

      $(".burger-menu").removeClass("menu-on");
      $("html, body").removeClass("no-scroll");
      
      setTimeout(function() {
        $(".full-screen-menu").removeClass("full-screen-menu__active");
      }, 400);
      
    }
  });

//------Задание 3------Появление кнопки "вверх" по скроллу
$(window).scroll(function() {
  var scrolled = $(window).scrollTop();
  
  if ( scrolled >= 1000 ) {
     $('.button').addClass('active');
   }	else if ( scrolled < 1000) {
        $('.button').removeClass('active');
     }
});

//------Скролл вверх по нажатию на кнопку "вверх"
$('.button').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 500, 'swing');
});