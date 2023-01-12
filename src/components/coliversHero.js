import { ICON_PUBLIC, ICON_MESSAGE, ICON_BUBBLE_CHART } from "../utils/icons";
import HeroImg from "../assets/colivers-hero.jpg";
import Plant from "../assets/plant01-left.png";
import MainFigure from "../assets/main-figure.jpg";
import SideFigure02 from "../assets/side-figure02.jpg";
import SideFigure03 from "../assets/side-figure03.jpg";
import SideFigure04 from "../assets/side-figure04.jpg";
import IntroImg from "../assets/coliver-activity.jpg";
import FavFoodImg from "../assets/fav-food.jpg";
import FavSportImg from "../assets/fav-sport.jpg";
import ColiversImg01 from "../assets/colivers-img01.jpg";
import ColiversImg02 from "../assets/colivers-img02.jpg";
function ColiversHero() {
  return (
    <>
      {/* hero start */}
      <section className="colivers-hero hero">
        <div className="hero__img">
          <img src={HeroImg} alt="" />
        </div>
        <h1 className="hero__title">colivers</h1>
      </section>
      {/* hero end */}

      {/* coliv family start */}
      <section className="coliv-intro">
        <div className="plant">
          <img src={Plant} alt="" />
        </div>
        <div className="container-alt">
          <div className="coliv-intro__title">
            <h2 className="title-primary">
              una verdadera
              <span className="title-secondary">familia CoLIiV</span>
            </h2>
          </div>
          <div className="coliv-intro__dsc dsc">
            Ut varius lorem id tincidunt ornare. Aenean dui nisl, rhoncus ut
            arcu eget, pharetra facilisis nulla. Nunc a elit vitae enim aliquam
            aliquet. Maecenas eleifend mi enim, vel elementum purus tristique
            sit amet. Quisque id velit id Leo gravida vulputate semper a neque.
            Mauris auctor ligula at ex consequat ullamcorper. Quisque ipsum
            nisl, dignissim quis tempor eu, vestibulum in felis. Suspendisse
            potenti. Sed quis diam nec sapien lobortis ornare.
          </div>

          <div className="reverse-wrapper">
            <div className="reverse-item">
              <div className=" reverse-item__icon">{ICON_PUBLIC}</div>
              <h4 className="reverse-item__title">Comunidad</h4>
              <h4 className="reverse-item__dsc dsc">
                El alma de la <br /> convivencia.
              </h4>
            </div>
            <div className="facility reverse-item">
              <div className=" reverse-item__icon">{ICON_MESSAGE}</div>
              <h4 className="reverse-item__title">Diálogo</h4>
              <h4 className="reverse-item__dsc dsc">
                Comunicación entre los <br /> residentes de nuestra <br />
                comunidad.
              </h4>
            </div>
            <div className="facility reverse-item">
              <div className=" reverse-item__icon">{ICON_BUBBLE_CHART}</div>
              <h4 className="reverse-item__title">Dinamismo</h4>
              <h4 className="reverse-item__dsc dsc">
                Actividades especiales <br /> para cada huésped.
              </h4>
            </div>
          </div>
        </div>
      </section>
      {/* coliv family end */}

      {/* coliv family gallery start */}
      <section className="coliv-family-gallery">
        <div className="gallery-center-content">
          <div className="main-figure">
            <img src={MainFigure} alt="" />
          </div>
          <h3 className="fig-caption">
            Aliquam commodo sed augue eget congue maecenas a augue lorem
            vestibulum ut
          </h3>
        </div>
        <div className="side-figure top-left">
          <img src={SideFigure04} alt="" />
        </div>
        <div className="side-figure bottom-left">
          <img src={SideFigure02} alt="" />
        </div>
        <div className="side-figure top-right">
          <img src={SideFigure02} alt="" />
        </div>
        <div className="side-figure bottom-right">
          <img src={SideFigure04} alt="" />
        </div>
      </section>
      {/* coliv family gallery end */}

      {/* colivers activity start */}
      <section className="coliver-activity intro-section">
        <div className="container-alt">
          <div className="inner-section">
            <div className="intro-text-area">
              <h2 className="title-primary">
                En quÉ trabajan
                <span className="title-secondary">nuestros colivers</span>
              </h2>
              <h4 className="dsc">
                Donec nisl magna, blandit nec mauris sed, aliquam aliquam eros.
                Proin et metus consequat, facilisis nisi et, tincidunt ante.
                Integer interdum euismod mollis.
                <span className="dsc">
                  Phasellus viverra vitae magna at accumsan. Nam eu ante
                  sodales, malesuada felis sed, ullamcorper orci. Vestibulum
                  placerat quis erat ultricies fermentum. Suspendisse nibh
                  turpis, sagittis feugiat lacus feugiat, sodales dapibus lorem.
                  Praesent viverra luctus neque dictum scelerisque.
                </span>
              </h4>
            </div>
            <div className="intro-figure">
              <img src={IntroImg} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* colivers activity end */}

      {/* colivers family favorite food start */}
      <section className="colivers-fav-food">
        <div className="container">
          <h2 className="title-primary">
            ¿Cuál es la comida favorita
            <span className="title-secondary">
              de nuestra familia colivers?
            </span>
          </h2>
          <div className="inner-content">
            <div className="figure-area">
              <img src={FavFoodImg} alt="" />
            </div>
            <h4 className="dsc">
              Fusce ultricies lectus turpis, eu dictum sem dictum vitae. Duis eu
              ornare nulla. Nunc fringilla justo ut felis porta, a suscipit
              velit eleifend. Interdum et malesuada fames ac ante ipsum primis
              in faucibus. Vivamus lacinia turpis ullamcorper risus vehicula,
              lacinia eleifend nulla molestie.
              <span className="dsc">
                Mauris faucibus justo ac malesuada sollicitudin. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Vivamus congue sapien metus, a auctor lectus
                tempus et. Maecenas ultrices, lorem sed ultrices ullamcorper,
                tellus nisl pulvinar quam, pulvinar elementum erat risus in
                lectus.
              </span>
            </h4>
          </div>
        </div>
      </section>
      {/* colivers family favorite food end */}

      {/* colivers family fevorite sport start */}
      <section className="fav-sport">
        <div className="container-alt">
          <div className="fav-sport__title">
            <h2 className="title-primary">
              deporte favorito
              <span className="title-secondary">de nuestros colivers</span>
            </h2>
          </div>
          <div className="fav-sport__content">
            <h4 className="fav-sport__dsc dsc">
              Donec nisl magna, blandit nec mauris sed, aliquam aliquam eros.
              Proin et metus consequat, facilisis nisi et, tincidunt ante.
              Integer interdum euismod mollis, phasellus viverra vitae magna at
              accumsan. Nam eu ante sodales, malesuada felis sed, ullamcorper
              orci. Vestibulum placerat quis erat ultricies fermentum.
              Suspendisse nibnh.
              <span className="dsc">
                Maecenas ut lectus at mi pretium egestas ac hendrerit Leo.
                Curabitur pellentesque elit purus, tristique interdum odio
                tristique vel. Cras id rhoncus orci. Morbi finibus porta tortor
                id porttitor. Vestibulum aliquet et lacus sit amet sodales.
                Vivamus interdum tortor auctor mauris finibus maximus. Donec sed
                erat pretium, interdum sem sit amet, luctus lorem. In
                consectetur vitae quam eget hendrerit.
              </span>
            </h4>
            <div className="fav-sport__figure">
              <img src={FavSportImg} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* colivers family fevorite sport end */}

      {/* coliver family start */}
      <section className="colivers-family">
        <div className="container-alt">
          <div className="colivers-family__title">
            <h2 className="title-primary">
              Como se describe
              <span className="title-secondary"> nuestra familia colivers</span>
            </h2>
          </div>
          <div className="colivers-family__content grid-area">
            <div className="grid-item flex ">
              <div className="title">
                <h3 className="title__main">Tranquilos</h3>
                <h4 className="title__sub dsc">
                  Raesent pretium finibus interdum. Vestibulum iaculis justo
                  libero, faucibus blandit ante.
                </h4>
              </div>
              <div className="figure">
                <img src={ColiversImg01} alt="" />
              </div>
            </div>
            <div className="grid-item flex">
              <div className="title">
                <h3 className="title__main">optimistas</h3>
                <h4 className="title__sub dsc">
                  Proin auctor eleifend diam, in aliquam nisl iaculis eget.
                  Mauris eu leo dapibus, fringilla felis quis.
                </h4>
              </div>
              <div className="figure">
                <img src={ColiversImg02} alt="" />
              </div>
            </div>
            <div className="grid-item flex">
              <div className="title">
                <h3 className="title__main">Animalistas</h3>
                <h4 className="title__sub dsc">
                  Aliquam neque. Nullam eget ex vitae risus scelerisque
                  sollicitudin. Sed ullamcorper lorem.
                </h4>
              </div>
              <div className="figure">
                <img src={ColiversImg02} alt="" />
              </div>
            </div>
            <div className="grid-item flex">
              <div className="title">
                <h3 className="title__main">cultos</h3>
                <h4 className="title__sub dsc">
                  Rutrum, nulla erat dapibus erat, a ultrices sem orci eget
                  neque. Curabitur tincidunt felis.
                </h4>
              </div>
              <div className="figure">
                <img src={ColiversImg01} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* coliver family end */}
    </>
  );
}
export default ColiversHero;
