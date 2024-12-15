/*--------------------------------------------------------------
# Preloader
--------------------------------------------------------------*/
const preloader = document.querySelector('#preloader');
if (preloader) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('loaded');
        }, 1000);
        setTimeout(() => {
            preloader.remove();
        }, 2000);
    });
}

/*--------------------------------------------------------------
# ScrollBar
--------------------------------------------------------------*/

const scrollIcon = document.getElementById('arrow-scroll');

scrollIcon.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

window.addEventListener('scroll', () => {
    if (window.scrollY > 25) {
        scrollIcon.style.opacity = '0';
        scrollIcon.style.transform = 'translateY(1.5rem) translateX(-50%)';
    } else {
        scrollIcon.style.opacity = '1';
        scrollIcon.style.transform = 'translateY(0) translateX(-50%)';
    }
});

/*--------------------------------------------------------------
# LandingPage
--------------------------------------------------------------*/

const texts = [
    document.getElementById('text1'),
    document.getElementById('text2'),
    document.getElementById('text3')
];
const slider = document.getElementById('slider');
let currentIndex = 0;

function cycleTexts() {
    texts.forEach(text => text.classList.remove('active'));

    currentIndex = (currentIndex + 1) % texts.length;

    const nextText = texts[currentIndex];
    const textWidth = nextText.offsetWidth;
    const textContainerHeight = nextText.offsetHeight;

    setTimeout(() => {
        slider.style.width = `${textWidth}px`;
        slider.style.height = `${textContainerHeight}px`;

        setTimeout(() => {
            nextText.classList.add('active');
            slider.style.width = '0';
        }, 1000);
    }, 1000);
}

texts[0].classList.add('active');

setInterval(cycleTexts, 4000);

/*--------------------------------------------------------------
# NavBar
--------------------------------------------------------------*/

const hamburger = document.querySelector(".nav__hamburger");
const linksContainer = document.querySelector(".nav__menu");
const links = document.querySelectorAll(".nav__menu__link");

hamburger.addEventListener("click", () => {
    linksContainer.classList.toggle("active");
    hamburger.classList.toggle("active");
});