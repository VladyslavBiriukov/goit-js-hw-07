import { galleryItems } from './gallery-items.js';

const imageListEl = document.querySelector('.gallery');


function createGalleryItemMarkup({ preview, original, description }) {
  return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
  `;
}

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(createGalleryItemMarkup).join('');
}


imageListEl.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

    const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionDelay: 250
    });




