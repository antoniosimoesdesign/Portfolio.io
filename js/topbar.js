document.addEventListener('DOMContentLoaded', function() {

    const menuButtonPlus = document.getElementById('menu-button-plus');
    const menuButton = document.getElementById('menu-button');
    const menu = document.getElementById('menu');
    const topbar = document.getElementById('top-bar');


    const plusImageUrl = './img/About/mais2.png'; 
    const minusImageUrl = './img/About/menos2.png'; 


    menuButtonPlus.src = plusImageUrl;

    menuButtonPlus.addEventListener('click', function() {
        menu.classList.toggle('show');


        if (menu.classList.contains('show')) {
            menuButtonPlus.src = minusImageUrl;
                    topbar.style.mixBlendMode = 'normal';
        topbar.style.backgroundColor = 'black';
        } else {
            menuButtonPlus.src = plusImageUrl;
                    topbar.style.mixBlendMode = 'difference';
        topbar.style.backgroundColor = 'transparent';
        }
    });

    menuButton.addEventListener('click', function() {

       if (menu.classList.toggle('show')){
        topbar.style.mixBlendMode = 'normal';
        topbar.style.backgroundColor = 'black';
       } else{
        topbar.style.mixBlendMode = 'difference';
        topbar.style.backgroundColor = 'transparent';
       }

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
