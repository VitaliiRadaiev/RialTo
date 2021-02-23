{

    let mainSliders = document.querySelectorAll('.main-slider');
    if(mainSliders.length) {
        mainSliders.forEach(slider => {
            let dataSlider = new Swiper(slider.querySelector('.main-slider__body'), {
                slidesPerView: 1,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
                loop: true,
                effect: 'fade',
                pagination: {
                  el: slider.querySelector('.swiper-pagination'),
                  type: 'fraction',
                },
                navigation: {
                  nextEl: slider.querySelector('.main-slider__btn_next'),
                  prevEl: slider.querySelector('.main-slider__btn_prev'),
                },
              });
        });
    }
  }   