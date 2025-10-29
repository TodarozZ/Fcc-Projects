const galleryItem = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('#lightbox-image');
const closeBtn = document.querySelector('#close-btn');


galleryItem.forEach(item => item.addEventListener('click', () => {
  const fullSizeImage = item.src.includes('-thumbnail', '')
    ? item.src.replace('-thumbnail', '') : item.src;
  
  lightboxImage.src = fullSizeImage;
  lightbox.style.display = 'flex';
}));

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

lightbox.addEventListener('click', (e) => {
  if (e.target.closest('.lightbox')) {
    lightbox.style.display = 'none';
  }
});