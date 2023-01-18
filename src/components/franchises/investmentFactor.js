import Img01 from "../../assets/InvestmentFactorImg.webp";
function InvestmentFactor() {
  return (
    <section className="investment-factor info-blog">
      <div className="container-alt">
        <div className="inner-section">
          <div className="info-blog__text-area">
            <h2 className="title-primary">
              <span className="slice portrait"></span>
              POR QUÉ <span className="title-secondary">Invertir</span>
            </h2>
            <h4 className="dsc">
              Como clase de activo, los bienes raíces históricamente han
              ofrecido una combinación de atractivos rendimientos ajustados al
              riesgo con mayores ingresos y estabilidad que las acciones que se
              cotizan en bolsa.
            </h4>
          </div>
          <div className="info-blog__figure shadow-right">
            <img src={Img01} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default InvestmentFactor;
