import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselIcon from "../assets/home-carousel-icon.png";
import CarouselImg from "../assets/carousel-img.jpg";
import { ICON_PARTNER01, ICON_PARTNER02 } from "../utils/icons";

export default class HomeCarousel extends Component {
  render() {
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 5,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="homeCarousel">
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
                  <img src={CarouselImg} alt="" />
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
                  <img src={CarouselImg} alt="" />
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
                  <img src={CarouselImg} alt="" />
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
}
