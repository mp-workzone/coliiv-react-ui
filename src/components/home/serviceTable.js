import Leaf from "../../assets/leaf01.webp";
import {
  ICON_SERVICE,
  ICON_SERVICE02,
  ICON_SERVICE03,
  ICON_SERVICE04,
  ICON_SERVICE05,
  ICON_SERVICE06,
  ICON_SERVICE07,
  ICON_SERVICE08,
  ICON_SERVICE09,
  ICON_SERVICE10,
  ICON_TICK_SIGN,
} from "../../utils/icons";
function ServiceTable() {
  return (
    <section className="service-table">
      <div className="leaf">
        <img src={Leaf} alt="" />
      </div>
      <div className="container-alt">
        <div className="service-table__title">
          <h2 className="title-primary">
            Servicios
            <span className="title-secondary">Disponibles</span>
          </h2>
        </div>
        <div className="service-table__content">
          <div className="table-title">
            <ul>
              <li className="left">Servicios coliving</li>
              <li className="right">disponibilidad</li>
            </ul>
          </div>
          <ul className="table-body">
            <li>
              <div className="left-side">
                <span className="space-X">{ICON_SERVICE}</span>
                <h4>All units w/ private bathrooms</h4>
              </div>
              <span className="check-mark">{ICON_TICK_SIGN}</span>
            </li>
            <li>
              <div className="left-side">
                <span className="space-X">{ICON_SERVICE02}</span>
                <h4>Private kitchen in each unit</h4>
              </div>
              <span className="check-mark">{ICON_TICK_SIGN}</span>
            </li>
            <li>
              <div className="left-side">
                <span className="space-X">{ICON_SERVICE03}</span>
                <h4>Apartments w/ balcony - terrace</h4>
              </div>
              <span className="check-mark">{ICON_TICK_SIGN}</span>
            </li>
            <li>
              <div className="left-side">
                <span className="space-X">{ICON_SERVICE04}</span>
                <h4>In-unit private washer and dryer</h4>
              </div>
              <span className="check-mark">{ICON_TICK_SIGN}</span>
            </li>
            <li>
              <div className="left-side">
                <span className="space-X">{ICON_SERVICE05}</span>
                <h4>
                  Housekeeping
                  <span className="space-left">(Included in rent)</span>
                </h4>
              </div>
              <span className="check-mark">{ICON_TICK_SIGN}</span>
            </li>
            <li>
              <div className="left-side">
                <span className="space-X">{ICON_SERVICE06}</span>
                <h4>Fully high-end furnished units</h4>
              </div>
              <span className="check-mark">{ICON_TICK_SIGN}</span>
            </li>
            <li>
              <div className="left-side">
                <span className="space-X">{ICON_SERVICE07}</span>
                <h4>Air conditioning</h4>
              </div>
              <span className="check-mark">{ICON_TICK_SIGN}</span>
            </li>
            <li>
              <div className="left-side">
                <span className="space-X">{ICON_SERVICE08}</span>
                <h4>Cable TV - Amazon fire - Apple tv</h4>
              </div>
              <span className="check-mark">{ICON_TICK_SIGN}</span>
            </li>
            <li>
              <div className="left-side">
                <span className="space-X">{ICON_SERVICE09}</span>
                <h4>
                  In-unit dedicated pro workspace
                  <span className="space-left">(Smart - office)</span>
                </h4>{" "}
              </div>
              <span className="check-mark">{ICON_TICK_SIGN}</span>
            </li>
            <li>
              <div className="left-side">
                <span className="space-X">{ICON_SERVICE10}</span>
                <h4>Fast WiFi</h4>
              </div>
              <span className="check-mark">{ICON_TICK_SIGN}</span>
            </li>
            <li>
              <div className="left-side">
                <span className="space-X">{ICON_SERVICE}</span>
                <h4>All units w/ private bathrooms</h4>
              </div>
              <span className="check-mark">{ICON_TICK_SIGN}</span>
            </li>
            <li>
              <div className="left-side">
                <span className="space-X">{ICON_SERVICE02}</span>
                <h4>Private kitchen in each unit</h4>
              </div>
              <span className="check-mark">{ICON_TICK_SIGN}</span>
            </li>
            <li>
              <div className="left-side">
                <span className="space-X">{ICON_SERVICE03}</span>
                <h4>Apartments w/ balcony - terrace</h4>
              </div>
              <span className="check-mark">{ICON_TICK_SIGN}</span>
            </li>
            <li>
              <div className="left-side">
                <span className="space-X">{ICON_SERVICE04}</span>
                <h4>In-unit private washer and dryer</h4>
              </div>
              <span className="check-mark">{ICON_TICK_SIGN}</span>
            </li>
            <li>
              <div className="left-side">
                <span className="space-X">{ICON_SERVICE06}</span>
                <h4>Fully high-end furnished units</h4>
              </div>
              <span className="check-mark">{ICON_TICK_SIGN}</span>
            </li>
            <li>
              <div className="left-side">
                <span className="space-X">{ICON_SERVICE07}</span>
                <h4>Air conditioning</h4>
              </div>
              <span className="check-mark">{ICON_TICK_SIGN}</span>
            </li>
            <li>
              <div className="left-side">
                <span className="space-X">{ICON_SERVICE08}</span>
                <h4>Cable TV - Amazon fire - Apple tv</h4>
              </div>
              <span className="check-mark">{ICON_TICK_SIGN}</span>
            </li>
            <li>
              <div className="left-side">
                <span className="space-X">{ICON_SERVICE10}</span>
                <h4>Fast WiFi</h4>
              </div>
              <span className="check-mark">{ICON_TICK_SIGN}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ServiceTable;
