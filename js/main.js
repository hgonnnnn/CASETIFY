$(function () {

  /* section04 슬라이드 클릭 시 값에 따른 변화 */
  let sec04Box = $('.section04 .item > div');
  $('.section04 .sec04 .swiper-slide').click(function () {

    $('.swiper-slide').removeClass('on');
    $(this).addClass('on');

    sec04Box.removeClass('on')
    sec04Box.eq($(this).index()).addClass('on');
  });

  console.log(scrollY)
  window.addEventListener('scroll', function () {
    let sec02 = document.querySelector('.section02 img');
    let sec01left = document.querySelector('.section01 .left');
    let sec01right = document.querySelector('.section01 .right');
    let sec05 = document.querySelector('.section05');
    /* Y값에 따른 애니메이션 구현 */
    if ($(window).width() >= 1024) {
      if (1300 < scrollY) {
        sec02.classList.add('scroll_on');
      } else {
        sec02.classList.remove('scroll_on');
      }
      if (4500 < scrollY) {
        sec05.classList.add('scroll_on');
      } else {
        sec05.classList.remove('scroll_on');
      }
    }
    if ($(window).width() >= 1024) {
      if (400 < scrollY) {
        sec01left.classList.add('scroll_on');
        sec01right.classList.add('scroll_on');
      } else {
        sec01left.classList.remove('scroll_on');
        sec01right.classList.remove('scroll_on');
      }
    }
    if ($(window).width() <= 1023) {
      sec01left.classList.add('scroll_on');
      sec01right.classList.add('scroll_on');
      sec02.classList.add('scroll_on');
      sec05.classList.add('scroll_on');
    }
  });
  /* 스크롤에 따른 헤더 변화 */
  window.addEventListener('wheel', (event) => {
    let wheelScroll = event.deltaY;
    let header = document.querySelector('.header');

    if (wheelScroll > 0) {
      header.classList.add('on');
    } else {
      header.classList.remove('on');
      menu02.removeClass('on');

    }
  });
  /* depth02 버튼 클릭 시 2차메뉴 닫기 */
  let btn = $('.header .gnb li button');
  let depth02 = $('.header .gnb li .depth02');
    btn.click(function(){
      depth02.removeClass('on');
  })

  /* up 버튼 */
  $('.up_btn').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 700)
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $('.up_btn').css({
        'display': 'block'
      })
    } else {
      $('.up_btn').css({
        'display': 'none'
      })
      $('header').removeClass('on');
    }
  });

  /* section04 슬라이드 버튼 클릭 제어 */
  let sec04Prev = document.querySelector('.sec04-prev');
  let sec04Next = document.querySelector('.sec04-next');
  let sec04Item = document.querySelectorAll('.sec04 .swiper-slide');
  // let pageNum = document.querySelector('.num')
  let i = 0;

  /* 슬라이드 아이템 끝 지점 도달 시 nextBtn에게 opacity값 적용 */
  // sec04Next.addEventListener('click', () => {
  //   // i++;
  //   sec04Prev.classList.remove('on');
  //   sec04Next.classList.remove('on');
  //   // $('.swiper-slide').removeClass('on');

  //   if(i >= sec04Item.length) {
  //     // i = sec04Item.length - 1;
  //     sec04Next.classList.add('on');
  //   }
  //   // sec04Item[i - 1].classList.remove('on');
  //   // sec04Item[i].classList.add('on');

  // });
  /* 슬라이드 아이템 끝 지점 도달 시 prevBtn에게 opacity값 적용 */
  // sec04Prev.addEventListener('click', () => {
  //   i--;
  //   sec04Prev.classList.remove('on');
  //   sec04Next.classList.remove('on');
  //   $('.swiper-slide').removeClass('on');

  //   if(i < 0) {
  //     i = 0;
  //     sec04Prev.classList.add('on');
  //   }
  //   sec04Item[i + 1].classList.remove('on');
  //   sec04Item[i].classList.add('on');

  // })
  /* 헤더 메뉴 클릭 시 나타내기 */
  let menu = $('.gnb > li')
  let menu02 = $('.gnb > li .depth02')

  menu.mouseenter(function () {
    menu02.removeClass('on');
    menu02.eq($(this).index()).addClass('on');
    // if($(this).find('.depth02').length) {
    // menu02.css({
    //   'display' : 'block'
    // });
    // }
  })

  /* 메인비주얼 슬라이드 */
  var swiper = new Swiper(".main", {
    spaceBetween: 30,
    centeredSlides: true,
    effect: 'fade',
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  /* section03 슬라이드 */
  var swiper = new Swiper(".sec03", {
    rewind: true,
    slidesPerView: 2,
    breakpoints: {
      //960보다 클 경우
      960: {
        slidesPerView: 4,
      },
      760: {
        slidesPerView: 3,
      },
    },
    spaceBetween: 20,
    navigation: {
      nextEl: ".sec03-next",
      prevEl: ".sec03-prev",
    },
  });
  /* section04 슬라이드 */
  var swiper = new Swiper(".sec04", {
    slidesPerView: 2,
    breakpoints: {
      //1280보다 클 경우
      960: {
        slidesPerView: 7,
      },
      760: {
        slidesPerView: 5,
      },
      520: {
        slidesPerView: 4,
      },
      390: {
        slidesPerView: 3,
      },
    },
    spaceBetween: 20,
    navigation: {
      nextEl: ".sec04-next",
      prevEl: ".sec04-prev",
    },
  });
  /* section06 슬라이드 */
  var swiper = new Swiper(".sec06", {
    slidesPerView: 1.4,
    breakpoints: {
      //1280보다 클 경우
      960: {
        slidesPerView: 3.4,
      },
      500: {
        slidesPerView: 2.4,
      },
    },
    spaceBetween: 20,
    navigation: {
      nextEl: ".sec06-next",
      prevEl: ".sec06-prev",
    },
  });
}); //script end