import Swiper from "swiper";
import { Keyboard, } from "swiper/modules";

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
        spaceBetween: 27 / 1920 * innerWidth,
        centeredSlides: false,
      },
    },
    slidesPerView: 1.836867768,
    spaceBetween: 10,
    rewind: true,
    centeredSlides: true,
    initialSlide: 1,
  });
}
