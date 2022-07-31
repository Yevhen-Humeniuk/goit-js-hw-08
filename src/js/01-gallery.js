// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// 
const galleryRef = document.querySelector('.gallery');

// 
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// 
createGallery();

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: '250' });
	
// 
function createGallery() {
    const galleryMarkup = galleryItems
        .map(item => createGaleryItemMarkup(item))
        .join('');

    galleryRef.insertAdjacentHTML('afterbegin', galleryMarkup);
};

// 
function createGaleryItemMarkup({ preview, original, description }) {
    return `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>
    `;
}
