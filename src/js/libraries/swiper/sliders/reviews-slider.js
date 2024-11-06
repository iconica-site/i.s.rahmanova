import Swiper from "swiper";
import { Keyboard, } from "swiper/modules";

const MIN_769 = matchMedia("(min-width: 768.1px)");
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
        spaceBetween: Math.min(25 / 1920 * innerWidth, 25),
      },
    },
    slidesPerView: 1.370109072,
    spaceBetween: 12,
    rewind: true,
  });

  swiper.on("resize", (slider) => {
    const { params } = slider;

    if (MIN_769.matches) {
      params.spaceBetween = Math.min(25 / 1920 * innerWidth, 25);
    }
  });
}
