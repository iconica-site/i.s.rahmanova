import Swiper from "swiper";
import { Keyboard, } from "swiper/modules";

const MIN_769 = matchMedia("(min-width: 768.1px)");
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
        spaceBetween: Math.min(44 / 1920 * innerWidth, 44),
      },
    },
    slidesPerView: 1,
    spaceBetween: 10,
    rewind: true,
  });

  swiper.on("resize", (slider) => {
    const { params } = slider;

    if (MIN_769.matches) {
      params.spaceBetween = Math.min(44 / 1920 * innerWidth, 44);
    }
  });
}
