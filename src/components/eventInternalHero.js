import HeroImg from "../assets/hero-img.webp";
import { ICON_BACK } from "../utils/icons";
function EventInternalHero() {
  return (
    <section className="event-internal-hero">
      <div className="inner-wrapper">
        <a href="/" className="back-link">
          <span>{ICON_BACK}</span>
          Volver a los eventos
        </a>
        <h2 className="title-secondary">ADICOM COLOMBIA</h2>
        <h5 className="subtitle">Tecnología </h5>
        <div className="event-internal-hero__img">
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </section>
  );
}
export default EventInternalHero;
