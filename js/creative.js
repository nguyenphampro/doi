function CanhCamResponsive() {
  // Set BG Resposive
  $('[bg-img]').each(function () {
    var bgimg = $(this).attr('bg-img');
    $(this).css({
      "background-image": "url(" + bgimg + ")",
      "background-position": "center center",
      "background-size": "cover"
    });
  });

  $('[bg-img-responsive]').each(function () {
    var bgimg = $(this).attr('bg-img-responsive');
    var bgimgsm = $(this).attr('bg-img-responsive-sm');
    var bgimgxs = $(this).attr('bg-img-responsive-xs');
    if ($(window).width() >= 900) {
      $(this).css({
        "background-image": "url(" + bgimg + ")",
        "background-position": "center center",
        "background-size": "cover"
      });
    } else if ($(window).width() < 900 && $(window).width() > 600) {
      $(this).css({
        "background-image": "url(" + bgimgsm + ")",
        "background-position": "center center",
        "background-size": "cover"
      });
    } else {
      $(this).css({
        "background-image": "url(" + bgimgxs + ")",
        "background-position": "center center",
        "background-size": "cover"
      });
    }
  });

  $('[img-src-responsive]').each(function () {
    var bgimg2 = $(this).attr('img-src-responsive');
    var bgimg2sm = $(this).attr('img-src-responsive-sm');
    var bgimg2xs = $(this).attr('img-src-responsive-xs');
    if ($(window).width() >= 900) {
      $(this).attr("src", "" + bgimg2 + "");
    } else if ($(window).width() < 900 && $(window).width() > 600) {
      $(this).attr("src", "" + bgimg2sm + "");
    } else {
      $(this).attr("src", "" + bgimg2xs + "");
    }
  });

};

$(function () {
    CanhCamResponsive();
});

$(window).resize(function () {
    CanhCamResponsive();
});

(function($) {
  "use strict"; // Start of use strict

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 6000,
    responsiveClass: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    dots: false,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: false
      }
    }
  })

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 60)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 60
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict
