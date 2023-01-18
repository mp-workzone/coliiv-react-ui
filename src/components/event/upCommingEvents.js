import Img from "../../assets/event-list-img01.webp";
import Img02 from "../../assets/uc-event02.webp";
import Img03 from "../../assets/uc-event03.webp";
import Img04 from "../../assets/uc-event04.webp";
import Img05 from "../../assets/uc-event05.webp";
import { ICON_CALENDAR, ICON_LOCATION } from "../../utils/icons";
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
          <button className="see-calendar">
            <span className="calendar-icon">{ICON_CALENDAR}</span>
            <p className="text">Ver calendario</p>
          </button>
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
              <h6 className="event__location  title__sub">
                <span>{ICON_LOCATION}</span>
                Medellín, Colombia
              </h6>
            </div>
            <div className="update-time">
              <h3 className="update-time__no">30</h3>
              <h6 className="update-time__text">Jul</h6>
            </div>
          </div>
          <div className="event">
            <div className="event__figure">
              <img src={Img02} alt="" />
            </div>
            <div className="event__details">
              <div className="title">
                <h6 className="title__sub">Marketing </h6>
                <h4 className="title__main">Camtasia for Marketing</h4>
              </div>
              <p className="event__dsc">
                Nam in bibendum diam, at rutrum neque. Donec bibendum sem quis
                odio accumsan, quis aliquet quam tempus. Donec semper dolor eget
                tincidunt consectetur. Aliquam porttitor eros vitae ipsum
                posuere gravida.
              </p>
              <h6 className="event__location  title__sub">
                <span>{ICON_LOCATION}</span>
                Medellín, Colombia
              </h6>
            </div>
            <div className="update-time">
              <h3 className="update-time__no">11</h3>
              <h6 className="update-time__text">Ago</h6>
            </div>
          </div>
          <div className="event">
            <div className="event__figure">
              <img src={Img03} alt="" />
            </div>
            <div className="event__details">
              <div className="title">
                <h6 className="title__sub">Criptomonedas </h6>
                <h4 className="title__main">Cosmoverse</h4>
              </div>
              <p className="event__dsc">
                Nam in bibendum diam, at rutrum neque. Donec bibendum sem quis
                odio accumsan, quis aliquet quam tempus. Donec semper dolor eget
                tincidunt consectetur. Aliquam porttitor eros vitae ipsum
                posuere gravida.
              </p>
              <h6 className="event__location  title__sub">
                <span>{ICON_LOCATION}</span>
                Medellín, Colombia
              </h6>
            </div>
            <div className="update-time">
              <h3 className="update-time__no">15</h3>
              <h6 className="update-time__text">Ago</h6>
            </div>
          </div>
          <div className="event">
            <div className="event__figure">
              <img src={Img04} alt="" />
            </div>
            <div className="event__details">
              <div className="title">
                <h6 className="title__sub">Machine learning </h6>
                <h4 className="title__main">Artificial Inteligence</h4>
              </div>
              <p className="event__dsc">
                Nam in bibendum diam, at rutrum neque. Donec bibendum sem quis
                odio accumsan, quis aliquet quam tempus. Donec semper dolor eget
                tincidunt consectetur. Aliquam porttitor eros vitae ipsum
                posuere gravida.
              </p>
              <h6 className="event__location  title__sub">
                <span>{ICON_LOCATION}</span>
                Medellín, Colombia
              </h6>
            </div>
            <div className="update-time">
              <h3 className="update-time__no">20</h3>
              <h6 className="update-time__text">Ago</h6>
            </div>
          </div>
          <div className="event">
            <div className="event__figure">
              <img src={Img05} alt="" />
            </div>
            <div className="event__details">
              <div className="title">
                <h6 className="title__sub">Negocios </h6>
                <h4 className="title__main">IBM Cognos</h4>
              </div>
              <p className="event__dsc">
                Nam in bibendum diam, at rutrum neque. Donec bibendum sem quis
                odio accumsan, quis aliquet quam tempus. Donec semper dolor eget
                tincidunt consectetur. Aliquam porttitor eros vitae ipsum
                posuere gravida.
              </p>
              <h6 className="event__location  title__sub">
                <span>{ICON_LOCATION}</span>
                Medellín, Colombia
              </h6>
            </div>
            <div className="update-time">
              <h3 className="update-time__no">25</h3>
              <h6 className="update-time__text">Ago</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default UpCommingEvents;
