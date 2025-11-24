const galleryItems = document.querySelectorAll('.work-images');
const lightbox = document.getElementById('lightbox');
const lightbox2 = document.getElementById('lightbox2');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.getElementById('close-btn');
const lightboxVideo = document.getElementById('lightbox-video');

//Open Lightbox
galleryItems.forEach(item =>{
  item.addEventListener("click", ()=>{
    const fullSrc = item.src.replace('', '');
    lightboxImage.src = fullSrc;
    lightbox.style.display = 'flex';
   
  })
  
})

//Closebtn
closeBtn.addEventListener("click", ()=>{
  lightbox.style.display = 'none';
});

lightbox.addEventListener("click",(event)=>{
  if(event.target === lightbox){
   lightbox.style.display = "none"
  }
});




