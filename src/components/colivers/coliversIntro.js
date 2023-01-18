import Plant from "../../assets/plant01-left.webp";
import {
  ICON_BUBBLE_CHART,
  ICON_MESSAGE,
  ICON_PUBLIC,
} from "../../utils/icons";
function ColiversIntro() {
  return (
    <section className="coliv-intro">
      <div className="plant">
        <img src={Plant} alt="" />
      </div>
      <div className="container-alt">
        <div className="coliv-intro__title">
          <h2 className="title-primary colivers-title-primary">
            una verdadera
            <span className="title-secondary colivers-title-secodary">
              familia CoLIiV
            </span>
          </h2>
        </div>
        <div className="coliv-intro__dsc dsc">
          Ut varius lorem id tincidunt ornare. Aenean dui nisl, rhoncus ut arcu
          eget, pharetra facilisis nulla. Nunc a elit vitae enim aliquam
          aliquet. Maecenas eleifend mi enim, vel elementum purus tristique sit
          amet. Quisque id velit id Leo gravida vulputate semper a neque. Mauris
          auctor ligula at ex consequat ullamcorper. Quisque ipsum nisl,
          dignissim quis tempor eu, vestibulum in felis. Suspendisse potenti.
          Sed quis diam nec sapien lobortis ornare.
        </div>

        <div className="reverse-wrapper ">
          <div className="reverse-item">
            <div className=" reverse-item__icon">{ICON_PUBLIC}</div>
            <h4 className="reverse-item__title">Comunidad</h4>
            <h4 className="reverse-item__dsc dsc">
              El alma de la <br /> convivencia.
            </h4>
          </div>
          <div className=" reverse-item">
            <div className=" reverse-item__icon">{ICON_MESSAGE}</div>
            <h4 className="reverse-item__title">Diálogo</h4>
            <h4 className="reverse-item__dsc dsc">
              Comunicación entre los <br /> residentes de nuestra <br />
              comunidad.
            </h4>
          </div>
          <div className=" reverse-item">
            <div className=" reverse-item__icon">{ICON_BUBBLE_CHART}</div>
            <h4 className="reverse-item__title">Dinamismo</h4>
            <h4 className="reverse-item__dsc dsc">
              Actividades especiales <br /> para cada huésped.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ColiversIntro;
