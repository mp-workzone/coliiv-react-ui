import Img from "../assets/event-list-img01.jpg";
import { ICON_CALENDAR } from "../utils/icons";
function UpCommingEvents() {
  return (
    <section className="up-comming-events">
      <div className="container-alt">
        <div className="up-comming-header">
          <div className="title-area">
            <h2 className="title-primary">
              próximos<span className="title-secondary">eventos</span>
            </h2>
          </div>
          <div className="see-calendar">
            <div className="calendar-icon">{ICON_CALENDAR}</div>
            <p className="text">Ver calendario</p>
          </div>
        </div>
        <div className="event-list">
          <div className="event">
            <div className="event__figure">
              <img src={Img} alt="" />
            </div>
            <div className="event__details">
              <div className="title">
                <h6 className="title__sub">Tecnología </h6>
                <h4 className="title__main">ADICOM COLOMBIA</h4>
              </div>
              <p className="event__dsc">
                Nam in bibendum diam, at rutrum neque. Donec bibendum sem quis
                odio accumsan, quis aliquet quam tempus. Donec semper dolor eget
                tincidunt consectetur. Aliquam porttitor eros vitae ipsum
                posuere gravida.
              </p>
              <h6 className="event__location">Medellín, Colombia </h6>
            </div>
            <div className="update-time">
              <h3 className="update-time__no">15</h3>
              <h6 className="update-time__text">Ago</h6>
            </div>
          </div>
          <div className="event">
            <div className="event__figure">
              <img src={Img} alt="" />
            </div>
            <div className="event__details">
              <div className="title">
                <h6 className="title__sub">Tecnología </h6>
                <h4 className="title__main">ADICOM COLOMBIA</h4>
              </div>
              <p className="event__dsc">
                Nam in bibendum diam, at rutrum neque. Donec bibendum sem quis
                odio accumsan, quis aliquet quam tempus. Donec semper dolor eget
                tincidunt consectetur. Aliquam porttitor eros vitae ipsum
                posuere gravida.
              </p>
              <h6 className="event__location">Medellín, Colombia </h6>
            </div>
            <div className="update-time">
              <h3 className="update-time__no">15</h3>
              <h6 className="update-time__text">Ago</h6>
            </div>
          </div>
          <div className="event">
            <div className="event__figure">
              <img src={Img} alt="" />
            </div>
            <div className="event__details">
              <div className="title">
                <h6 className="title__sub">Tecnología </h6>
                <h4 className="title__main">ADICOM COLOMBIA</h4>
              </div>
              <p className="event__dsc">
                Nam in bibendum diam, at rutrum neque. Donec bibendum sem quis
                odio accumsan, quis aliquet quam tempus. Donec semper dolor eget
                tincidunt consectetur. Aliquam porttitor eros vitae ipsum
                posuere gravida.
              </p>
              <h6 className="event__location">Medellín, Colombia </h6>
            </div>
            <div className="update-time">
              <h3 className="update-time__no">15</h3>
              <h6 className="update-time__text">Ago</h6>
            </div>
          </div>
          <div className="event">
            <div className="event__figure">
              <img src={Img} alt="" />
            </div>
            <div className="event__details">
              <div className="title">
                <h6 className="title__sub">Tecnología </h6>
                <h4 className="title__main">ADICOM COLOMBIA</h4>
              </div>
              <p className="event__dsc">
                Nam in bibendum diam, at rutrum neque. Donec bibendum sem quis
                odio accumsan, quis aliquet quam tempus. Donec semper dolor eget
                tincidunt consectetur. Aliquam porttitor eros vitae ipsum
                posuere gravida.
              </p>
              <h6 className="event__location">Medellín, Colombia </h6>
            </div>
            <div className="update-time">
              <h3 className="update-time__no">15</h3>
              <h6 className="update-time__text">Ago</h6>
            </div>
          </div>
          <div className="event">
            <div className="event__figure">
              <img src={Img} alt="" />
            </div>
            <div className="event__details">
              <div className="title">
                <h6 className="title__sub">Tecnología </h6>
                <h4 className="title__main">ADICOM COLOMBIA</h4>
              </div>
              <p className="event__dsc">
                Nam in bibendum diam, at rutrum neque. Donec bibendum sem quis
                odio accumsan, quis aliquet quam tempus. Donec semper dolor eget
                tincidunt consectetur. Aliquam porttitor eros vitae ipsum
                posuere gravida.
              </p>
              <h6 className="event__location">Medellín, Colombia </h6>
            </div>
            <div className="update-time">
              <h3 className="update-time__no">15</h3>
              <h6 className="update-time__text">Ago</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default UpCommingEvents;
