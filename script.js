const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.getElementById('close-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const thumbSrc = item.getAttribute('src');
        const fullSrc = thumbSrc.replace('-thumbnail', '');
        lightboxImage.setAttribute('src', fullSrc);
        lightbox.style.display = 'flex';
    });
});

lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});