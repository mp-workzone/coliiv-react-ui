import CareerHeroImg from "../assets/career-hero.jpg";
import CareerSideImg from "../assets/career-intro-side-img.png";
import IntroImg from "../assets/intro-img.jpg";
import GalleryImg01 from "../assets/gallery-img01.jpg";
import GalleryImg02 from "../assets/gallery-img02.jpg";
import GalleryImg03 from "../assets/gallery-img03.jpg";
import GalleryImg04 from "../assets/gallery-img04.jpg";
import IntroImg02 from "../assets/intro-img02.jpg";
import { ICON_LOCATION } from "../utils/icons";
function CareerHero() {
  return (
    <>
      <section className="career-hero hero">
        <div className="hero__img">
          <img src={CareerHeroImg} alt="" />
        </div>
        <h2 className="hero__title title-primary">CARRERA</h2>
      </section>

      {/* intro section start */}
      <section className="career-intro intro-section career-intro-spacing">
        <div className="leaf">
          <img src={CareerSideImg} alt="" />
        </div>
        <div className="container-alt">
          <div className="inner-section">
            <div className="intro-figure">
              <img src={IntroImg} alt="" />
            </div>
            <div className="intro-text-area">
              <div className="intro-title">
                <h2 className="title-primary">
                  un mundo por
                  <span className="title-secondary">descubrir </span>
                </h2>
                <h4 className="dsc">
                  Donec nisl magna, blandit nec mauris sed, aliquam aliquam
                  eros. Proin et metus consequat, facilisis nisi et, tincidunt
                  ante. Integer interdum euismod mollis.
                  <span className="dsc">
                    Phasellus viverra vitae magna at accumsan. Nam eu ante
                    sodales, malesuada felis sed, ullamcorper orci. Vestibulum
                    placerat quis erat ultricies fermentum. Suspendisse nibh
                    turpis, sagittis feugiat lacus feugiat, sodales dapibus
                    lorem. Praesent viverra luctus neque dictum scelerisque.
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* intro section end */}

      {/* gallery start */}
      <section className="gallery-section">
        <div className="container-alt">
          <div className="grid-area">
            <div className="grid-item">
              <div className="gallery-img">
                <img src={GalleryImg01} alt="" />
              </div>
            </div>
            <div className="grid-item span-3">
              <div className="gallery-img">
                <img src={GalleryImg02} alt="" />
              </div>
            </div>
            <div className="grid-item span-3">
              <div className="gallery-img">
                <img src={GalleryImg03} alt="" />
              </div>
            </div>
            <div className="grid-item">
              <div className="gallery-img">
                <img src={GalleryImg04} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* gallery end */}

      {/* built together start */}
      <section className="build-together intro-section">
        <div className="container-alt">
          <div className="inner-section">
            <div className="intro-text-area">
              <h2 className="title-primary">
                Construir
                <span className="title-secondary">Juntos</span>
              </h2>
              <h4 className="dsc">
                <span className="slice portrait"></span>
                Donec nisl magna, blandit nec mauris sed, aliquam aliquam eros.
                Proin et metus consequat, facilisis nisi et, tincidunt ante.
                Integer interdum euismod mollis.
                <span className="dsc">
                  Phasellus viverra vitae magna at accumsan. Nam eu ante
                  sodales, malesuada felis sed, ullamcorper orci. Vestibulum
                  placerat quis erat ultricies fermentum. Suspendisse nibh
                  turpis, sagittis feugiat lacus feugiat, sodales dapibus lorem.
                  Praesent viverra luctus neque dictum scelerisque
                </span>
              </h4>
            </div>
            <div className="intro-figure">
              <img src={IntroImg02} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* built together end */}

      {/* choose project start */}
      <section className="choose-project">
        <div className="container-alt">
          <div className="choose-project__title">
            <h2 className="choose-project__title__main">te estamos buscando</h2>
            <div className="choose-project__title__sub dsc">
              Gracias por ver nuestras ofertas de trabajo, postúlate aquí si ves
              algo de tu interés.
            </div>
          </div>
          <div className="projects">
            <div className="project-category">
              <h3 className="project-category__title">Construcción </h3>
              <div className="project">
                <div className="project__content">
                  <h4 className="project__title">
                    Pasante de gestión de construcción
                  </h4>
                  <h6 className="project__subtitle">Presencial </h6>
                  <p className="project__location">
                    <span className="location-icon">{ICON_LOCATION}</span>
                    Medellín, Colombia
                  </p>
                </div>
                <a href="/" className="more-btn">
                  Ver más
                </a>
              </div>
              <div className="project">
                <div className="project__content">
                  <h4 className="project__title">
                    Pasante de gestión de construcción
                  </h4>
                  <h6 className="project__subtitle">Presencial </h6>
                  <p className="project__location">
                    <span className="location-icon">{ICON_LOCATION}</span>
                    Medellín, Colombia
                  </p>
                </div>
                <a href="/" className="more-btn">
                  Ver más
                </a>
              </div>
            </div>
            <div className="project-category">
              <h3 className="project-category__title">Construcción </h3>
              <div className="project">
                <div className="project__content">
                  <h4 className="project__title">
                    Pasante de gestión de construcción
                  </h4>
                  <h6 className="project__subtitle">Presencial </h6>
                  <p className="project__location">
                    <span className="location-icon">{ICON_LOCATION}</span>
                    Medellín, Colombia
                  </p>
                </div>
                <a href="/" className="more-btn">
                  Ver más
                </a>
              </div>
              <div className="project">
                <div className="project__content">
                  <h4 className="project__title">
                    Pasante de gestión de construcción
                  </h4>
                  <h6 className="project__subtitle">Presencial </h6>
                  <p className="project__location">
                    <span className="location-icon">{ICON_LOCATION}</span>
                    Medellín, Colombia
                  </p>
                </div>
                <a href="/" className="more-btn">
                  Ver más
                </a>
              </div>
            </div>
            <div className="project-category">
              <h3 className="project-category__title">Construcción </h3>
              <div className="project">
                <div className="project__content">
                  <h4 className="project__title">
                    Pasante de gestión de construcción
                  </h4>
                  <h6 className="project__subtitle">Presencial </h6>
                  <p className="project__location">
                    <span className="location-icon">{ICON_LOCATION}</span>
                    Medellín, Colombia
                  </p>
                </div>
                <a href="/" className="more-btn">
                  Ver más
                </a>
              </div>
              <div className="project">
                <div className="project__content">
                  <h4 className="project__title">
                    Pasante de gestión de construcción
                  </h4>
                  <h6 className="project__subtitle">Presencial </h6>
                  <p className="project__location">
                    <span className="location-icon">{ICON_LOCATION}</span>
                    Medellín, Colombia
                  </p>
                </div>
                <a href="/" className="more-btn">
                  Ver más
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* choose project end */}
    </>
  );
}
export default CareerHero;