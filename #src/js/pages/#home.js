{
    let header = document.querySelector('.promo-header');
    if(header) {

        let dataSlider = new Swiper(header.querySelector('.promo-header__slider'), {
            slidesPerView: 1,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            effect: 'fade',
            pagination: {
              el: header.querySelector('.swiper-pagination'),
              type: 'fraction',
            },
            scrollbar: { el: header.querySelector('.swiper-scrollbar') },
            navigation: {
              nextEl: header.querySelector('.promo-header__btn_next'),
              prevEl: header.querySelector('.promo-header__btn_prev'),
            },
          });
    }
  }    
