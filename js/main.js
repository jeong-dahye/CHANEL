$(document).ready(function(){
    
    const swiper = new Swiper('.swiper-container', {
          slidesPerView:3, //슬라이드 수
          spaceBetween:30, //슬라이드 간의 간격
          centeredSlides:true, //슬라이드 중앙배치
          loop:true,
          autoHeight:true,

          // Navigation arrows
          navigation: {
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev',
          },

          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
            return '<span class="' + className + '">' +"<span>"+(index + 1)+"</span>" + '</span>';
            },
          },

          // And if we need scrollbar
          scrollbar: {
            el:'.swiper-scrollbar',
          },
          breakpoints: {
            1920: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1620: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1500: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1300: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            960: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            720: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            360: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
        }

    });
});



