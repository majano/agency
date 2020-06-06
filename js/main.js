$(document).ready(function() {

  // Scrolling header
  $(window).scroll(function() {

    var header = $('.header');
    var scroll = $(window).scrollTop();

    if(scroll > 100) {
      header.css('box-shadow','0 3px 12px rgba(0,0,0,0.1)');
    } else {
      header.css('box-shadow','none');
    }    
  });

  // Anchor sections
  $('.nav a').on('click', function(e) {
    e.preventDefault();
    
    $('.nav a').removeClass('active');
    $(this).addClass('active');

    $('html,body').animate({
      scrollTop: $($.attr(this,'href')).offset().top - 80
    }, 800);
  });

  // Keep in touch
  $('.cta_btn a, .header_wrap .btn').on('click', function(e) {
    e.preventDefault();
    $('.overlay').fadeIn(500);
  });

  $('.modal .close').on('click', function(e) {
    e.preventDefault();
    $('.overlay').fadeOut();
  });
});