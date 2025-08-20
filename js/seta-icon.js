document.addEventListener('DOMContentLoaded', function() {

    const setaIconUrl = 'https://cdn.cosmicjs.com/7c2f6ff0-4518-11ef-bfb7-a598d323cbfc-mockp-fixe-seta.png';


    const setaIcon = document.getElementById('seta-icon');
    setaIcon.src = setaIconUrl;


    setaIcon.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
