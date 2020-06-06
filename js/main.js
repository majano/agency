$(document).ready(function() {


  // Scrolling header 
  function scrollRender() {
    var header = $('.header');
    var scroll = $(window).scrollTop();    
    var navLink = $('.nav a');

    if(scroll > 100) {
      header.css('box-shadow','0 3px 12px rgba(0,0,0,0.1)');
      navLink.removeClass('active');
    } else {
      header.css('box-shadow','none');
    }      

    if(scroll >= 100) {
      $('.section').each(function(i) {
        if($(this).position().top <= scroll + 80) {
          navLink.removeClass('active');
          navLink.eq(i).addClass('active');
        }
      });
    } else {
      navLink.removeClass('active');
      navLink.filter(':first').addClass('active');
    }
  }

  scrollRender();

  $(window).scroll(function() {

    scrollRender();
  });

  // Anchor sections
  $('.nav a').on('click', function(e) {
    e.preventDefault();

    var anchorLink = $(this).attr('href');
    var scrollPoint = $(anchorLink).offset().top - 70;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 800);

    return false;
  }); 

  // Keep in touch
  $('.cta_btn a, .header_wrap .btn').on('click', function(e) {
    e.preventDefault();
    $('.overlay, .contactus').fadeIn(500);
  });

  $('.modal .close').on('click', function(e) {
    e.preventDefault();
    $('.overlay, .contactus').fadeOut();
  });

  // Work
  $('.work_content img').each(function() {

    var title = $(this).data('title');
    var description = $(this).data('desc');
    var imgURL = $(this).attr('src');
    var modal = $('.project_profile');

    $(this).on('click', function(){      
  
      $('.overlay, .project_profile').fadeIn(500);
  
      modal.find('img').attr('src', imgURL);
      modal.find('h3').text(title);
      modal.find('p').text(description);
    }); 
  });

});