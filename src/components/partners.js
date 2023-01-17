import Plant from "../assets/plant03.webp";
import {
  ICON_BLOOMBERG, ICON_FASTOMPANY,
  ICON_FORBES, ICON_INC, ICON_THENEWWORKTIMES,
  ICON_WSJ
} from "../utils/icons";

function Partners() {
  return (
    <section className="partners">
      <div className="plant">
        <img src={Plant} alt="" />
      </div>
      <div className="container">
        <div className="partner-list">
          <div className="partner-logo">{ICON_BLOOMBERG}</div>
          <div className="partner-logo">{ICON_INC}</div>
          <div className="partner-logo">{ICON_FASTOMPANY}</div>
          <div className="partner-logo">{ICON_FORBES}</div>
          <div className="partner-logo">{ICON_THENEWWORKTIMES}</div>
          <div className="partner-logo">{ICON_WSJ}</div>
        </div>
      </div>
    </section>
  );
}
export default Partners;
