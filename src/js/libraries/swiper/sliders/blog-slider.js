import Swiper from "swiper";
import { Keyboard, } from "swiper/modules";

const MIN_769 = matchMedia("(min-width: 768.1px)");
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
        spaceBetween: Math.min(30 / 1920 * innerWidth, 30),
      },
    },
    slidesPerView: 1.429476003,
    spaceBetween: 19,
    rewind: true,
  });

  swiper.on("resize", (slider) => {
    const { params } = slider;

    if (MIN_769.matches) {
      params.spaceBetween = Math.min(30 / 1920 * innerWidth, 30);
    }
  });
}
