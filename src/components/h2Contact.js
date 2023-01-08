import plantNcircle from "../assets/plantNcircle.png";
import VideoImg from "../assets/video.jpg";
import {
  ICON_PUBLIC,
  ICON_MESSAGE,
  ICON_BUBBLE_CHART,
  ICON_PLAY,
} from "../utils/icons.js";
function H2Contact() {
  return (
    <section className="h2-contact">
      <div className="plant-n-circle">
        <img src={plantNcircle} alt="" />
      </div>
      <div className="container-alt">
        <h2 className="title-primary">
          Ven y conoce nuestra
          <span className="title-secondary">familia co-living</span>
        </h2>
        <h4 className="dsc h2-contact__dsc">
          Generamos una comunidad, somos Colivers no vecinos. Promovemos el
          respeto por los Colivers, el entorno y la naturaleza.
        </h4>
        <a href="/" className="more-link">
          CONOCER
        </a>
        <div className="h2-contact__main-content">
          <div className="h2-contact__process">
            <div className="process-item">
              <div className="icon">{ICON_PUBLIC}</div>
              <h3 className="process-item__title">Comunidad</h3>
              <h4 className="dsc">El alma de la convivencia.</h4>
            </div>
            <div className="process-item negative-space">
              <div className="icon">{ICON_MESSAGE}</div>
              <h3 className="process-item__title">Diálogo</h3>
              <h4 className="dsc">
                Comunicación entre los residentes de nuestra comunidad.
              </h4>
            </div>
            <div className="process-item">
              <span className="slice portrait"></span>
              <div className="icon">{ICON_BUBBLE_CHART}</div>
              <h3 className="process-item__title">Dinamismo</h3>
              <h4 className="dsc">Actividades especiales para cada huésped.</h4>
            </div>
          </div>
          <div className="h2-contact__video">
            <img src={VideoImg} alt="" />
            <a href="/" className="play-icon">
              {ICON_PLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default H2Contact;
