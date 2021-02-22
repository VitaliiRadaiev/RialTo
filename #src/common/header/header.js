{
    let menuLink = document.querySelectorAll('.menu .menu__link');
    if(menuLink.length) {
        menuLink.forEach(link => {
            link.innerHTML = link.textContent.replace(/./g, "<span class='letter'>$&</span>");

            for(let letter of link.children) {
                letter.addEventListener('mouseenter', () => {
                    letter.style.transform = "scale(1.6)";
                    if(letter.nextElementSibling) letter.nextElementSibling.style.transform = "scale(1.3)";
                    if(letter.previousElementSibling) letter.previousElementSibling.style.transform = "scale(1.3)";
                })
                letter.addEventListener('mouseleave', () => {
                    letter.style.transform = "scale(1)";
                    if(letter.nextElementSibling) letter.nextElementSibling.style.transform = "scale(1)";
                    if(letter.previousElementSibling) letter.previousElementSibling.style.transform = "scale(1)";
                })
            }
        })
    }
}