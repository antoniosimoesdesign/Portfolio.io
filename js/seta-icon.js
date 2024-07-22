document.addEventListener('DOMContentLoaded', function() {
    // Set the "seta" icon URL
    const setaIconUrl = 'https://cdn.cosmicjs.com/7c2f6ff0-4518-11ef-bfb7-a598d323cbfc-mockp-fixe-seta.png';

    // Update the src attribute of the seta icon
    const setaIcon = document.getElementById('seta-icon');
    setaIcon.src = setaIconUrl;

    // Add click event to scroll back to the top
    setaIcon.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
