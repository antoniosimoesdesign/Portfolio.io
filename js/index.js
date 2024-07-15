document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch icon URLs from Cosmic JS based on slug
    function fetchIconUrl(slug) {
        return axios.get(`https://api.cosmicjs.com/v3/buckets/portfolio-production-4c75e4f0-4118-11ef-a680-27174bf71a69/object/${slug}?read_key=HFhgQelEwDdUKQovXYNnEQton4QPwnFrlRF1yAAARyIH1zry79&props=slug,title,metadata`)
            .then(function(response) {
                const iconObject = response.data.object;
                return iconObject.metadata.icon.url; // Assuming metadata structure: { icon: { url: '...' } }
            })
            .catch(function(error) {
                console.error('Error fetching icon URL from Cosmic JS:', error);
                return ''; // Return empty string on error
            });
    }

    Promise.all([
        fetchIconUrl('icon-mais'),
        fetchIconUrl('icon-menos')
    ]).then(function([plusIconUrl, minusIconUrl]) {
        // Select the + icon element and update its src attribute
        const menuButtonPlus = document.getElementById('menu-button-plus');
        menuButtonPlus.src = plusIconUrl;
        menuButtonPlus.alt = '+'; // Set alt text for the plus icon
    
        // Optionally, you can set up a click event listener for the + button
        menuButtonPlus.addEventListener('click', function() {
            const menu = document.getElementById('menu');
            menu.classList.toggle('show');
    
            // Toggle the image between plus and minus based on the alt text
            if (menu.classList.contains('show')) {
                menuButtonPlus.src = minusIconUrl;
                menuButtonPlus.alt = '-';
            } else {
                menuButtonPlus.src = plusIconUrl;
                menuButtonPlus.alt = '+';
            }
        });
    
    }).catch(function(error) {
        console.error('Error fetching icons from Cosmic JS:', error);
    
        // Optionally, you can set a default icon or handle the error in another way
        // Example: Set a default icon for both plus and minus buttons
        const menuButtonPlus = document.getElementById('menu-button-plus');
        menuButtonPlus.src = 'path_to_default_icon.png';
        menuButtonPlus.alt = '+';
    
        // Handle error state or message to the user
    });
    

    // Fetch data from Cosmic JS API to get images and metadata
    axios.get('https://api.cosmicjs.com/v3/buckets/portfolio-production-4c75e4f0-4118-11ef-a680-27174bf71a69/objects?pretty=true&query=%7B%22type%22:%22cenas%22%7D&limit=100&read_key=HFhgQelEwDdUKQovXYNnEQton4QPwnFrlRF1yAAARyIH1zry79&depth=1&props=slug,title,metadata')
        .then(function(response) {
            // Handle success, response.data contains the fetched data
            const objects = response.data.objects;

            // Select the container where images will be appended
            const container = document.getElementById('container');

            // Clear container before appending new images
            container.innerHTML = '';

            // Iterate through the objects and create img elements
            objects.forEach(function(object) {
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