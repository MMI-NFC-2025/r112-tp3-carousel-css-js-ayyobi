// *** CAROUSEL ***
// TODO

const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");


const premierItem = document.querySelector(".carousel__item");


let scrollAmount = 0;


if (premierItem) {
  scrollAmount = premierItem.clientWidth; 
}

if (carousel && prevButton && nextButton) {

  prevButton.addEventListener("click", () => {
    carousel.scrollBy({
      left: -scrollAmount,
      behavior: "smooth"
    });
  });

  nextButton.addEventListener("click", () => {
    carousel.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });
  });
}
