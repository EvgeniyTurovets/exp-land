// dropdown menu
let burgerBtn = document.querySelector('.burger');
let headerMenu = document.querySelector('.header__list');

burgerBtn.onclick = function () {
  burgerBtn.classList.toggle('active');
  headerMenu.classList.toggle('active');
}


// lang dropdown
let langBtn = document.querySelector('.lang__btn');
let langList = document.querySelector('.lang__list');

langBtn.onclick = function () {
  langBtn.classList.toggle('active');
  langList.classList.toggle('active');
}


// transfer lang dropdown
if (document.documentElement.clientWidth < 768) {
  let langParent = document.querySelector('.lang');
  let langWrapper = document.querySelector('.lang__wrapper');

  langWrapper.prepend(langParent);
}
if (document.documentElement.clientWidth < 992) {
  let advantagesOne = document.querySelector('.advantages__title--one');
  let advantagesTwo = document.querySelector('.advantages__title--two');
  let advantagesFirst = document.querySelector('.advantages__first');
  let advantagesSecond = document.querySelector('.advantages__second');

  advantagesFirst.prepend(advantagesOne);
  advantagesSecond.prepend(advantagesTwo);

  let communityOne = document.querySelector('.community__title--one');
  let communityTwo = document.querySelector('.community__title--two');
  let communityFirst = document.querySelector('.community__first');
  let communitySecond = document.querySelector('.community__second');

  communityFirst.prepend(communityOne);
  communitySecond.prepend(communityTwo);
}


// animated tags
(function ($) {
  $.fn.fadeInDelay = function () {
    var init = function () {
      $(this).hide().delay($(this).data('delay')).fadeIn();
    };
    return this.each(init);
  };
}(jQuery));

$('.tags__item').fadeInDelay();


// opportunities slider
if (document.documentElement.clientWidth < 768) {
  const opportunitiesSlider = new Swiper('.opportunities__slider', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1.1,
    spaceBetween: 5,
    autoplay: {
      delay: 5000,
    },
  });
}


// animated
let block_show = false;

function scrollTracking() {
  if (block_show) {
    return false;
  }

  let wt = $(window).scrollTop();
  let wh = $(window).height();
  let elOneT = $('.numbers__item').offset().top;
  let elOneH = $('.numbers__item').outerHeight();
  let dh = $(document).height();

  if (wt + wh >= elOneT || wh + wt == dh || elOneH + elOneT < wh) {
    block_show = true;

    // Код анимации
    $('.numbers__item').addClass('_active');

  }

  block_show = false;

  let elTwoT = $('.tab__wrapper').offset().top;
  let elTwoH = $('.tab__wrapper').outerHeight();

  if (wt + wh >= elTwoT || wh + wt == dh || elTwoH + elTwoT < wh) {
    block_show = true;

    // Код анимации
    $('.tab__item').fadeInDelay();
  }
}

$(window).scroll(function () {
  scrollTracking();
});

$(document).ready(function () {
  scrollTracking();
});


// tabs
let tabBtnOne = document.querySelector('.tab--one');
let tabBtnTwo = document.querySelector('.tab--two');

let tabItemOne = document.querySelector('.tab__wrapper--one');
let tabItemTwo = document.querySelector('.tab__wrapper--two');

tabBtnOne.onclick = function () {
  tabItemTwo.classList.remove('active');
  tabItemOne.classList.add('active');
}

tabBtnTwo.onclick = function () {
  tabItemOne.classList.remove('active');
  tabItemTwo.classList.add('active');
}

// slider best
const bestSlider = new Swiper('.best__slider', {
  loop: true,
  centeredSlides: true,
  pauseOnMouseEnter: true,
  autoplay: {
    delay: 6000,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 12,
    },
    480: {
      slidesPerView: 1.8,
      spaceBetween: 12,
    },
    640: {
      slidesPerView: 2.1,
      spaceBetween: 24,
      spaceBetween: 12,
    },
    768: {
      slidesPerView: 2.05,
      spaceBetween: 12,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 3.3,
      spaceBetween: 32,
    },
    1441: {
      slidesPerView: 3.3,
      spaceBetween: 42,
    }
  }
});


const vacancySlider = new Swiper('#vacancy__slider-mob', {
  slidesPerView: 1.3,
  centeredSlides: true,
  spaceBetween: 10,
  breakpoints: {
    575: {
      slidesPerView: 2.2,
      spaceBetween: 30,
    },
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
var scene = new ScrollMagic.Scene({triggerElement: "#vacancy__slider", duration: 700})
						.addTo(controller)
            .on("progress", function (e) {
              if(e.progress.toFixed(3) > 0.200){
                $('#vacancy__slider__row1').addClass('active')
              }else{
                $('#vacancy__slider__row1').removeClass('active')
              }

              if(e.progress.toFixed(3) > 0.350){
                $('#vacancy__slider__row2').addClass('active')
              }else{
                $('#vacancy__slider__row2').removeClass('active')
              }

              console.log(e.progress.toFixed(3))
            });