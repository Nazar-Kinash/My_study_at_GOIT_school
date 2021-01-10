import images from "./gallery-items.js";
const galleryList = document.querySelector(".js-gallery");
const modalWindov = document.querySelector(".js-lightbox");
const imageInModalWindov = document.querySelector(".lightbox__image");

const createGalleryList = function(arr) {
  let html = "";
  for (let i = 0; i < arr.length; i++) {
    html += `<li class="gallery__item">
            <a
              class="gallery__link"
              href=${arr[i].original}
            >
              <img
                class="gallery__image"
                src="${arr[i].preview}"
                data-source="${arr[i].original}"
                alt="${arr[i].description}"
                data-index="${i}"
              />
            </a>
          </li>`;
  }
  return html;
};

function nextImage(index) {
  imageInModalWindov.setAttribute(
    "src",
    document
      .querySelector(`[data-index="${index}"]`)
      .getAttribute("data-source")
  );
  imageInModalWindov.setAttribute(
    "alt",
    document.querySelector(`[data-index="${index}"]`).alt
  );
}

function previousImage(index) {
  imageInModalWindov.setAttribute(
    "src",
    document
      .querySelector(`[data-index="${index}"]`)
      .getAttribute("data-source")
  );
  imageInModalWindov.setAttribute(
    "alt",
    document.querySelector(`[data-index="${index}"]`).alt
  );
}

function openModalWindow(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;
  modalWindov.classList.add("is-open");
  imageInModalWindov.setAttribute(
    "src",
    event.target.getAttribute("data-source")
  );
  imageInModalWindov.setAttribute("alt", event.target.alt);
  let indexImage = event.target.getAttribute("data-index");

  document.onkeydown = function(e) {
    if (e.key === "Escape") {
      closeModalWondow(e);
    }
    if (e.key === "ArrowRight") {
      if (indexImage < images.length - 1) {
        indexImage++;
        nextImage(Number(indexImage));
      }
    }
    if (e.key === "ArrowLeft") {
      if (indexImage > 0) {
        indexImage--;
        previousImage(Number(indexImage));
      }
    }
  };
}

function closeModalWondow(event) {
  if (event.target.nodeName === "IMG") return;
  modalWindov.classList.remove("is-open");
  imageInModalWindov.setAttribute("src", "");
  imageInModalWindov.setAttribute("alt", "");
}

galleryList.insertAdjacentHTML("afterbegin", createGalleryList(images));
galleryList.addEventListener("click", openModalWindow);
modalWindov.addEventListener("click", closeModalWondow);
