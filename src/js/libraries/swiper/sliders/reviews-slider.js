import Swiper from "swiper";
import { Keyboard, } from "swiper/modules";

const reviewsSlider = document.querySelector(".reviews-slider");

if (reviewsSlider) {
  const swiper = new Swiper(reviewsSlider, {
    modules: [Keyboard,],
    keyboard: {
      enabled: true,
      pageUpDown: false,
    },
    breakpoints: {
      "768.1": {
        slidesPerView: 3,
        spaceBetween: 25 / 1920 * innerWidth,
      },
    },
    slidesPerView: 1.370109072,
    spaceBetween: 12,
    rewind: true,
  });
}
