import Swiper from "swiper";
import { Keyboard, } from "swiper/modules";

const aboutSlider = document.querySelector(".about-slider");

if (aboutSlider) {
  const swiper = new Swiper(aboutSlider, {
    modules: [Keyboard,],
    keyboard: {
      enabled: true,
      pageUpDown: false,
    },
    breakpoints: {
      "768.1": {
        slidesPerView: 5,
        spaceBetween: 44 / 1920 * innerWidth,
      },
    },
    slidesPerView: 1,
    spaceBetween: 10,
    rewind: true,
  });
}
