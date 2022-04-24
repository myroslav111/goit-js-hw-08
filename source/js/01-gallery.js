// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import 'lazysizes';

import 'lazysizes/plugins/parent-fit/ls.parent-fit';

console.log(galleryItems);

// ссылка на родителя
const refsGalleryContainer = document.querySelector('.gallery')
console.log(refsGalleryContainer );

// готовая разметка
const gallerySet = createGallery(galleryItems)

//фун. разметки галереи
function createGallery(arr) {
const newArr = arr.map(el => `<a class="gallery__item" href="${el.original}">
    <img class="gallery__image lazyload blur-up" data-src="${el.preview}" alt="${el.description}" />
</a>`).join('')

    return newArr
}

// вставка разметки в html
refsGalleryContainer.innerHTML = gallerySet

// инициализация библиотеки 
let gallery = new SimpleLightbox('.gallery a', {captionsData :'alt', captionDelay: 250});


