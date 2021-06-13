let testimonials = document.querySelector('.testimonials');
if(testimonials) {
    let dataslider = new Swiper(testimonials.querySelector('.testimonials__slider'), {
        // autoplay: {
        //     delay: 6000,
        //     disableOnInteraction: false,
        // },
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 15,
        speed: 800,
        loop: true,
        navigation: {
            nextEl: testimonials.querySelector('.testimonials__btn-prev'),
            prevEl: testimonials.querySelector('.testimonials__btn-next'),
        },
    })
}