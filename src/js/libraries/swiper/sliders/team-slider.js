import Swiper from "swiper";
import { Keyboard, } from "swiper/modules";

const MIN_769 = matchMedia("(min-width: 768.1px)");
const teamSlider = document.querySelector(".team-slider");

if (teamSlider) {
  const swiper = new Swiper(teamSlider, {
    modules: [Keyboard,],
    keyboard: {
      enabled: true,
      pageUpDown: false,
    },
    breakpoints: {
      "768.1": {
        slidesPerView: 3,
        spaceBetween: Math.min(27 / 1920 * innerWidth, 27),
        centeredSlides: false,
      },
    },
    slidesPerView: 1.836867768,
    spaceBetween: 10,
    rewind: true,
    centeredSlides: true,
    initialSlide: 1,
  });

  swiper.on("resize", (slider) => {
    const { params } = slider;

    if (MIN_769.matches) {
      params.spaceBetween = Math.min(27 / 1920 * innerWidth, 27);
    }
  });
}
