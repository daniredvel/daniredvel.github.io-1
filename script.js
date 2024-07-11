// script.js

document.addEventListener('DOMContentLoaded', (event) => {

    // Smooth scroll functionality for scroll button
    const scrollButton = document.getElementById('scroll');
    window.onscroll = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollButton.style.display = "block";
        } else {
            scrollButton.style.display = "none";
        }
    };

    scrollButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

});
