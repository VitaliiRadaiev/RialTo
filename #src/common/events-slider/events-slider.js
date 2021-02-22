{
    let events = document.querySelector('.events');
    if(events) {
        let dataSlider = new Swiper(events.querySelector('.events__slider'), {
            slidesPerView: 1,
            spaceBetween: 58,
            speed: 800,
            scrollbar: { el: events.querySelector('.swiper-scrollbar') },
            navigation: {
              nextEl: events.querySelector('.events__slider-btn-next'),
              prevEl: events.querySelector('.events__slider-btn-prev'),
            },
          });
    }
}