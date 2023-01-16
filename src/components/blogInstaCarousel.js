import Img01 from "../assets/insta-carousel-img01.jpg";
import Img02 from "../assets/insta-carousel-img02.jpg";
import Coliiv from "../assets/coliiv-ext-img.jpg";
import { ICON_INSTAGRAM_LIGHT } from "../utils/icons";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default class InstaCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
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
                <div className="slider-item__figure">
                  <img src={Img01} alt="" />
                </div>
              </div>
              <div className="slider__item">
                <div className="slider-item__figure">
                  <img src={Img02} alt="" />
                </div>
              </div>
              <div className="slider__item">
                <div className="slider-item__figure">
                  <img src={Img01} alt="" />
                </div>
              </div>
              <div className="slider__item">
                <div className="slider-item__figure">
                  <img src={Img02} alt="" />
                </div>
              </div>
              <div className="slider__item">
                <div className="slider-item__figure">
                  <img src={Img01} alt="" />
                </div>
              </div>
              <div className="slider__item">
                <div className="slider-item__figure">
                  <img src={Img02} alt="" />
                </div>
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
}
