import { galleryItems } from "./gallery-items.js";
// Change code below this line

const place = document.querySelector(".gallery");

const newItems = galleryItems.map((e) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${e.original}" onclick="return false">
    <img class="gallery__image" src="${e.preview}" alt="${e.description}"/>
  </a></li>`;
});
place.insertAdjacentHTML("beforeend", newItems.join(""));

let gallery = new SimpleLightbox(".gallery a", {
  caption: true,
  captionsData: "alt",
  captionDelay: 250,
});
gallery.on("show.simplelightbox", function () {
  // do something…
});
