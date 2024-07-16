async function updateFavicon() {
    const cosmicUrl = 'https://api.cosmicjs.com/v3/buckets/portfolio-production-4c75e4f0-4118-11ef-a680-27174bf71a69/objects/6696617edd7e6e1e1690846c?read_key=HFhgQelEwDdUKQovXYNnEQton4QPwnFrlRF1yAAARyIH1zry79&depth=1&props=slug,title,metadata';
    
    try {
        const response = await fetch(cosmicUrl);
        const data = await response.json();
        const faviconUrl = data.object.metadata.imagemtop.url;
        
        const faviconLink = document.getElementById('favicon');
        if (faviconLink) {
            faviconLink.href = faviconUrl;
        }
    } catch (error) {
        console.error('Error fetching favicon URL:', error);
    }
}

// Call the function to update the favicon
updateFavicon();