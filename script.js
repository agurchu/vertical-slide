const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slideLength = slideRight.querySelectorAll("div").length;

let activesSlideIndex = 0;

slideLeft.style.top = `-${(slideLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activesSlideIndex++;
    if (activesSlideIndex > slideLength - 1) {
      activesSlideIndex = 0;
    }
  } else if (direction === "down") {
    activesSlideIndex--;
    if (activesSlideIndex < 0) {
      activesSlideIndex = slideLength - 1;
    }
  }

  slideRight.style.transform = `translateY(-${
    activesSlideIndex * sliderHeight
  }px)`;

  slideLeft.style.transform = `translateY(+${
    activesSlideIndex * sliderHeight
  }px)`;
};
