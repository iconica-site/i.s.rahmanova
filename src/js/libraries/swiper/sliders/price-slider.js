import Swiper from "swiper";
import { Keyboard, } from "swiper/modules";

const MIN_769 = matchMedia("(min-width: 768.1px)");
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
        spaceBetween: Math.min(166 / 1920 * innerWidth, 166),
        centeredSlides: false,
      },
    },
    slidesPerView: "auto",
    spaceBetween: 93,
    rewind: true,
    centeredSlides: true,
    initialSlide: 1,
  });

  swiper.on("resize", (slider) => {
    const { params } = slider;

    if (MIN_769.matches) {
      params.spaceBetween = Math.min(166 / 1920 * innerWidth, 166);
    }
  });
}
