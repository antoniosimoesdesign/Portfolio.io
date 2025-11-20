const galleryItems = document.querySelectorAll('.work-images');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.getElementById('close-btn');

//Open Lightbox
galleryItems.forEach(item =>{
  item.addEventListener("click", ()=>{
    const fullSrc = item.src.replace('-thumbnail', '');
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