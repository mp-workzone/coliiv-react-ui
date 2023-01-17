import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Img01 from "../assets/blog-carousel-img01.jpg";
import Img02 from "../assets/blog-carousel-img02.jpg";
import Img03 from "../assets/blog-carousel-img03.jpg";

export default class BlogCarousel extends Component {
  state = {
    activeSlide: 1,
  };
  render() {
    const settings = {
      dots: false,
      speed: 800,
      slidesToShow: 3,
      arrows: false,
      slidesToScroll: 1,
      beforeChange: (current, next) => this.setState({ activeSlide: next + 1 }),
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: false,
          },
        },
      ],
    };
    return (
      <section className="held-event slider blog-carousel">
        <div className="container-alt">
          <div className="slider__title">
            <h2 className="title-primary">Últimas noticias</h2>
          </div>
        </div>
        <div className="blog-carousel__wrapper slider__wrapper">
          <Slider {...settings}>
            <div className="slider-item">
              <div className="slider-item__figure">
                <img src={Img01} alt="" />
              </div>
              <div className="slider-item__text">
                <h3 className="slider-item__title">
                  Fusce aliquet efficitur est eu viverra
                </h3>
                <h4 className="slider-item__subtitle">
                  20 Agosto 2022
                  <span className="more-link">Leer artÍculo</span>
                </h4>
              </div>
            </div>
            <div className="slider-item">
              <div className="slider-item__figure">
                <img src={Img02} alt="" />
              </div>
              <div className="slider-item__text">
                <h3 className="slider-item__title">
                  Sed nulla tellus, ullamcorper non nibh eu
                </h3>
                <h4 className="slider-item__subtitle">
                  20 Agosto 2022
                  <span className="more-link">Leer artÍculo</span>
                </h4>
              </div>
            </div>
            <div className="slider-item">
              <div className="slider-item__figure">
                <img src={Img03} alt="" />
              </div>
              <div className="slider-item__text">
                <h3 className="slider-item__title">
                  Consectetur adipiscing elit, phasellus dui Diam
                </h3>
                <h4 className="slider-item__subtitle">
                  20 Agosto 2022
                  <span className="more-link ">Leer artÍculo</span>
                </h4>
              </div>
            </div>
            <div className="slider-item">
              <div className="slider-item__figure">
                <img src={Img01} alt="" />
              </div>
              <div className="slider-item__text">
                <h3 className="slider-item__title">
                  {" "}
                  Fusce aliquet efficitur est eu viverra
                </h3>
                <h4 className="slider-item__subtitle">
                  20 Agosto 2022
                  <span className="more-link">Leer artÍculo</span>
                </h4>
              </div>
            </div>
            <div className="slider-item">
              <div className="slider-item__figure">
                <img src={Img02} alt="" />
              </div>
              <div className="slider-item__text">
                <h3 className="slider-item__title">
                  Sed nulla tellus, ullamcorper non nibh eu
                </h3>
                <h4 className="slider-item__subtitle">
                  20 Agosto 2022
                  <span className="more-link">Leer artÍculo</span>
                </h4>
              </div>
            </div>
            <div className="slider-item">
              <div className="slider-item__figure">
                <img src={Img03} alt="" />
              </div>
              <div className="slider-item__text">
                <h3 className="slider-item__title">
                  Consectetur adipiscing elit, phasellus dui Diam
                </h3>
                <h4 className="slider-item__subtitle">
                  20 Agosto 2022
                  <span className="more-link">Leer artÍculo</span>
                </h4>
              </div>
            </div>
          </Slider>
          <div className="counter">
            <p className="current-value">
              {this.state.activeSlide < 10 ? 0 : ""}
              {this.state.activeSlide}
            </p>

            <div className="counter-line"></div>
            <p className="total-value">06</p>
          </div>
        </div>
      </section>
    );
  }
}
