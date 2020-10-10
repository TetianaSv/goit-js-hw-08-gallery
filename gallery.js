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

function stopDefAction(evt) {
  evt.preventDefault();
}

function onGalleryContainerClick(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  } else {
    document.querySelector(".lightbox.js-lightbox").classList.add("is-open");
    const lightboxButtonEl = document.querySelector(".lightbox__button");
    const lightboxImageEl = document.querySelector(".lightbox__image");
    lightboxImageEl.src = evt.target.dataset.source;
    lightboxImageEl.alt = evt.target.alt;
    lightboxButtonEl.addEventListener("click", closeModal);
    document
      .querySelector(".lightbox__overlay")
      .addEventListener("click", closeModal);
    window.addEventListener("keydown", onEscKeyPress);
  }
  stopDefAction(evt);
  console.log(evt.target.dataset.source);
}

function closeModal() {
  document.querySelector(".lightbox.js-lightbox").classList.remove("is-open");
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    closeModal();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = "Escape";
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    closeModal();
  }
}
