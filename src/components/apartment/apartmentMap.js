import { useState } from "react";
import Slider from "react-slick";
import MapGallery1 from "../../assets/apartment-map.webp";
function ApartmentMap({ figure }) {
  const [mapIndex, setMapIndex] = useState(1);

  const settings2 = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => {
      setMapIndex(index + 1);
    },
  };
  return (
    <section className="apartment-map">
      <div className="container">
        <div className="title apartment-title">
          <h2 className="title-primary">
            plano <span className="title-secondary">de planta</span>
          </h2>
        </div>

        <div className="apartment-map__gallery">
          <div className="apartment-map__gallery__info">
            <p className="dsc">Apartamento en piso impar</p>
          </div>
          <div className="apartment-map__gallery__slides">
            <div className="slider-progress">
              {mapIndex < 10 ? "0" : ""}
              {mapIndex} <span>/</span> 05
            </div>
            <Slider {...settings2}>
              <div className="apartment-map__gallery__slide">
                <img src={MapGallery1} alt="" />
              </div>
              <div className="apartment-map__gallery__slide">
                <img src={MapGallery1} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApartmentMap;
