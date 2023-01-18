import Plant from "../../assets/plant04.webp";
import { ICON_G4, ICON_NAV_GROUP, ICON_STEII } from "../../utils/icons";
function OurPartners() {
  return (
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
                odio accumsan, quis aliquet quam tempus. Donec semper dolor eget
                tincidunt consectetur. Aliquam porttitor eros vitae ipsum
                posuere gravida. Donec sagittis vulputate sem, vel maximus nunc
                mollis id. Donec bibendum, ex vitae tempus semper, odio lectus
                vehicula mauris, ut sollicitudin nibh tortor sed ligula. Proin
                sagittis velit ac ultrices varius.
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
                per inceptos himenaeos. Ut cursus tincidunt velit nec bibendum.
                Nunc vel risus accumsan metus euismod tempus. Vestibulum
                sagittis enim vel blandit vestibulum. Donec mattis ornare quam,
                ac viverra metus facilisis ac. Nulla facilisi. Suspendisse
                potenti. Duis ultricies venenatis neque id pulvinar. Donec non
                fermentum mi. Donec mi nulla, luctus nec mattis et, tincidunt
                pharetra orci. Nam ligula justo, blandit non ornare in, dapibus
                a libero. Etiam commodo, nisi ultrices sollicitudin consectetur,
                nisi leo sodales dolor, nec sodales ipsum metus in purus.
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
                Aliquam in pharetra nisi. Sed vehicula massa non orci placerat,
                eget malesuada dui finibus. Vivamus mollis dui a mi dapibus, in
                suscipit ligula hendrerit. Pellentesque congue justo et mauris
                mollis, pellentesque luctus urna pharetra. Vivamus interdum
                mauris turpis, eu convallis purus semper sit amet. Ut a aliquam
                ligula. Duis fringilla tristique convallis. In ultricies metus
                eu turpis facilisis, ac sollicitudin dui mollis. Vivamus
                vehicula mattis ex, ac dictum tellus eleifend vel. Vestibulum
                non condimentum tortor, sit amet porttitor sem.
              </p>
              <a href="/" className="more-link">
                Conocer más
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OurPartners;
