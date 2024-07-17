document.addEventListener('DOMContentLoaded', function() {
    // Fetch data for the "Running Man" work from Cosmic JS
    axios.get('https://api.cosmicjs.com/v3/buckets/portfolio-production-4c75e4f0-4118-11ef-a680-27174bf71a69/objects?pretty=true&query=%7B%22type%22:%22fotos%22%7D&limit=10&read_key=HFhgQelEwDdUKQovXYNnEQton4QPwnFrlRF1yAAARyIH1zry79&depth=1&props=slug,title,metadata,')
        .then(function(response) {
            console.log(response.data); // Check the API response
            const fotos = response.data.objects[0];
            if (fotos) {
                const description = fotos.metadata['about-foto'];
                const imageUrl = fotos.metadata['about-image'].url;

                // Update the DOM with fetched data
                document.getElementById('fotos-description').textContent = description;
                document.getElementById('fotos-image').src = imageUrl;
            } else {
                console.error('Work not found.');
            }
        })
        .catch(function(error) {
            console.error('Error fetching work data:', error);
        });
});
