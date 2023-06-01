import { galleryItems } from "./gallery-items.js";
// Change code below this line
const place = document.querySelector(".gallery");

const newItems = galleryItems.map((e) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${e.original}" onclick="return false">
    <img
      class="gallery__image"
      src="${e.preview}"
      data-source="${e.original}"
      alt="${e.description}"
    />
  </a></li>`;
});
place.insertAdjacentHTML("beforeend", newItems.join(""));

place.addEventListener("click", (e) => {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}">`
  );
  instance.show();

  const closeModal = (e) => {
    if (e.code !== "Space") {
      return;
    }
    instance.close(() => {
      document.removeEventListener("keydown", closeModal);
    });
  };
  document.addEventListener("keydown", closeModal);
});
