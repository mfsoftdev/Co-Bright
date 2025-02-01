// Navbar scroll animation
document.addEventListener("DOMContentLoaded", function () {

    window.addEventListener('scroll', function () {

        if (window.scrollY > 200) {
            document.getElementById('navbar').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';

        } else {
            document.getElementById('navbar').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});

// banner Word Change 
(function () {
    var words = [
        'Bright',
        'llaborative',
        'ordinated'
    ], i = 0;
    setInterval(function () {
        $('#changingword').slideUp(function () {
            $(this).html(words[i = (i + 1) % words.length]).fadeIn();
        });
    }, 3000);

})();

// Card Hover tilt Animation
$(document).ready(function () {
    const tilt = $('.card-hover-effect').tilt();
    tilt.on('change', callback);
    tilt.on('tilt.mouseLeave', callback);
    tilt.on('tilt.mouseEnter', callback);
});

// Card Cursor Change



// CARD_HOVER_EFFECT
// const card_hover_effect = document.querySelector(".card-hover-effect");
// const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
// const THRESHOLD = -10;

// function handleHover(e) {
//     const { clientX, clientY, currentTarget } = e;
//     const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

//     const horizontal = (clientX - offsetLeft) / clientWidth;
//     const vertical = (clientY - offsetTop) / clientHeight;
//     const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
//     const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

//     card_hover_effect.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
// }

// function resetStyles(e) {
//     card_hover_effect.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
// }

// if (!motionMatchMedia.matches) {
//     card_hover_effect.addEventListener("mousemove", handleHover);
//     card_hover_effect.addEventListener("mouseleave", resetStyles);
// }

//    Card Hover js
// const card_1 = document.querySelectorAll('.card-1');
// const video_1 = document.getElementById("video-1");
// const img_1 = document.getElementById("card-img-1");

// card_1.forEach(video => {
//     video.addEventListener('mouseenter', () => {

//         video.play();
//     });

//     video.addEventListener('mouseleave', () => {
//         video.pause();
//         video.currentTime = 0;
//     });
// });