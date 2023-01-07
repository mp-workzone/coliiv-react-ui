import Figure01 from "../assets/contact-figure01.jpg";
import Figure02 from "../assets/contact-figure02.jpg";
import Leaf from "../assets/leaf03.png";
function Contact() {
  return (
    <section className="contact">
      <div className="container-alt">
        <div className="contact__figure">
          <div className="figure01">
            <img src={Figure01} alt="" />
          </div>
          <div className="figure02">
            <img src={Figure02} alt="" />
          </div>
        </div>
        <div className="content-wrapper">
          <div className="leaf">
            <img src={Leaf} alt="" />
          </div>
          <div className="content">
            <h2 className="contact__title title-secondary">
              <span className="slice landscape"></span>
              Contactanos
            </h2>
            <h4 className="contact__dsc dsc">
              Manténgase al día con las aperturas de ubicaciones, eventos
              comunitarios y otras noticias.
            </h4>
            <form action="/" className="contact__form">
              <input
                type="text"
                className="input-name"
                placeholder="Teléfono"
              />
              <input
                type="email"
                className="input-email"
                placeholder="Correo electrónico"
              />
              <input type="checkbox" id="input-agreement" />
              <label htmlFor="input-agreement" className="agreement-label">
                Mantenerme al día con las últimas noticias.
              </label>
              <input
                type="submit"
                value="Enviar"
                className="submit-btn more-link"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
