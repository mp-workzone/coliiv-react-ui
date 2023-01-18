import Img01 from "../../assets/event-img01.webp";
import Img02 from "../../assets/event-img02.webp";
import Img03 from "../../assets/event-img03.webp";
function RecomendedEvents() {
  return (
    <section className="recomnended-events">
      <div className="inner-wrapper">
        <div className="recomended-events__title">
          <h2 className="title-primary">
            Eventos
            <span className="title-secondary">Recomendados</span>
          </h2>
        </div>
        <div className="events">
          <div className="event">
            <div className="event-figure">
              <img src={Img01} alt="" />
            </div>
            <h3 className="event-title">HubSpot CRM</h3>
            <h4 className="event-subtitle">Tecnologia — 05 Abril 2022</h4>
            <h5 className="event-dsc dsc">
              Vestibulum venenatis iaculis eros, in congue felis congue
              pharetra, phasellus vitae ipsum rhoncus.
            </h5>
          </div>
          <div className="event">
            <div className="event-figure">
              <img src={Img02} alt="" />
            </div>
            <h3 className="event-title">Camtasia - Marketing</h3>
            <h4 className="event-subtitle">Marketing — 09 Octubre 2022</h4>
            <h5 className="event-dsc dsc">
              Vestibulum venenatis iaculis eros, in congue felis congue
              pharetra, phasellus vitae ipsum rhoncus.
            </h5>
          </div>
          <div className="event">
            <div className="event-figure">
              <img src={Img03} alt="" />
            </div>
            <h3 className="event-title">Frens MRO</h3>
            <h4 className="event-subtitle">Finanzas — 08 Noviembre 2022</h4>
            <h5 className="event-dsc dsc">
              Vestibulum venenatis iaculis eros, in congue felis congue
              pharetra, phasellus vitae ipsum rhoncus.
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}
export default RecomendedEvents;
