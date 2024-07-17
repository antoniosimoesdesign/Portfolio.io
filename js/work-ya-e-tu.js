document.addEventListener('DOMContentLoaded', function() {
    // Fetch data for the "Running Man" work from Cosmic JS
    axios.get('https://api.cosmicjs.com/v3/buckets/portfolio-production-4c75e4f0-4118-11ef-a680-27174bf71a69/objects?pretty=true&query=%7B%22type%22:%22trabalhos%22,%22slug%22:%22ya-e-tu%22%7D&limit=1&read_key=HFhgQelEwDdUKQovXYNnEQton4QPwnFrlRF1yAAARyIH1zry79&depth=1&props=slug,title,metadata')
        .then(function(response) {
            const work = response.data.objects[0];
            if (work) {
                const title = work.metadata.titulo;
                const description = work.metadata.descricao;
                const image1Url = work.metadata.image1.url;
                const image2Url = work.metadata.image2.url;
                const image3Url = work.metadata.image3.url;

                // Update the DOM with fetched data
                document.getElementById('work-title').textContent = title;
                document.getElementById('work-description').textContent = description;
                document.getElementById('work-image-1').src = image1Url;
                document.getElementById('work-image-2').src = image2Url;
                document.getElementById('work-image-3').src = image3Url;
            } else {
                console.error('Work not found.');
            }
        })
        .catch(function(error) {
            console.error('Error fetching work data:', error);
        });
});
