"use strict";

const carouselLeft = document.querySelector(".carousel-left");
const carouselRight = document.querySelector(".carousel-right");

const carouselImages = document.querySelectorAll(".carousel-image");
let carouselIndex = 0;

const carouselNav = document.querySelectorAll("nav > button > ion-icon");

function resetCarousel() {
  carouselImages.forEach((image) => {
    image.classList.add("hidden");
  });
  carouselNav.forEach((nav) => {
    nav.name = "ellipse-outline";
  });
}

function showCarousel(element) {
  resetCarousel();
  element.classList.remove("hidden");
  carouselNav[carouselIndex].name = "ellipse";
}

carouselRight.addEventListener("click", (e) => {
  if (carouselIndex === carouselImages.length - 1) {
    carouselIndex = 0;
    showCarousel(carouselImages[carouselIndex]);
    return;
  }
  showCarousel(carouselImages[++carouselIndex]);
});

carouselLeft.addEventListener("click", (e) => {
  if (carouselIndex === 0) {
    carouselIndex = carouselImages.length;
  }
  showCarousel(carouselImages[--carouselIndex]);
});

carouselNav.forEach((nav) => {
  nav.addEventListener("click", (e) => {
    carouselIndex = Number(nav.dataset.index);
    showCarousel(carouselImages[nav.dataset.index]);

    console.log(typeof carouselIndex);
  });
});

window.onload = function () {
  // same as carouselRight
  setInterval(() => {
    if (carouselIndex === 2) {
      carouselIndex = 0;
      showCarousel(carouselImages[carouselIndex]);
      return;
    }
    showCarousel(carouselImages[++carouselIndex]);
  }, 5000);
};
