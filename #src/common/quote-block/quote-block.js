{
    let quoteBLock = document.querySelector('.quote-block');
    if(quoteBLock) {
        let dataSlider = new Swiper(quoteBLock.querySelector('.quote-block__slider .swiper-container'), {
            slidesPerView: 1,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            loop: true,
            pagination: {
              el: quoteBLock.querySelector('.swiper-pagination'),
              type: 'fraction',
            },
            navigation: {
              nextEl: quoteBLock.querySelector('.quote-block__btn_next'),
              prevEl: quoteBLock.querySelector('.quote-block__btn_prev'),
            },
          });
    }
}