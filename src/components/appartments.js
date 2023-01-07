import Leaf from "../assets/leaf02.png";
import Appartment from "../assets/appartment01.jpg";
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
            UNA MEZCLA PERFECTA ENTRE LO
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
              <img src={Appartment} alt="" />
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
              <img src={Appartment} alt="" />
            </div>
            <h3 class="appartment__title-primary">
              Studio<span class="appartment__title-secondary">loft</span>
            </h3>
            <a href="/" className="see-more">
              {ICON_SEE_MORE}
            </a>
          </div>
          <div class=" right-shadow appartment">
            <div class="appartment__img">
              <img src={Appartment} alt="" />
            </div>
            <h3 class="appartment__title-primary">
              Studio<span class="appartment__title-secondary">loft</span>
            </h3>
            <a href="/" className="see-more">
              {ICON_SEE_MORE}
            </a>
          </div>
          <div class="right-shadow02 appartment ">
            <div class="appartment__img">
              <img src={Appartment} alt="" />
            </div>
            <h3 class="appartment__title-primary">
              Studio<span class="appartment__title-secondary">loft</span>
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
