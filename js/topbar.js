document.addEventListener('DOMContentLoaded', function() {
    // Handle menu toggle
    const menuButtonPlus = document.getElementById('menu-button-plus');
    const menuButton = document.getElementById('menu-button');
    const menu = document.getElementById('menu');

    // Static URLs for the plus and minus icons
    const plusImageUrl = 'https://cdn.cosmicjs.com/f4eb09e0-42b6-11ef-bfb7-a598d323cbfc-.png'; // Replace with your actual URL
    const minusImageUrl = 'https://cdn.cosmicjs.com/09f7ae10-42b7-11ef-bfb7-a598d323cbfc--.png'; // Replace with your actual URL

    // Set initial image
    menuButtonPlus.src = plusImageUrl;

    menuButtonPlus.addEventListener('click', function() {
        menu.classList.toggle('show');

        // Toggle the image between plus and minus
        if (menu.classList.contains('show')) {
            menuButtonPlus.src = minusImageUrl;
        } else {
            menuButtonPlus.src = plusImageUrl;
        }
    });

    menuButton.addEventListener('click', function() {
        menu.classList.toggle('show');
    });

    // Handle navigation
    const title = document.getElementById('title');
    const aboutButton = document.getElementById('menu-button-about');
    const aboutButtonMobile = document.getElementById('menu-button-about-mobile');

    title.addEventListener('click', function() {
        window.location.href = 'index.html'; // Change this to your actual URL
    });

    aboutButton.addEventListener('click', function() {
        window.location.href = 'about.html'; // Change this to your actual URL
    });

    aboutButtonMobile.addEventListener('click', function() {
        window.location.href = 'about.html'; // Change this to your actual URL
    });

    // Add event listeners to placeholder texts
    const placeholderTexts = document.querySelectorAll('.placeholder-text');
    placeholderTexts.forEach(function(placeholder) {
        placeholder.addEventListener('click', function() {
            const pageName = placeholder.getAttribute('data-page');
            if (pageName) {
                window.location.href = pageName; // Navigate to the corresponding page within the 'pages' folder
            }
        });
    });
});
