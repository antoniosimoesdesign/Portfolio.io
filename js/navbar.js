class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<div class="wrapper">
        <div class="top-bar" id="top-bar">
            <div class="title" id="title">António Simões</div>
            <div class="nav-items">
                <span class="menu-toggle" id="menu-button-about">About</span>
                <span class="menu-toggle" id="menu-button">Work</span>
                <img class="menu-toggle" id="menu-button-plus">
                <img class="menu-toggle" id="menu-button-minus" style="display: none;">
            </div>
        </div>
 <div class="menu" id="menu">
        <div class="menu-content">
            <p class="placeholder-text-title-title" id="menu-button-about-mobile">About</p>
            <p class="placeholder-text-title-title">Work</p>
            <div class="menu-column">
                <p class="placeholder-text-title">2026</p>
                <p class="placeholder-text" data-page="hope.html">H.O.P.E.</p>
                <p class="placeholder-text" data-page="malandro.html">MALANDRO</p>
                <p class="placeholder-text" data-page="homografa.html">HOMÓGRAFA</p>
                <p class="placeholder-text" data-page="piones.html">Pionés</p>
                <p class="placeholder-text" data-page="cool-stick-of-the-day.html">COOL STICK OF THE DAY</p>
                <p class="placeholder-text" data-page="cae-website-rework.html">CAE Website Rework</p>
                </div>

                <div class="menu-column">
                <p class="placeholder-text-title">2025</p>
                <p class="placeholder-text" data-page="pomada.html">POMADA</p>
                <p class="placeholder-text" data-page="soap-dispensers.html">Soap Dispensers</p>
                <p class="placeholder-text" data-page="ctcv-40-year-anniversary.html">CTCV 40 Year Anniversary</p>
                <p class="placeholder-text" data-page="lampshades.html">Lampshades</p>
                <p class="placeholder-text" data-page="support.html">SUPPORT</p>
                </div>

                <div class="menu-column">
                <p class="placeholder-text-title">2024</p>
                <p class="placeholder-text" data-page="pontão-do-cabedelo.html">Pontão do Cabedelo</p>
                <p class="placeholder-text" data-page="plantas-do-cabedelo.html">Plantas do Cabedelo</p>
                <p class="placeholder-text" data-page="bricks-&-tiles.html">Bricks & Tiles</p>
                </div>

                <div class="menu-column">
                <p class="placeholder-text-title">2023</p>
                <p class="placeholder-text" data-page="ya-e-tu.html">Ya e tu</p>
                </div>

                <div class="menu-column">
                <p class="placeholder-text-title">Ongoing</p>
                <p class="placeholder-text" data-page="posters.html">Posters</p>
                </div>
           </div>
       </div>
</div>
    `;

}

 
}

customElements.define('main-navbar', CustomNavbar);


document.addEventListener('DOMContentLoaded', function() {

    const menuButtonPlus = document.getElementById('menu-button-plus');
    const menuButton = document.getElementById('menu-button');
    const menu = document.getElementById('menu');
    const topbar = document.getElementById('top-bar');


    const plusImageUrl = './img/About/mais.png'; 
    const minusImageUrl = './img/About/menos.png'; 


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
