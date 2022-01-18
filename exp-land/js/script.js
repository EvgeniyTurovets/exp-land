"use strict";

$(document).ready(function () {
  new WOW().init();

  if ($(window).width() > 991) {
    setTimeout(function () {
      $('.preview').addClass('active');
    }, 3000);
  } // dropdown menu


  var burgerBtn = document.querySelector('.burger');
  var headerMenu = document.querySelector('.header__list');

  if (burgerBtn) {
    burgerBtn.onclick = function () {
      burgerBtn.classList.toggle('active');
      headerMenu.classList.toggle('active');
    };
  } // lang dropdown


  var langBtn = document.querySelector('.lang__btn');
  var langList = document.querySelector('.lang__list');

  if (langBtn) {
    langBtn.onclick = function () {
      langBtn.classList.toggle('active');
      langList.classList.toggle('active');
    };
  } // transfer lang dropdown


  function transferLonIn() {
    if (document.documentElement.clientWidth <= 480) {
      $('.log-in-wraper').prepend($('.authorization__log-in'));
    } else {
      $('.authorization').prepend($('.authorization__log-in'));
    }

    if (document.documentElement.clientWidth < 768) {
      var langParent = document.querySelector('.lang');
      var langWrapper = document.querySelector('.lang__wrapper');
      langWrapper.prepend(langParent);
    } else {
      $('.links').append($('.lang'));
    }

    if (document.documentElement.clientWidth < 992) {
      var advantagesOne = document.querySelector('.advantages__title--one');
      var advantagesTwo = document.querySelector('.advantages__title--two');
      var advantagesFirst = document.querySelector('.advantages__first');
      var advantagesSecond = document.querySelector('.advantages__second');
      advantagesFirst.prepend(advantagesOne);
      advantagesSecond.prepend(advantagesTwo);
      var communityOne = document.querySelector('.community__title--one');
      var communityTwo = document.querySelector('.community__title--two');
      var communityFirst = document.querySelector('.community__first');
      var communitySecond = document.querySelector('.community__second');
      communityFirst.prepend(communityOne);
      communitySecond.prepend(communityTwo);
    }
  }

  transferLonIn();
  $(window).on('resize', function () {
    transferLonIn();
  }); // animated tags

  if (function ($) {
    $.fn.fadeInDelay = function () {
      var init = function init() {
        $(this).hide().delay($(this).data('delay')).fadeIn();
      };

      return this.each(init);
    };
  }(jQuery)) ;
  $('.tags__item').fadeInDelay(); // opportunities slider

  if (document.documentElement.clientWidth < 768) {
    var opportunitiesSlider = new Swiper('.opportunities__slider', {
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 5,
      pauseOnMouseEnter: true,
      autoplay: {
        delay: 5000
      }
    });
  } // animated


  var block_show = false;

  function scrollTracking() {
    if (block_show) {
      return false;
    }

    var wt = $(window).scrollTop();
    var wh = $(window).height();
    var elOneT = $('.numbers__item').offset().top;
    var elOneH = $('.numbers__item').outerHeight();
    var dh = $(document).height();

    if (wt + wh >= elOneT || wh + wt == dh || elOneH + elOneT < wh) {
      block_show = true; // Код анимации

      $('.numbers__item').addClass('_active');
    }

    block_show = false;
    var elTwoT = $('.tab__wrapper').offset().top;
    var elTwoH = $('.tab__wrapper').outerHeight();

    if (wt + wh >= elTwoT || wh + wt == dh || elTwoH + elTwoT < wh) {
      block_show = true; // Код анимации

      $('.tab__item').fadeInDelay();
    }
  }

  $(window).scroll(function () {
    scrollTracking();
  });
  $(document).ready(function () {
    scrollTracking();
  }); // tabs

  var tabBtnOne = document.querySelector('.tab--one');
  var tabBtnTwo = document.querySelector('.tab--two');
  var tabItemOne = document.querySelector('.tab__wrapper--one');
  var tabItemTwo = document.querySelector('.tab__wrapper--two');

  if (tabBtnOne) {
    tabBtnOne.onclick = function () {
      tabItemTwo.classList.remove('active');
      tabItemOne.classList.add('active');
    };
  }

  if (tabBtnTwo) {
    tabBtnTwo.onclick = function () {
      tabItemOne.classList.remove('active');
      tabItemTwo.classList.add('active');
    };
  } // slider best


  var bestSlider = new Swiper('.best__slider', {
    loop: true,
    centeredSlides: true,
    pauseOnMouseEnter: true,
    autoplay: {
      delay: 5000
    },
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 5
      },
      767: {
        slidesPerView: 'auto',
        spaceBetween: 12
      },
      991: {
        slidesPerView: 'auto',
        spaceBetween: 24
      },
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 32
      },
      1441: {
        slidesPerView: 'auto',
        spaceBetween: 42
      }
    }
  });
  var vacancySlider = new Swiper('#vacancy__slider-mob', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 5,
    pauseOnMouseEnter: true,
    autoplay: {
      delay: 5000
    }
  });
  $('.card').on('mouseover', function () {
    bestSlider.autoplay.stop();
    $(this).addClass('active');
  });
  $('.card').on('mouseout', function () {
    bestSlider.autoplay.start();
    $(this).removeClass('active');
  });
  var controller = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({
    triggerElement: "#vacancy__slider",
    duration: 900
  }).addTo(controller).on("progress", function (e) {
    if (e.progress.toFixed(3) > 0.250) {
      $('#vacancy__slider__row1').addClass('active');
    } else {
      $('#vacancy__slider__row1').removeClass('active');
    }

    if (e.progress.toFixed(3) > 0.500) {
      $('#vacancy__slider__row2').addClass('active');
    } else {
      $('#vacancy__slider__row2').removeClass('active');
    }
  });
});