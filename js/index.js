document.addEventListener('DOMContentLoaded', function() {
    // Define the images and their details
    const images = [
        {
            url: 'https://cdn.cosmicjs.com/5116d8b0-41e6-11ef-bfb7-a598d323cbfc-tracklist.gif',
            title: 'Music Portfolio',
            tipo: 'Website'
        },
        {
            url: 'https://cdn.cosmicjs.com/6099ab80-41e3-11ef-bfb7-a598d323cbfc-fita-gif.gif',
            title: 'FITA',
            tipo: 'Website'
        },
        {
            url: 'https://cdn.cosmicjs.com/23fc1450-41df-11ef-bfb7-a598d323cbfc-n1.gif',
            title: 'The Kubrick Stare',
            tipo: 'Generative Design'
        },
        {
            url: 'https://cdn.cosmicjs.com/6dd47500-41de-11ef-bfb7-a598d323cbfc-Screenshot_1.png',
            title: 'The Kubrick Stare',
            tipo: 'Generative Design'
        },
        {
            url: 'https://cdn.cosmicjs.com/0831c7c0-41de-11ef-bfb7-a598d323cbfc-1.-colnia-balnear.png',
            title: 'Ya e tu',
            tipo: 'Artwork'
        },
        {
            url: 'https://cdn.cosmicjs.com/c3339450-41dd-11ef-bfb7-a598d323cbfc-PAC-1-FINAL-2.gif',
            title: 'Plasticidade',
            tipo: 'Video'
        },
        {
            url: 'https://cdn.cosmicjs.com/3bbc78c0-41dd-11ef-bfb7-a598d323cbfc-3.jpg',
            title: 'Bricks & Tiles',
            tipo: 'Generative Design'
        },
        {
            url: 'https://cdn.cosmicjs.com/14c72cb0-41dd-11ef-bfb7-a598d323cbfc-PAC-1-FINAL-2.00_01_01_09.Still001.jpg',
            title: 'Plasticidade',
            tipo: 'Video'
        },
        {
            url: 'https://cdn.cosmicjs.com/67a56d80-444d-11ef-bfb7-a598d323cbfc-2.-44.png',
            title: 'Ya e tu',
            tipo: 'Artwork'
        },
        {
            url: 'https://cdn.cosmicjs.com/a3fa11a0-41dc-11ef-bfb7-a598d323cbfc-10.jpg',
            title: 'Taped',
            tipo: 'Generative Design'
        },
        {
            url: 'https://cdn.cosmicjs.com/d0ad0d20-41db-11ef-bfb7-a598d323cbfc-pac-3-gif-2.gif',
            title: 'Human',
            tipo: 'Video'
        },
        {
            url: 'https://cdn.cosmicjs.com/f41c0d20-4121-11ef-bfb7-a598d323cbfc-final.jpg',
            title: 'Running Man',
            tipo: 'Artwork'
        },
        {
            url: 'https://cdn.cosmicjs.com/a6040b20-411b-11ef-bfb7-a598d323cbfc-2-crop-2.png',
            title: 'Bricks & Tiles',
            tipo: 'Generative Design'
        },
        {
            url: 'https://cdn.cosmicjs.com/f5ac3cd0-620c-11ef-a492-5bdc7520fe60-video_main_sitegif.gif',
            title: 'Plantas do Cabedelo',
            tipo: 'Website'
        },
        {
            url: 'https://cdn.cosmicjs.com/6724da20-620d-11ef-a492-5bdc7520fe60-Poster-1.jpg',
            title: 'Plantas do Cabedelo',
            tipo: 'Website'
        },
        {
            url: 'https://cdn.cosmicjs.com/a5def620-6acc-11ef-a492-5bdc7520fe60-gif-pontao2.gif',
            title: 'Pontão do Cabedelo',
            tipo: 'Generative Design'
        },
        {
            url: 'https://cdn.cosmicjs.com/d33dcc90-6acc-11ef-a492-5bdc7520fe60-generated_image-22.png',
            title: 'Pontão do Cabedelo',
            tipo: 'Generative Design'
        },
        {
            url: 'https://cdn.cosmicjs.com/d0b629b0-07f0-11f0-9dbf-1f168280b824-video2.gif',
            title: 'SUPPORT',
            tipo: 'Stickers'
        },
        


    ];

    // Shuffle the array of images (optional)
    const shuffledImages = images.sort(() => Math.random() - 0.5);

    // Select the container where images will be appended
    const container = document.getElementById('container');

    // Iterate through the shuffled images and create img elements
    shuffledImages.forEach(function(image) {
        const img = document.createElement('img');
        img.src = image.url;
        img.alt = image.title || ''; // Set alt text if title is available
        img.loading = 'lazy'; // Add lazy loading
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
        titleElement.textContent = image.title; // Set the title text

        // Create tipo element
        const tipoElement = document.createElement('div');
        tipoElement.classList.add('overlay-tipo');
        tipoElement.textContent = image.tipo; // Set the 'tipo' text

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
            const pageName = image.title.toLowerCase().replace(/\s+/g, '-') + '.html'; // Convert title to lowercase and replace spaces with dashes
            window.location.href = pageName; // Navigate to the corresponding page within the 'pages' folder
        });
    });
});
