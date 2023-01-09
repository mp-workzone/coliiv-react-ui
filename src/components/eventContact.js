import Leaf from "../assets/leaf02.png";
function EventContact() {
  return (
    <section className="event-contact-area">
      <div className="leaf">
        <img src={Leaf} alt="" />
      </div>
      <div className="container-alt">
        <div className="inner-section">
          <div className="contact-form">
            <h3 className="contact-form__title">
              <span className="slice landscape"></span>
              Sé el primero en saber acerca
              <span className="contact-form__subtitle">
                de nuestros eventos
              </span>
            </h3>
            <form action="">
              <input
                type="text"
                className="input-name"
                placeholder="Teléfono"
              />
              <input
                type="e-mail"
                className="input-email"
                placeholder="Correo electrónico"
              />
              <div className="agreement">
                <input type="checkbox" id="input-agreement" />
                <label htmlFor="input-agreement" className="agreement-label">
                  Aceptar suscripción
                </label>
              </div>
              <input
                type="submit"
                value="ENVIAR"
                className="submit-btn more-link"
              />
            </form>
          </div>
          <div className="contact-right-area">
            <h3 className="title">Contáctanos</h3>
            <h5 className="contact-right__dsc">
              Vivamus vehicula varius leo, vel auctor urna convallis eget. Proin
              mollis suscipit faucibus. Pellentesque tristique ex vitae tortor
              iaculis egestas.
            </h5>
            <h4 className="email">
              E mail: <span className="light">Eventos@Coliv.com</span>
              <span className="telephone">
                Teléfono: <span className="light">+ 57 (602) 123 45 67</span>{" "}
              </span>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
export default EventContact;
