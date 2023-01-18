import {
  ICON_FACILITY01,
  ICON_FACILITY02,
  ICON_FACILITY03,
} from "../../utils/icons";
import Leaf from "../../assets/leaf05.webp";
function InvestmentFacilities() {
  return (
    <section className="investment-facilities">
      <div className="leaf">
        <img src={Leaf} alt="" />
      </div>
      <div className="container-alt">
        <div className="investment-facilities__title">
          <h2 className="title-primary">
            beneficios de invertir
            <span className="title-secondary">en bienes raices</span>
          </h2>
        </div>
        <div className="reverse-wrapper">
          <div className="reverse-item">
            <div className=" reverse-item__icon">{ICON_FACILITY01}</div>
            <h4 className="reverse-item__title">ingresos</h4>
            <h4 className="reverse-item__dsc dsc">
              Año tras año, el sector inmobiliario ha demostrado su capacidad
              para ofrecer flujos de ingresos superiores a los inversionistas.
            </h4>
          </div>
          <div className="facility reverse-item">
            <div className=" reverse-item__icon">{ICON_FACILITY02}</div>
            <h4 className="reverse-item__title">estabilidad</h4>
            <h4 className="reverse-item__dsc dsc">
              Mientras que otros tipos de inversiones zigzaguean, los bienes
              raíces tienen la reputación de mantenerse estables.
            </h4>
          </div>
          <div className="facility reverse-item">
            <div className=" reverse-item__icon">{ICON_FACILITY03}</div>
            <h4 className="reverse-item__title">
              rentabilidad ajusta AL RIESGO
            </h4>
            <h4 className="reverse-item__dsc dsc">
              Los bienes raíces privados generalmente mitigan el riesgo al mismo
              tiempo que priorizan los rendimientos atractivos.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
export default InvestmentFacilities;
