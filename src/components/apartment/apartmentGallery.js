import { useState } from "react";
import Slider from "react-slick";
import Gallery1 from "../../assets/apt-gal-01.webp";
function ApartmentGallery({ figure }) {
  const [galleryIndex, setGalleryIndex] = useState(1);

  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
    afterChange: (index) => {
      setGalleryIndex(index + 1);
    },
  };

  return (
    <section className="apartment-gallery">
      <Slider {...settings}>
        <div className="apartment-gallery__item">
          <img src={Gallery1} alt="" />
        </div>
        <div className="apartment-gallery__item">
          <img src={Gallery1} alt="" />
        </div>
        <div className="apartment-gallery__item">
          <img src={Gallery1} alt="" />
        </div>
        <div className="apartment-gallery__item">
          <img src={Gallery1} alt="" />
        </div>
        <div className="apartment-gallery__item">
          <img src={Gallery1} alt="" />
        </div>
      </Slider>
      <div className="slider-progress">
        {galleryIndex < 10 ? "0" : ""}
        {galleryIndex} <span></span> 05
      </div>
    </section>
  );
}

export default ApartmentGallery;
