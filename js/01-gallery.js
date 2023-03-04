import { galleryItems } from './gallery-items.js';



const imageContainer = document.querySelector('.gallery');

imageContainer.addEventListener('click', handleImgClick);

function createGalleryItemMarkup({ preview, original, description }) {
  return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image"
        src="${preview}" 
        data-source="${original}" 
        alt="${description}" />
      </a>
    </div>
  `;
}

function createGalleryMarkup(galleryItems) {
  return galleryItems.map(createGalleryItemMarkup).join('');
}

function handleImgClick (event) {
    event.preventDefault();

    const { target } = event;
    
    if (target.nodeName !== 'IMG') {
        return;
    } 

    const originalUrl = target.dataset.source;

  const instance = basicLightbox.create(
  `<img class="gallery__image"
   src="${originalUrl}" />`
 );

    
     instance.show();

  document.addEventListener('keydown', onDocumentKeyDown);

  function onDocumentKeyDown(event) {
    if (event.key === 'Escape') {
      instance.close();
      document.removeEventListener('keydown', onDocumentKeyDown);
    }
  }
}

imageContainer.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));


