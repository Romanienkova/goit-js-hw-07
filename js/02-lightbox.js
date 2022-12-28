import { galleryItems } from './gallery-items.js';
// Change code below this line

const divWithGalleryId = document.querySelector(".gallery");
const createGalleryMarkup = () =>
  galleryItems
    .map(
      ({ preview, original, description }) =>
        `
				<a class="gallery__item" href="${original}">
					<img
						class="gallery__image"
						src="${preview}"
						
						alt="${description}"
					/>
				</a>
			`
    )
    .join("");

const showGalleryMarkup = () =>
  (divWithGalleryId.innerHTML = createGalleryMarkup(galleryItems));

showGalleryMarkup();

const lightbox = new SimpleLightbox(".gallery .gallery__item", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});