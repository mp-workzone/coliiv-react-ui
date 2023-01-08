import Leaf from "../assets/leaf02.png";
import Appartment01 from "../assets/appartment01.jpg";
import Appartment02 from "../assets/appartment02.jpg";
import Appartment03 from "../assets/appartment03.jpg";
import Appartment04 from "../assets/appartment04.jpg";
import { ICON_SEE_MORE } from "../utils/icons";
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
        <div class="appartment-wrapper">
          <div class="left-shadow02 appartment ">
            <div class="appartment__img">
              <img src={Appartment01} alt="" />
            </div>
            <h3 class="appartment__title-primary">
              Studio<span class="appartment__title-secondary">loft</span>
            </h3>
            <a href="/" className="see-more">
              {ICON_SEE_MORE}
            </a>
          </div>
          <div class="left-shadow appartment ">
            <div class="appartment__img">
              <img src={Appartment02} alt="" />
            </div>
            <h3 class="appartment__title-primary">
              Apartamento
              <span class="appartment__title-secondary">1h - 1b</span>
            </h3>
            <a href="/" className="see-more">
              {ICON_SEE_MORE}
            </a>
          </div>
          <div class=" right-shadow appartment">
            <div class="appartment__img">
              <img src={Appartment03} alt="" />
            </div>
            <h3 class="appartment__title-primary">
              Apartamento
              <span class="appartment__title-secondary">2h - 2b</span>
            </h3>
            <a href="/" className="see-more">
              {ICON_SEE_MORE}
            </a>
          </div>
          <div class="right-shadow02 appartment ">
            <div class="appartment__img">
              <img src={Appartment04} alt="" />
            </div>
            <h3 class="appartment__title-primary">
              Apartamento
              <span class="appartment__title-secondary break-off">
                2h - 2b plus
              </span>
            </h3>
            <a href="/" className="see-more">
              {ICON_SEE_MORE}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Appartments;
