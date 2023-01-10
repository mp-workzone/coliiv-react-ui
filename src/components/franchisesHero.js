import {
  ICON_FACILITY01,
  ICON_FACILITY02,
  ICON_FACILITY03,
} from "../utils/icons";
import Img01 from "../assets/InvestmentFactorImg.jpg";
import Img02 from "../assets/market-potential.jpg";
import Img03 from "../assets/Investment-strategy.jpg";
import ExploreProject01 from "../assets/explore-project01.jpg";
import ExploreProject02 from "../assets/explore-project02.jpg";
import ExploreProject03 from "../assets/explore-project03.jpg";
import ExploreProject04 from "../assets/explore-project04.jpg";
function FranchisesHero() {
  return (
    <>
      <section className="franchises-hero">
        <h1 className="franchises-hero__title">franquicias</h1>
      </section>

      {/* investment factor start*/}
      <section className="investment-factor">
        <div className="container-alt">
          <div className="investment-factor__content">
            <div className="text-area">
              <h2 className="title-primary">
                POR QUÉ <span className="title-secondary">Invertir</span>
              </h2>
              <h4 className="content-dsc dsc">
                Como clase de activo, los bienes raíces históricamente han
                ofrecido una combinación de atractivos rendimientos ajustados al
                riesgo con mayores ingresos y estabilidad que las acciones que
                se cotizan en bolsa.
              </h4>
            </div>
            <div className="investment-factor__figure">
              <img src={Img01} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* investment factor end*/}

      {/* investment facilities start */}
      <section className="investment-facilities">
        <div className="container-alt">
          <div className="investment-facilities__title">
            <h2 className="title-primary">
              beneficios de invertir
              <span className="title-secondary">en bienes raices</span>
            </h2>
          </div>
          <div className="investment-facilities__content">
            <div className="facility">
              <div className="facility-icon">{ICON_FACILITY01}</div>
              <h4 className="facility-title">ingresos</h4>
              <h4 className="facility-dsc dsc">
                Año tras año, el sector inmobiliario ha demostrado su capacidad
                para ofrecer flujos de ingresos superiores a los inversionistas.
              </h4>
            </div>
            <div className="facility">
              <div className="facility-icon">{ICON_FACILITY02}</div>
              <h4 className="facility-title">estabilidad</h4>
              <h4 className="facility-dsc dsc">
                Mientras que otros tipos de inversiones zigzaguean, los bienes
                raíces tienen la reputación de mantenerse estables.
              </h4>
            </div>
            <div className="facility">
              <div className="facility-icon">{ICON_FACILITY03}</div>
              <h4 className="facility-title">rentabilidad ajusta AL RIESGO</h4>
              <h4 className="facility-dsc dsc">
                Los bienes raíces privados generalmente mitigan el riesgo al
                mismo tiempo que priorizan los rendimientos atractivos.
              </h4>
            </div>
          </div>
        </div>
      </section>
      {/* investment facilities end */}

      {/* market potential & Investment strategy start */}
      <section className="market-potential-n-Investment-strategy">
        <div className="container-alt">
          <div className="market-potential">
            <div className="inner-section">
              <div className="market-potential__figure">
                <img src={Img02} alt="" />
              </div>
              <div className="market-potential__text">
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
                  generadas por las tendencias demográficas a largo plazo.
                  Creemos que este enfoque en los activos reales en la economía
                  real se refleja en los resultados que hemos logrado para
                  nuestros inversionistas.
                </div>
              </div>
            </div>
          </div>
          <div className="investment-strategy">
            <div className="inner-section">
              <div className="investment-strategy__text">
                <h2 className="title-primary">
                  eSTRATEGIAS
                  <span className="title-secondary">DE INVERSIÓN</span>
                </h2>
                <div className="dsc">
                  Con una combinación de estrategias, nuestro objetivo es
                  ofrecer resultados consistentes y sólidos en función de las
                  metas y el apetito por el riesgo de nuestros inversionistas.
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
              <div className="investment-strategy__figure">
                <img src={Img03} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* market potential end */}

      {/* EXPLORE PROJECTS start */}
      <section className="explore-project">
        <div className="container">
          <div className="explore-project__title">
            <div className="container-alt">
              <h2 className="title-primary">
                EXPLORA NUESTROS
                <span className="title-secondary">PROYECTOS</span>
              </h2>
            </div>
            <div className="grid-area">
              <div className="project">
                <div className="project__img">
                  <img src={ExploreProject01} alt="" />
                </div>
                <div className="project__title">
                  <h3 className="project__title__main">
                    TAU<span className="project__title__sub">HOUSE</span>
                  </h3>
                </div>
              </div>
              <div className="project">
                <div className="project__img">
                  <img src={ExploreProject02} alt="" />
                </div>
                <div className="project__title">
                  <h3 className="project__title__main">
                    TAU<span className="project__title__sub">HOUSE</span>
                  </h3>
                </div>
              </div>
              <div className="project">
                <div className="project__img">
                  <img src={ExploreProject03} alt="" />
                </div>
                <div className="project__title">
                  <h3 className="project__title__main">
                    TAU<span className="project__title__sub">HOUSE</span>
                  </h3>
                </div>
              </div>
              <div className="project">
                <div className="project__img">
                  <img src={ExploreProject04} alt="" />
                </div>
                <div className="project__title">
                  <h3 className="project__title__main">
                    TAU<span className="project__title__sub">HOUSE</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* EXPLORE PROJECTS end */}
    </>
  );
}
export default FranchisesHero;
