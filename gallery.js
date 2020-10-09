import images from "./gallery-items.js";
console.log(images);

const listContainer = document.querySelector(".js-gallery");
const cardImagesGallery = createImagesGallery(images);

listContainer.insertAdjacentHTML("beforeend", cardImagesGallery);
listContainer.addEventListener("click", onGalleryContainerClick);

function createImagesGallery(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
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

function onGalleryContainerClick(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  evt.preventDefault();
  console.log(evt.target.dataset.source);
}
function stopDefAction(evt) {
  evt.preventDefault();
}
