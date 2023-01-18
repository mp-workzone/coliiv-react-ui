import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Coliiv from "../../assets/coliiv-ext-img.jpg";
import Img01 from "../../assets/insta-carousel-img01.webp";
import Img02 from "../../assets/insta-carousel-img02.webp";
import { ICON_INSTAGRAM_LIGHT } from "../../utils/icons";

function InstaCarousel() {
  const settings = {
    dots: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesPerRows: 2,
          speed: 600,
          rows: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="coliiv">
        <div className="coliiv__img">
          <img src={Coliiv} alt="" />
        </div>
        <h4 className="coliiv__text">Coliiv @coliiv_coliving</h4>
      </div>
      <div className="insta-carousel slider">
        <div className="container-alt">
          <Slider {...settings}>
            <div className="slider__item">
              <a href="/" className="slider-item__figure">
                <img src={Img01} alt="" />
              </a>
            </div>
            <div className="slider__item">
              <a href="/" className="slider-item__figure">
                <img src={Img02} alt="" />
              </a>
            </div>
            <div className="slider__item">
              <a href="/" className="slider-item__figure">
                <img src={Img01} alt="" />
              </a>
            </div>
            <div className="slider__item">
              <a href="/" className="slider-item__figure">
                <img src={Img02} alt="" />
              </a>
            </div>
            <div className="slider__item">
              <a href="/" className="slider-item__figure">
                <img src={Img01} alt="" />
              </a>
            </div>
            <div className="slider__item">
              <a href="/" className="slider-item__figure">
                <img src={Img02} alt="" />
              </a>
            </div>
          </Slider>
        </div>
        <div className="follw-us-insta">
          <a href="/">
            <div className="icon">{ICON_INSTAGRAM_LIGHT}</div>
            <h4 className="dsc">Síguenos en instagram</h4>
          </a>
        </div>
      </div>
    </>
  );
}

export default InstaCarousel;
