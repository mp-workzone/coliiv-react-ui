import {
  ICON_TICK_SIGN,
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
} from "../utils/icons";
import Leaf from "../assets/leaf01.png";
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
        <table className="service-table__content">
          <thead className="table-title">
            <tr>
              <th>Servicios coliving</th>
              <th>disponibilidad</th>
            </tr>
          </thead>
          <tbody className="table-body">
            <tr>
              <td>
                <span className="space-X">{ICON_SERVICE}</span>
                All units w/ private bathrooms
              </td>
              <td>{ICON_TICK_SIGN}</td>
            </tr>
            <tr>
              <td>
                <span className="space-X">{ICON_SERVICE02}</span>
                Private kitchen in each unit
              </td>
              <td>{ICON_TICK_SIGN}</td>
            </tr>
            <tr>
              <td>
                <span className="space-X">{ICON_SERVICE03}</span>
                Apartments w/ balcony - terrace
              </td>
              <td>{ICON_TICK_SIGN}</td>
            </tr>
            <tr>
              <td>
                <span className="space-X">{ICON_SERVICE04}</span>
                In-unit private washer and dryer
              </td>
              <td>{ICON_TICK_SIGN}</td>
            </tr>
            <tr>
              <td>
                <span className="space-X">{ICON_SERVICE05}</span>
                Housekeeping{" "}
                <span className="space-left">(Included in rent)</span>
              </td>
              <td>{ICON_TICK_SIGN}</td>
            </tr>
            <tr>
              <td>
                <span className="space-X">{ICON_SERVICE06}</span>
                Fully high-end furnished units
              </td>
              <td>{ICON_TICK_SIGN}</td>
            </tr>
            <tr>
              <td>
                <span className="space-X">{ICON_SERVICE07}</span>
                Air conditioning
              </td>
              <td>{ICON_TICK_SIGN}</td>
            </tr>
            <tr>
              <td>
                <span className="space-X">{ICON_SERVICE08}</span>
                Cable TV - Amazon fire - Apple tv
              </td>
              <td>{ICON_TICK_SIGN}</td>
            </tr>
            <tr>
              <td>
                <span className="space-X">{ICON_SERVICE09}</span>
                In-unit dedicated pro workspace{" "}
                <span className="space-left">(Smart - office)</span>
              </td>
              <td>{ICON_TICK_SIGN}</td>
            </tr>
            <tr>
              <td>
                <span className="space-X">{ICON_SERVICE10}</span>
                Fast WiFi
              </td>
              <td>{ICON_TICK_SIGN}</td>
            </tr>
            <tr>
              <td>
                <span className="space-X">{ICON_SERVICE}</span>
                All units w/ private bathrooms
              </td>
              <td>{ICON_TICK_SIGN}</td>
            </tr>
            <tr>
              <td>
                <span className="space-X">{ICON_SERVICE02}</span>
                Private kitchen in each unit
              </td>
              <td>{ICON_TICK_SIGN}</td>
            </tr>
            <tr>
              <td>
                <span className="space-X">{ICON_SERVICE03}</span>
                Apartments w/ balcony - terrace
              </td>
              <td>{ICON_TICK_SIGN}</td>
            </tr>
            <tr>
              <td>
                <span className="space-X">{ICON_SERVICE04}</span>
                In-unit private washer and dryer
              </td>
              <td>{ICON_TICK_SIGN}</td>
            </tr>
            <tr>
              <td>
                <span className="space-X">{ICON_SERVICE05}</span>
                Housekeeping{" "}
                <span className="space-left">(Included in rent)</span>
              </td>
              <td>{ICON_TICK_SIGN}</td>
            </tr>
            <tr>
              <td>
                <span className="space-X">{ICON_SERVICE06}</span>
                Fully high-end furnished units
              </td>
              <td>{ICON_TICK_SIGN}</td>
            </tr>
            <tr>
              <td>
                <span className="space-X">{ICON_SERVICE07}</span>
                Air conditioning
              </td>
              <td>{ICON_TICK_SIGN}</td>
            </tr>
            <tr>
              <td>
                <span className="space-X">{ICON_SERVICE08}</span>
                Cable TV - Amazon fire - Apple tv
              </td>
              <td>{ICON_TICK_SIGN}</td>
            </tr>
            <tr>
              <td>
                <span className="space-X">{ICON_SERVICE09}</span>
                In-unit dedicated pro workspace{" "}
                <span className="space-left">(Smart - office)</span>
              </td>
              <td>{ICON_TICK_SIGN}</td>
            </tr>
            <tr>
              <td>
                <span className="space-X">{ICON_SERVICE10}</span>
                Fast WiFi
              </td>
              <td>{ICON_TICK_SIGN}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ServiceTable;
