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
            url: 'https://cdn.cosmicjs.com/d0b629b0-07f0-11f0-9dbf-1f168280b824-video2.gif',
            title: 'SUPPORT',
            tipo: 'Stickers'
        },
        {
            url: 'https://cdn.cosmicjs.com/d14ff610-9d48-11f0-bba7-d56988718db7-doseadoresmainpage.jpg',
            title: 'Soap Dispensers',
            tipo: 'Ceramic 3D Printing'
        },
        {
            url: 'https://cdn.cosmicjs.com/e9624b10-9d46-11f0-bba7-d56988718db7-doseadoresmain4.mp4',
            title: 'Soap Dispensers',
            tipo: 'Ceramic 3D Printing'
        },
        {
            url: 'https://cdn.cosmicjs.com/0fda77e0-9d47-11f0-bba7-d56988718db7-ctcv40yearvideomain.mp4',
            title: 'CTCV 40 Year Anniversary',
            tipo: 'Ceramic 3D Printing'
        },
        {
            url: 'https://cdn.cosmicjs.com/f4094620-9d48-11f0-bba7-d56988718db7-ctcvmain.jpg',
            title: 'CTCV 40 Year Anniversary',
            tipo: 'Ceramic 3D Printing'
        },
        {
            url: 'https://cdn.cosmicjs.com/2c64d590-9d47-11f0-bba7-d56988718db7-lampshadeprinting.mp4',
            title: 'Lampshades',
            tipo: 'Ceramic 3D Printing'
        },
        {
            url: 'https://cdn.cosmicjs.com/4b669be0-9d47-11f0-bba7-d56988718db7-lampshaderotation.mp4',
            title: 'Lampshades',
            tipo: 'Ceramic 3D Printing'
        },
        


    ];

    const shuffledImages = images.sort(() => Math.random() - 0.5);


    const container = document.getElementById('container');


shuffledImages.forEach(function(image) {
    let mediaElement;

    if (image.url.toLowerCase().endsWith('.mp4')) {
        // Create a video element for mp4 files
        mediaElement = document.createElement('video');
        mediaElement.src = image.url;
        mediaElement.autoplay = true;
        mediaElement.muted = true;
        mediaElement.loop = true;
        mediaElement.playsInline = true; // helps on mobile
        mediaElement.classList.add('item');
    } else {
        // Default to an image element
        mediaElement = document.createElement('img');
        mediaElement.src = image.url;
        mediaElement.alt = image.title || ''; 
        mediaElement.loading = 'lazy'; 
        mediaElement.classList.add('item');
    }

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('item-container');

    const overlayDiv = document.createElement('div');
    overlayDiv.classList.add('overlay');

    const titleElement = document.createElement('div');
    titleElement.classList.add('overlay-title');
    titleElement.textContent = image.title;

    if (image.title.length > 20) {
    titleElement.classList.add('long');
}


    const tipoElement = document.createElement('div');
    tipoElement.classList.add('overlay-tipo');
    tipoElement.textContent = image.tipo; 

    overlayDiv.appendChild(titleElement);
    overlayDiv.appendChild(tipoElement);

    containerDiv.appendChild(mediaElement);
    containerDiv.appendChild(overlayDiv);

    container.appendChild(containerDiv);

    containerDiv.addEventListener('click', function() {
        const pageName = image.title.toLowerCase().replace(/\s+/g, '-') + '.html'; 
        window.location.href = pageName; 
    });
});

});
