import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Img01 from "../../assets/held-event-slide-img01.webp";
import Img02 from "../../assets/held-event-slide-img02.webp";
import Img03 from "../../assets/held-event-slide-img03.webp";

function HeldEvent() {
  const settings = {
    dots: false,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.2,
          arrows: false,
          speed: 500,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrows: false,
          speed: 400,
        },
      },
    ],
  };
  return (
    <section className="held-event-slider slider">
      <div className="container-alt">
        <div className="slider__title">
          <h2 className="title-primary">Eventos realizados</h2>
        </div>
      </div>
      <div className="held-event__slider-wrapper slider__wrapper">
        <Slider {...settings}>
          <div className="slider-item">
            <div className="slider-item__figure">
              <img src={Img01} alt="" />
            </div>
            <h3 className="slider-item__title">NestJS Beiginner</h3>
            <h6 className="slider-item__subtitle">
              Tecnologia
              <span className="slider-item__date">10 - Junio - 2022</span>
            </h6>
          </div>
          <div className="slider-item">
            <div className="slider-item__figure">
              <img src={Img02} alt="" />
            </div>
            <h3 className="slider-item__title">PhallantiaPhoto 2021</h3>
            <h6 className="slider-item__subtitle">
              Tecnologia
              <span className="slider-item__date">10 - Junio - 2022</span>
            </h6>
          </div>
          <div className="slider-item">
            <div className="slider-item__figure">
              <img src={Img03} alt="" />
            </div>
            <h3 className="slider-item__title">IBM Cognos Analytics</h3>
            <h6 className="slider-item__subtitle">
              Marketing
              <span className="slider-item__date">10 - Junio - 2022</span>
            </h6>
          </div>
          <div className="slider-item">
            <div className="slider-item__figure">
              <img src={Img01} alt="" />
            </div>
            <h3 className="slider-item__title">NestJS Beiginner</h3>
            <h6 className="slider-item__subtitle">
              Tecnologia
              <span className="slider-item__date">10 - Junio - 2022</span>
            </h6>
          </div>
          <div className="slider-item">
            <div className="slider-item__figure">
              <img src={Img02} alt="" />
            </div>
            <h3 className="slider-item__title">PhallantiaPhoto 2021</h3>
            <h6 className="slider-item__subtitle">
              Tecnologia
              <span className="slider-item__date">10 - Junio - 2022</span>
            </h6>
          </div>
          <div className="slider-item">
            <div className="slider-item__figure">
              <img src={Img03} alt="" />
            </div>
            <h3 className="slider-item__title">IBM Cognos Analytics</h3>
            <h6 className="slider-item__subtitle">
              Marketing
              <span className="slider-item__date">10 - Junio - 2022</span>
            </h6>
          </div>
        </Slider>
      </div>
    </section>
  );
}
export default HeldEvent;
