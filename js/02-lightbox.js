import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galeryRef = document.querySelector(".gallery");

const originalImgRef = galleryItems.map(
  (galleryItems) => galleryItems.original
);

galeryRef.insertAdjacentHTML("beforeend", createImgInGalery(galleryItems));

galeryRef.addEventListener("click", lightbox);

function createImgInGalery(array) {
  const newElem = array
    .map((item) => {
      return `
    <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" ">
    </a>     
    `;
    })
    .join("");

  return newElem;
}

var lightbox = new SimpleLightbox(".gallery a");
