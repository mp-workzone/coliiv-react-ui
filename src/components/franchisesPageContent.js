import ExploreProject01 from "../assets/explore-project01.jpg";
import ExploreProject02 from "../assets/explore-project02.jpg";
import ExploreProject03 from "../assets/explore-project03.jpg";
import ExploreProject04 from "../assets/explore-project04.jpg";
import FranchisesHeroImg from "../assets/franchisesHero-img.jpg";
import Img03 from "../assets/Investment-strategy.jpg";
import Img01 from "../assets/InvestmentFactorImg.jpg";
import Leaf from "../assets/leaf05.png";
import Img02 from "../assets/market-potential.jpg";
import Plant from "../assets/plant04.png";
import {
  ICON_FACILITY01,
  ICON_FACILITY02,
  ICON_FACILITY03, ICON_G4, ICON_NAV_GROUP, ICON_STEII
} from "../utils/icons";
function FranchisesPageContent() {
  return (
    <>
      <section className="franchises-hero hero">
        <div className="hero__img">
          <img src={FranchisesHeroImg} alt="" />
        </div>
        <h1 className="hero__title hero-title">franquicias</h1>
      </section>

      {/* investment factor start*/}
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
                riesgo con mayores ingresos y estabilidad que las acciones que
                se cotizan en bolsa.
              </h4>
            </div>
            <div className="info-blog__figure shadow-right">
              <img src={Img01} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* investment factor end*/}

      {/* investment facilities start */}
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
                  generadas por las tendencias demográficas a largo plazo.
                  Creemos que este enfoque en los activos reales en la economía
                  real se refleja en los resultados que hemos logrado para
                  nuestros inversionistas.
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
              <div className="info-blog__figure">
                <img src={Img03} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* market potential & Investment strategy end */}

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
              <a href="/" className="project">
                <div className="project__img">
                  <img src={ExploreProject01} alt="" />
                </div>
                <div className="project__title">
                  <h3 className="project__title__main">
                    TAU<span className="project__title__sub">HOUSE</span>
                  </h3>
                </div>
              </a>
              <a href="/" className="project">
                <div className="project__img">
                  <img src={ExploreProject02} alt="" />
                </div>
                <div className="project__title">
                  <h3 className="project__title__main">BELIIV</h3>
                </div>
              </a>
              <a href="/" className="project">
                <div className="project__img">
                  <img src={ExploreProject03} alt="" />
                </div>
                <div className="project__title">
                  <h3 className="project__title__main">WAKE</h3>
                </div>
              </a>
              <a href="/" className="project">
                <div className="project__img">
                  <img src={ExploreProject04} alt="" />
                </div>
                <div className="project__title">
                  <h3 className="project__title__main">WAKE II</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* EXPLORE PROJECTS end */}

      {/* our partners start */}
      <section className="our-partners-area">
        <div className="plant">
          <img src={Plant} alt="" />
        </div>
        <div className="container-alt">
          <div className="our-partners-title">
            <h2 className="title-primary">
              Nuestros<span className="title-secondary">socios</span>
            </h2>
          </div>
          <div className="our-partners-tabs">
            <div className="tab">
              <a href="/" className="tab-title active">
                Inmobilario
              </a>
            </div>
            <div className="tab">
              <a href="/" className="tab-title">
                Arquitectura
              </a>
            </div>
            <div className="tab">
              <a href="/" className="tab-title">
                Interiorismo
              </a>
            </div>
            <div className="tab">
              <a href="/" className="tab-title">
                Fiduciario
              </a>
            </div>
          </div>
          <div className="our-partners">
            <div className="partner">
              <div className="partnar-logo">{ICON_STEII}</div>
              <div className="partner_details">
                <h4 className="brand-name">STEII</h4>
                <p className="partner-dsc">
                  Nam in bibendum diam, at rutrum neque. Donec bibendum sem quis
                  odio accumsan, quis aliquet quam tempus. Donec semper dolor
                  eget tincidunt consectetur. Aliquam porttitor eros vitae ipsum
                  posuere gravida. Donec sagittis vulputate sem, vel maximus
                  nunc mollis id. Donec bibendum, ex vitae tempus semper, odio
                  lectus vehicula mauris, ut sollicitudin nibh tortor sed
                  ligula. Proin sagittis velit ac ultrices varius.
                  <span className="partner-dsc">
                    Nullam ut risus varius, accumsan massa ac, mollis magna.
                    Aenean ullamcorper ex in justo finibus porta. Maecenas
                    scelerisque rhoncus neque, et blandit elit tempor eget.
                  </span>
                </p>
                <a href="/" className="more-link">
                  Conocer más
                </a>
              </div>
            </div>
            <div className="partner">
              <div className="partnar-logo">{ICON_NAV_GROUP}</div>
              <div className="partner_details">
                <h4 className="brand-name">NAV GROUP</h4>
                <p className="partner-dsc">
                  Mauris molestie sit amet arcu ut pellentesque. Mauris iaculis
                  mauris in mauris malesuada, vitae mattis nunc pulvinar. Class
                  aptent taciti sociosqu ad litora torquent per conubia nostra,
                  per inceptos himenaeos. Ut cursus tincidunt velit nec
                  bibendum. Nunc vel risus accumsan metus euismod tempus.
                  Vestibulum sagittis enim vel blandit vestibulum. Donec mattis
                  ornare quam, ac viverra metus facilisis ac. Nulla facilisi.
                  Suspendisse potenti. Duis ultricies venenatis neque id
                  pulvinar. Donec non fermentum mi. Donec mi nulla, luctus nec
                  mattis et, tincidunt pharetra orci. Nam ligula justo, blandit
                  non ornare in, dapibus a libero. Etiam commodo, nisi ultrices
                  sollicitudin consectetur, nisi leo sodales dolor, nec sodales
                  ipsum metus in purus.
                </p>
                <a href="/" className="more-link">
                  Conocer más
                </a>
              </div>
            </div>
            <div className="partner">
              <div className="partnar-logo">{ICON_G4}</div>
              <div className="partner_details">
                <h4 className="brand-name">G4 PROYECTOS INMBILARIOS</h4>
                <p className="partner-dsc">
                  Aliquam in pharetra nisi. Sed vehicula massa non orci
                  placerat, eget malesuada dui finibus. Vivamus mollis dui a mi
                  dapibus, in suscipit ligula hendrerit. Pellentesque congue
                  justo et mauris mollis, pellentesque luctus urna pharetra.
                  Vivamus interdum mauris turpis, eu convallis purus semper sit
                  amet. Ut a aliquam ligula. Duis fringilla tristique convallis.
                  In ultricies metus eu turpis facilisis, ac sollicitudin dui
                  mollis. Vivamus vehicula mattis ex, ac dictum tellus eleifend
                  vel. Vestibulum non condimentum tortor, sit amet porttitor
                  sem.
                </p>
                <a href="/" className="more-link">
                  Conocer más
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* our partners end */}
    </>
  );
}

export default FranchisesPageContent;
