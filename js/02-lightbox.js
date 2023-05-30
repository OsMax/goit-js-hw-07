import { galleryItems } from "./gallery-items.js";
// Change code below this line

const place = document.querySelector(".gallery");
console.log(galleryItems);
for (let item of galleryItems) {
  const newLi = document.createElement("li");
  newLi.classList.add("gallery__item");
  let str = `<a class="gallery__link" href="${item.original}" onclick="return false">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>`;
  newLi.insertAdjacentHTML("beforeend", str);
  place.appendChild(newLi);
}

let gallery = new SimpleLightbox(".gallery a", {
  caption: true,
  captionsData: "alt",
  captionDelay: 250,
});
gallery.on("show.simplelightbox", function () {
  // do something…
});
