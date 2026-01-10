document.addEventListener('DOMContentLoaded', function() {

    const menuButtonPlus = document.getElementById('menu-button-plus');
    const menuButton = document.getElementById('menu-button');
    const menu = document.getElementById('menu');


    const plusImageUrl = './img/About/mais.png'; 
    const minusImageUrl = './img/About/menos.png'; 


    menuButtonPlus.src = plusImageUrl;

    menuButtonPlus.addEventListener('click', function() {
        menu.classList.toggle('show');


        if (menu.classList.contains('show')) {
            menuButtonPlus.src = minusImageUrl;
        } else {
            menuButtonPlus.src = plusImageUrl;
        }
    });

    menuButton.addEventListener('click', function() {
        menu.classList.toggle('show');
    });


    const title = document.getElementById('title');
    const aboutButton = document.getElementById('menu-button-about');
    const aboutButtonMobile = document.getElementById('menu-button-about-mobile');

    title.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    aboutButton.addEventListener('click', function() {
        window.location.href = 'about.html'; 
    });

    aboutButtonMobile.addEventListener('click', function() {
        window.location.href = 'about.html'; 
    });


    const placeholderTexts = document.querySelectorAll('.placeholder-text');
    placeholderTexts.forEach(function(placeholder) {
        placeholder.addEventListener('click', function() {
            const pageName = placeholder.getAttribute('data-page');
            if (pageName) {
                window.location.href = pageName; 
            }
        });
    });
});
