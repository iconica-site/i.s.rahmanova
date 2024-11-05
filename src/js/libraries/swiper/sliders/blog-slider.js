import Swiper from "swiper";
import { Keyboard, } from "swiper/modules";

const blogSlider = document.querySelector(".blog-slider");

if (blogSlider) {
  const swiper = new Swiper(blogSlider, {
    modules: [Keyboard,],
    keyboard: {
      enabled: true,
      pageUpDown: false,
    },
    breakpoints: {
      "768.1": {
        slidesPerView: 3,
        spaceBetween: 30 / 1920 * innerWidth,
      },
    },
    slidesPerView: 1.429476003,
    spaceBetween: 19,
    rewind: true,
  });
}
