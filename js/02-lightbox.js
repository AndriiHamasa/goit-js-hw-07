import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryEl.innerHTML = galleryItems.map((picture) => `
<a class="gallery__item" href="${picture.original}">
  <img class="gallery__image" src="${picture.preview}" alt="${picture.description}" title="${picture.description}"/>
</a>`).join('');

const gallery = new SimpleLightbox('.gallery a');

const handlePictureClick = (event) => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    
    gallery.on('show.simplelightbox', function () {});
}

galleryEl.addEventListener('click', handlePictureClick);