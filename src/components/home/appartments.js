import Appartment01 from "../../assets/appartment01.webp";
import Appartment02 from "../../assets/appartment02.webp";
import Appartment03 from "../../assets/appartment03.webp";
import Appartment04 from "../../assets/appartment04.webp";
import Leaf from "../../assets/leaf02.webp";
import { ICON_SEE_MORE } from "../../utils/icons";

function Appartments() {
  return (
    <section className="home-appartments">
      <div className="leaf">
        <img src={Leaf} alt="" />
      </div>
      <div className="container-alt">
        <div className="appartments-content">
          <h2 className="title-primary">
            <span className="slice landscape"></span>
            UNA MEZCLA PERFECTA
            <span className="title-secondary">
              SOFISTICADO Y LO CONTEMPORáNEO
            </span>
          </h2>
          <h4 className="dsc appartments__dsc">
            En Coliiv tenemos cuatro tipos de espacios que puedes habitar y
            disfrutar.
          </h4>

          <a href="/" className="more-link">
            VER TODOS
          </a>
        </div>
        <div className="appartment-wrapper">
          <div className="left-shadow02 appartment ">
            <div className="appartment__img">
              <img src={Appartment01} alt="" />
            </div>
            <h3 className="appartment__title-primary">
              Studio
              <span className="appartment__title-secondary">loft</span>
            </h3>
            <a href="/apartments/stdio-loft" className="see-more">
              {ICON_SEE_MORE}
            </a>
          </div>
          <div className="left-shadow appartment ">
            <div className="appartment__img">
              <img src={Appartment02} alt="" />
            </div>
            <h3 className="appartment__title-primary">
              Apartamento
              <span className="appartment__title-secondary">1h - 1b</span>
            </h3>
            <a href="/apartments/1h-1b" className="see-more">
              {ICON_SEE_MORE}
            </a>
          </div>
          <div className=" right-shadow appartment">
            <div className="appartment__img">
              <img src={Appartment03} alt="" />
            </div>
            <h3 className="appartment__title-primary">
              Apartamento
              <span className="appartment__title-secondary">2h - 2b</span>
            </h3>
            <a href="/apartments/2h-2b" className="see-more">
              {ICON_SEE_MORE}
            </a>
          </div>
          <div className="right-shadow02 appartment ">
            <div className="appartment__img">
              <img src={Appartment04} alt="" />
            </div>
            <h3 className="appartment__title-primary">
              Apartamento
              <span className="appartment__title-secondary break-off">
                2h - 2b plus
              </span>
            </h3>
            <a href="/apartments/2h-2b-plus" className="see-more">
              {ICON_SEE_MORE}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Appartments;
