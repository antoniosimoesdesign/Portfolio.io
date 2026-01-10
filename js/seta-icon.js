document.addEventListener('DOMContentLoaded', function() {

    const setaIconUrl = './img/About/seta.png';


    const setaIcon = document.getElementById('seta-icon');
    setaIcon.src = setaIconUrl;


    setaIcon.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
