{

    let mainSliders = document.querySelectorAll('.main-slider');
    if(mainSliders.length) {
        mainSliders.forEach(slider => {
            let dataSlider = new Swiper(slider.querySelector('.main-slider__body'), {
                slidesPerView: 1,
                // autoplay: {
                //     delay: 4000,
                //     disableOnInteraction: false,
                // },
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
                on: {
                  init: () => {
                    cardVideoHandler();
                  },
                  slideChange: (swiper) => {
                    let slides = slider.querySelectorAll('.swiper-slide');
                    slides.forEach(slide => {
                      let videoWrap = slide.querySelector('._video');
                      if(videoWrap) {
                        if(slide.classList.contains('swiper-slide-active')) {
                          return;
                        } else {
                          let video = videoWrap.querySelector('video');
                          let btn = videoWrap.querySelector('.main-slider__video-control');

                          video.pause();
                          btn.querySelector('.main-slider__video-play').style.display = 'block';
                          btn.querySelector('.main-slider__video-pause').style.display = 'none';
                        }
                      }
                    })
                    
                  } 
                }
              });
        });
    }
  }   