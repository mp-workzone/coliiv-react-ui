import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CarouselImg from "../../assets/carousel-img.webp";
import CarouselIcon from "../../assets/home-carousel-icon.webp";
import CarouselImg02 from "../../assets/slider-img02.webp";
import CarouselImg03 from "../../assets/slider-img03.webp";
import CarouselImg04 from "../../assets/slider-img04.webp";
import { ICON_PARTNER01, ICON_PARTNER02 } from "../../utils/icons";
function HomeCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="homeCarousel">
      <span className="slice landscape"></span>
      <div className="homeCarousel-icon">
        <img src={CarouselIcon} alt="" />
      </div>
      <div className="container-alt">
        <div className="homeCarousel__title">
          <h2 className="title-primary">
            Nuestros<span className="title-secondary">Socios</span>
          </h2>
        </div>
        <Slider {...settings}>
          <div className="carousel-item">
            <div className="item-wrapper">
              <div className="img">
                <img src={CarouselImg} alt="" />
              </div>
              <div className="carousel-content">
                <h3 className="title">Inmobiliarios</h3>
                <ul className="partnes">
                  <li className="partner">
                    <a href="/">{ICON_PARTNER02}</a>
                  </li>
                  <li className="partner">
                    <a href="/">{ICON_PARTNER01}</a>
                  </li>

                  <li className="partner">
                    <a href="/">{ICON_PARTNER01}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="item-wrapper">
              <div className="img">
                <img src={CarouselImg02} alt="" />
              </div>
              <div className="carousel-content">
                <h3 className="title">ARQUITECTURA</h3>
                <ul className="partnes">
                  <li className="partner">
                    <a href="/">{ICON_PARTNER01}</a>
                  </li>
                  <li className="partner">
                    <a href="/">{ICON_PARTNER01}</a>
                  </li>
                  <li className="partner">
                    <a href="/">{ICON_PARTNER02}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="item-wrapper">
              <div className="img">
                <img src={CarouselImg03} alt="" />
              </div>
              <div className="carousel-content">
                <h3 className="title">Inmobiliarios</h3>
                <ul className="partnes">
                  <li className="partner">
                    <a href="/">{ICON_PARTNER01}</a>
                  </li>
                  <li className="partner">
                    <a href="/">{ICON_PARTNER02}</a>
                  </li>
                  <li className="partner">
                    <a href="/">{ICON_PARTNER01}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="item-wrapper">
              <div className="img">
                <img src={CarouselImg04} alt="" />
              </div>
              <div className="carousel-content">
                <h3 className="title">ARQUITECTURA</h3>
                <ul className="partnes">
                  <li className="partner">
                    <a href="/">{ICON_PARTNER01}</a>
                  </li>
                  <li className="partner">
                    <a href="/">{ICON_PARTNER02}</a>
                  </li>
                  <li className="partner">
                    <a href="/">{ICON_PARTNER01}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default HomeCarousel;
