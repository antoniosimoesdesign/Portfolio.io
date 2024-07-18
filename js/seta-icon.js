document.addEventListener('DOMContentLoaded', function() {
    // Fetch the "seta" icon from Cosmic JS
    axios.get('https://api.cosmicjs.com/v3/buckets/portfolio-production-4c75e4f0-4118-11ef-a680-27174bf71a69/objects/66992eef70d8c6257696b2e4?read_key=HFhgQelEwDdUKQovXYNnEQton4QPwnFrlRF1yAAARyIH1zry79&depth=1&props=slug,title,metadata')
        .then(function(response) {
            const iconData = response.data.object.metadata.icones;
            const setaIconUrl = iconData.url;

            // Update the src attribute of the seta icon
            const setaIcon = document.getElementById('seta-icon');
            setaIcon.src = setaIconUrl;

            // Add click event to scroll back to the top
            setaIcon.addEventListener('click', function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        })
        .catch(function(error) {
            console.error('Error fetching seta icon:', error);
        });
});
