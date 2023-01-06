import { ICON_TICK_SIGN, ICON_SERVICE } from "../utils/icons";
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
                <span>{ICON_SERVICE}</span>
                All units w/ private bathrooms
              </td>
              <td>{ICON_TICK_SIGN}</td>
            </tr>
            <tr>
              <td>
                <span>{ICON_SERVICE}</span>
                All units w/ private bathrooms
              </td>
              <td>{ICON_TICK_SIGN}</td>
            </tr>
            <tr>
              <td>
                <span>{ICON_SERVICE}</span>
                All units w/ private bathrooms
              </td>
              <td>{ICON_TICK_SIGN}</td>
            </tr>
            <tr>
              <td>
                <span>{ICON_SERVICE}</span>
                All units w/ private bathrooms
              </td>
              <td>{ICON_TICK_SIGN}</td>
            </tr>
            <tr>
              <td>
                <span>{ICON_SERVICE}</span>
                All units w/ private bathrooms
              </td>
              <td>{ICON_TICK_SIGN}</td>
            </tr>
            <tr>
              <td>
                <span>{ICON_SERVICE}</span>
                All units w/ private bathrooms
              </td>
              <td>{ICON_TICK_SIGN}</td>
            </tr>
            <tr>
              <td>
                <span>{ICON_SERVICE}</span>
                All units w/ private bathrooms
              </td>
              <td>{ICON_TICK_SIGN}</td>
            </tr>
            <tr>
              <td>
                <span>{ICON_SERVICE}</span>
                All units w/ private bathrooms
              </td>
              <td>{ICON_TICK_SIGN}</td>
            </tr>
            <tr>
              <td>
                <span>{ICON_SERVICE}</span>
                All units w/ private bathrooms
              </td>
              <td>{ICON_TICK_SIGN}</td>
            </tr>
            <tr>
              <td>
                <span>{ICON_SERVICE}</span>
                All units w/ private bathrooms
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
