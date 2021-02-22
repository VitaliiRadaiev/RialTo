let parallaxItems = document.querySelectorAll('._parallax');

window.addEventListener('scroll', () => {
    parallaxItems.forEach(item => {
        parallax(item);
    })
})

function parallax(elem) {
    let pageY = window.pageYOffset;
    let elemScrollTop = elem.getBoundingClientRect().top + (elem.getBoundingClientRect().height / 2);
    let hulfWindowHeight = document.documentElement.clientHeight / 2;
    let result = (pageY + elemScrollTop) - (pageY + hulfWindowHeight);
    let transition = elem.dataset.transition;
    elem.style.transform = `translateY(${result / (transition ? transition : 10)}px)`;
}
