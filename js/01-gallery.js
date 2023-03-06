import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

galleryEl.innerHTML = galleryItems.map((el) => `<div class="gallery__item">
<a class="gallery__link" href="${el.original}">
  <img
    class="gallery__image"
    src="${el.preview}"
    data-source="${el.original}"
    alt="${el.description}"
  />
</a>
</div>`).join('');

const getInstance = (src) => {
    const instance = basicLightbox.create(`
        <img src="${src}" width="800" height="600">
    `);
    return instance;
}

const selectorPicture = (event) => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return
    }
    
    const urlOfLargePicture = event.target.dataset.source;
    
    const receivedInstance = getInstance(urlOfLargePicture);
    receivedInstance.show();

    const handleCloseModalByEsc = (event) => {
        if (event.code !== 'Escape') {
            return;
        }

        receivedInstance.close();
        unSetEventListener();
    }

    const setEventListener = () => {
        document.addEventListener('keydown', handleCloseModalByEsc);
        
    }
    
    const unSetEventListener = () => {
        document.removeEventListener('keydown', handleCloseModalByEsc);
    }

    setEventListener();
}

galleryEl.addEventListener('click', selectorPicture);

