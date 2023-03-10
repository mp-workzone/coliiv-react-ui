import Map from "../../assets/map.webp";
import { ICON_MORE } from "../../utils/icons";
function Location() {
  return (
    <section className="location">
      <div className="container-alt">
        <h2 className="location__title title-secondary">Ubicación</h2>
        <p className="address">
          Cra. 29 # 1 - XY
          <br /> Medellín Colombia <br /> www.coliiv.com
        </p>
        <div className="map">
          <img src={Map} alt="" />
        </div>
        <div className="btn-map">
          <a href="/" className="more-link">
            {ICON_MORE}
            <span>VER google maps</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Location;
