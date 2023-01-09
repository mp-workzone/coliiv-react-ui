import GuestImg from "../assets/guest-img.jpg";
import Plant from "../assets/plant01.png";
function EventGuests() {
  return (
    <section className="event-guests-area">
      <div className="plant">
        <img src={Plant} alt="" />
      </div>
      <div className="inner-wrapper">
        <h2 className="title-primary">INVITADOS</h2>
        <div className="guest">
          <div className="guest-img">
            <img src={GuestImg} alt="" />
          </div>
          <div className="about-guest">
            <h3 className="guest-name">Magnus Nielsen</h3>
            <h4 className="guest-profession">Ceo de Alphabet</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
export default EventGuests;
