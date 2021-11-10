import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galeryRef = document.querySelector(".gallery");

const originalImgRef = galleryItems.map(
  (galleryItems) => galleryItems.original
);

galeryRef.insertAdjacentHTML("beforeend", createImgInGalery(galleryItems));

galeryRef.addEventListener("click", onImageClick);

function createImgInGalery(array) {
  const newElem = array
    .map((item) => {
      return `
    <div class="gallery__item">
        <img class="gallery__image" srcset="${item.preview}" alt="${item.description}" data-img="${item.original}">
    </div>     
    `;
    })
    .join("");

  return newElem;
}

const arrayOfPicturesRef = galeryRef.querySelectorAll(".gallery__image");

function onImageClick(evt) {
  const dataAtt = evt.target.dataset.img;
  const altAtt = evt.target.alt;

  if (evt.target.tagName !== "IMG") return;

  const instance = basicLightbox.create(`
    <img src="${dataAtt}" alt="${altAtt}" width="800" height="600">
`);
  instance.show();
}
