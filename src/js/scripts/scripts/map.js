const API_KEY = "c1c633f6-3514-42a2-818c-554297b60c39";
const API_LINK = `https://api-maps.yandex.ru/2.1/?apikey=${API_KEY}&lang=ru_RU`;
/** @type {HTMLDivElement} */
const API_BLOCK = document.getElementById("map");
const { head } = document;

if (API_BLOCK) {
  const script = document.createElement("script");
  script.src = API_LINK;
  script.async = true;

  script.addEventListener("load", () => {
    ymaps.ready(init);
  });

  function init() {
    const map = new ymaps.Map("map", {
      center: [59.966241, 30.310622],
      zoom: 17,
      controls: ["zoomControl",],
    });

    const geoObject = new ymaps.GeoObject({
      geometry: {
        type: "Point",
        coordinates: [59.966241, 30.310622],
      }
    });

    map.geoObjects.add(geoObject);
    map.behaviors.disable('scrollZoom');
    map.controls.get('zoomControl').options.set({
      size: 'small',
      layout: 'round#zoomLayout',
      position: { right: 10, top: 10 }
    });
  }

  head.appendChild(script);
}
