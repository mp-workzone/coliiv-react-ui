import Img03 from "../../assets/Investment-strategy.webp";
import Img02 from "../../assets/market-potential.webp";
function MktPotentialNinvestment() {
  return (
    <section className="market-potential-n-Investment-strategy">
      <div className="container-alt">
        <div className="market-potential info-blog">
          <div className="inner-section">
            <div className="info-blog__figure">
              <img src={Img02} alt="" />
            </div>
            <div className="info-blog__text-area">
              <h2 className="title-primary">
                <span className="slice landscape"></span>
                Diseñamos para aprovechar
                <span className="title-secondary">
                  el potencial del mercado
                </span>
              </h2>
              <div className="dsc">
                Los bienes raíces en los que hemos invertido hasta ahora han
                sido elegidos estratégicamente para capitalizar las demandas
                generadas por las tendencias demográficas a largo plazo. Creemos
                que este enfoque en los activos reales en la economía real se
                refleja en los resultados que hemos logrado para nuestros
                inversionistas.
              </div>
            </div>
          </div>
        </div>
        <div className="investment-strategy info-blog">
          <div className="inner-section">
            <div className="info-blog__text-area">
              <h2 className="title-primary">
                eSTRATEGIAS
                <span className="title-secondary">DE INVERSIÓN</span>
              </h2>
              <div className="dsc">
                Con una combinación de estrategias, nuestro objetivo es ofrecer
                resultados consistentes y sólidos en función de las metas y el
                apetito por el riesgo de nuestros inversionistas.
                <span className="dsc">
                  Los bienes raíces tienen una reputación bien ganada por ser
                  una fuente confiable de ingresos pasivos. De hecho, el
                  componente de ingresos del NPI (el índice que rastrea el
                  desempeño de bienes raíces privados) ha promediado una tasa
                  más alta que los rendimientos de otras clases de activos
                  principales.
                </span>
              </div>
            </div>
            <div className="info-blog__figure">
              <img src={Img03} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default MktPotentialNinvestment;
