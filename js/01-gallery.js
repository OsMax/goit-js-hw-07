import { galleryItems } from "./gallery-items.js";
// Change code below this line
const place = document.querySelector(".gallery");
for (let item of galleryItems) {
  const newLi = document.createElement("li");
  newLi.classList.add("gallery__item");
  let str = `<a class="gallery__link" href="${item.original}" onclick="return false">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>`;
  newLi.insertAdjacentHTML("beforeend", str);
  place.appendChild(newLi);
}

place.addEventListener("click", (e) => {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}">`
  );
  // document.body.style.overflow = "hidden";
  instance.show();

  const closeModal = (e) => {
    if (e.code !== "Space") {
      return;
    }
    // document.body.style.overflow = "scroll";
    instance.close(() => {
      document.removeEventListener("keydown", closeModal);
      // console.log("!!!");
    });
  };

  document.addEventListener("keydown", closeModal);
});
