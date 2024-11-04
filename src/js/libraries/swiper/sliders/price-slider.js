import Swiper from "swiper";
import { Keyboard, } from "swiper/modules";

const priceSlider = document.querySelector(".price-slider");

if (priceSlider) {
  const swiper = new Swiper(priceSlider, {
    modules: [Keyboard,],
    keyboard: {
      enabled: true,
      pageUpDown: false,
    },
    breakpoints: {
      "768.1": {

        spaceBetween: 166 / 1920 * innerWidth,
        centeredSlides: false,
      },
    },
    slidesPerView: "auto",
    spaceBetween: 93,
    rewind: true,
    centeredSlides: true,
    initialSlide: 1,
  });
}
