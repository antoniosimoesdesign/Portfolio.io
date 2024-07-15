document.addEventListener('DOMContentLoaded', function() {
    // Handle menu toggle
    const menuButtonPlus = document.getElementById('menu-button-plus');
    const menu = document.getElementById('menu');
    const menuButton = document.getElementById('menu-button');

    menuButton.addEventListener('click', function() {
        menu.classList.toggle('show');
    });

    menuButtonPlus.addEventListener('click', function() {
        menu.classList.toggle('show');
        // Toggle the text between plus and minus
        if (menu.classList.contains('show')) {
            menuButtonPlus.textContent = '-';
        } else {
            menuButtonPlus.textContent = '+';
        }
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
                window.location.href = 'pages/' + pageName; // Navigate to the corresponding page within the 'pages' folder
            }
        });
    });

    // Fetch data from Cosmic JS API
    axios.get('https://api.cosmicjs.com/v3/buckets/portfolio-production-4c75e4f0-4118-11ef-a680-27174bf71a69/objects?pretty=true&query=%7B%22type%22:%22cenas%22%7D&limit=100&read_key=HFhgQelEwDdUKQovXYNnEQton4QPwnFrlRF1yAAARyIH1zry79&depth=1&props=slug,title,metadata')
        .then(function(response) {
            // Handle success, response.data contains the fetched data
            const objects = response.data.objects;

            // Shuffle the array of objects
            const shuffledObjects = objects.sort(() => Math.random() - 0.5);

            // Select the container where images will be appended
            const container = document.getElementById('container');

            // Iterate through the shuffled objects and create img elements
            shuffledObjects.forEach(function(object) {
                const imageUrl = object.metadata.cena.url;
                const tipoText = object.metadata.tipo.value; // Get the 'tipo' text
                const titleText = object.title; // Get the title text

                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = titleText || ''; // Set alt text if title is available
                img.classList.add('item'); // Add a class for styling purposes

                // Create a container div for the image and overlay
                const containerDiv = document.createElement('div');
                containerDiv.classList.add('item-container');

                // Create the overlay div
                const overlayDiv = document.createElement('div');
                overlayDiv.classList.add('overlay');

                // Create title element
                const titleElement = document.createElement('div');
                titleElement.classList.add('overlay-title');
                titleElement.textContent = titleText; // Set the title text

                // Create tipo element
                const tipoElement = document.createElement('div');
                tipoElement.classList.add('overlay-tipo');
                tipoElement.textContent = tipoText; // Set the 'tipo' text

                // Append title and tipo to the overlay div
                overlayDiv.appendChild(titleElement);
                overlayDiv.appendChild(tipoElement);

                // Append the image and overlay to the container div
                containerDiv.appendChild(img);
                containerDiv.appendChild(overlayDiv);

                // Append the container div to the main container
                container.appendChild(containerDiv);

                // Add click event listener to the container div
                containerDiv.addEventListener('click', function() {
                    const pageName = titleText.toLowerCase().replace(/\s+/g, '-') + '.html'; // Convert title to lowercase and replace spaces with dashes
                    window.location.href = 'pages/' + pageName; // Navigate to the corresponding page within the 'pages' folder
                });
            });
        })
        .catch(function(error) {
            // Handle error
            console.error('Error fetching data from Cosmic JS:', error);
        });
});



//Sem Random

// document.addEventListener('DOMContentLoaded', function() {
//     const menuButton = document.getElementById('menu-button');
//     const menu = document.getElementById('menu');

//     menuButton.addEventListener('click', function() {
//         menu.classList.toggle('show');
//     });
// });

// // Wait for the DOM content to be fully loaded
// document.addEventListener("DOMContentLoaded", function() {
//     // Fetch data from Cosmic JS API
//     axios.get('https://api.cosmicjs.com/v3/buckets/portfolio-production-4c75e4f0-4118-11ef-a680-27174bf71a69/objects?pretty=true&query=%7B%22type%22:%22cenas%22%7D&limit=100&read_key=HFhgQelEwDdUKQovXYNnEQton4QPwnFrlRF1yAAARyIH1zry79&depth=1&props=slug,title,metadata')
//         .then(function(response) {
//             // Handle success, response.data contains the fetched data
//             const objects = response.data.objects;

//             // Select the container where images will be appended
//             const container = document.getElementById('container');

//             // Iterate through the objects and create img elements
// // Inside your fetch and display images block
// objects.forEach(function(object) {
//     const imageUrl = object.metadata.cena.url;
//     const img = document.createElement('img');
//     img.src = imageUrl;
//     img.alt = object.title || ''; // Set alt text if title is available
//     img.classList.add('item'); // Add a class for styling purposes
//     container.appendChild(img);
// });

//         })
//         .catch(function(error) {
//             // Handle error
//             console.error('Error fetching data from Cosmic JS:', error);
//         });
// });