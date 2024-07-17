document.addEventListener('DOMContentLoaded', function() {
    // Handle menu toggle
    const menuButtonPlus = document.getElementById('menu-button-plus');
    const menuButton = document.getElementById('menu-button');
    const menu = document.getElementById('menu');

    // Variables to store image URLs
    let plusImageUrl = '';
    let minusImageUrl = '';

    // Fetch image URLs from Cosmic JS
    axios.get('https://api.cosmicjs.com/v3/buckets/portfolio-production-4c75e4f0-4118-11ef-a680-27174bf71a69/objects?pretty=true&query=%7B%22type%22:%22simbolos%22%7D&limit=10&read_key=HFhgQelEwDdUKQovXYNnEQton4QPwnFrlRF1yAAARyIH1zry79&depth=1&props=slug,title,metadata')
        .then(function(response) {
            const objects = response.data.objects;

            // Extract URLs for the plus and minus icons
            objects.forEach(function(object) {
                if (object.slug === 'icon-mais') {
                    plusImageUrl = object.metadata.icones.url;
                } else if (object.slug === 'icon-menos') {
                    minusImageUrl = object.metadata.icones.url;
                }
            });

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
        })
        .catch(function(error) {
            console.error('Error fetching data from Cosmic JS:', error);
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