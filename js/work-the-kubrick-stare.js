document.addEventListener('DOMContentLoaded', function() {
    // Fetch data for the "Running Man" work from Cosmic JS
    axios.get('https://api.cosmicjs.com/v3/buckets/portfolio-production-4c75e4f0-4118-11ef-a680-27174bf71a69/objects?pretty=true&query=%7B%22type%22:%22trabalhos%22,%22slug%22:%22the-kubrick-stare%22%7D&limit=1&read_key=HFhgQelEwDdUKQovXYNnEQton4QPwnFrlRF1yAAARyIH1zry79&depth=1&props=slug,title,metadata')
        .then(function(response) {
            const work = response.data.objects[0];
            if (work) {
                const title = work.metadata.titulo;
                const description = work.metadata.descricao;
                const image1Url = work.metadata.image1.url;
                const image2Url = work.metadata.image2.url;
                const image3Url = work.metadata.image3.url;
                const image4Url = work.metadata.image4.url;
                const image5Url = work.metadata.image5.url;
                const image6Url = work.metadata.image6.url;
                const image7Url = work.metadata.image7.url;
                const image8Url = work.metadata.image8.url;
                const image9Url = work.metadata.image9.url;
                const image10Url = work.metadata.image10.url;
                const image11Url = work.metadata.image11.url;
                const image12Url = work.metadata.image12.url;

                // Update the DOM with fetched data
                document.getElementById('work-title').textContent = title;
                document.getElementById('work-description').textContent = description;
                document.getElementById('work-image-1').src = image1Url;
                document.getElementById('work-image-2').src = image2Url;
                document.getElementById('work-image-3').src = image3Url;
                document.getElementById('work-image-4').src = image4Url;
                document.getElementById('work-image-5').src = image5Url;
                document.getElementById('work-image-6').src = image6Url;
                document.getElementById('work-image-7').src = image7Url;
                document.getElementById('work-image-8').src = image8Url;
                document.getElementById('work-image-9').src = image9Url;
                document.getElementById('work-image-10').src = image10Url;
                document.getElementById('work-image-11').src = image11Url;
                document.getElementById('work-image-12').src = image12Url;
            } else {
                console.error('Work not found.');
            }
        })
        .catch(function(error) {
            console.error('Error fetching work data:', error);
        });
});
