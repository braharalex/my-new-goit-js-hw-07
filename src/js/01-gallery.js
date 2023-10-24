import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
galleryEl.addEventListener("click", onOpenModal);
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryEl.innerHTML = galleryMarkup;
let modal = {};

function createGalleryMarkup(items) {
 return items
  .map(({ preview, original, description }) => {
   return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  })
  .join("");
}

function onOpenModal(evt) {
 evt.preventDefault();
 if (!evt.target.classList.contains("gallery__image")) {
  return;
 }

 const imgSrc = evt.target.dataset.source;
 modal = basicLightbox.create(`<img src="${imgSrc}"/>`);
 modal.show();
 window.addEventListener("keydown", onEscKeyClose);
}

function onEscKeyClose(evt) {
 if (evt.code === "Escape") {
  modal.close();
  // window.removeEventListener("keydown", onEscKeyClose);
  removeEscKeyPress();
 }
}

function removeEscKeyPress() {
 if (modal.visible()) {
  window.removeEventListener("keydown", onEscKeyClose);
 }
}
