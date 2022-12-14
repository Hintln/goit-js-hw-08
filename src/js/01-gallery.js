// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('div.gallery')

const createGallery = 
galleryItems.map(({preview, original, description}) => 
`
<a class="gallery__item"
href=${original}>
<img class="gallery__image"
src=${preview}
alt=${description} />
</a>
`
)

gallery.insertAdjacentHTML('beforeend', createGallery.join(''))

var lightbox = new SimpleLightbox('.gallery .gallery__item', { captionsData: "alt", captionDelay: "250" });

