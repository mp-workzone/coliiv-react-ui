import {
  ICON_FACEBOOK,
  ICON_INSTAGRAM,
  ICON_LOGO_ALT,
  ICON_YOUTUBE,
} from "../utils/icons";
function Footer() {
  return (
    <footer className="footer-area">
      <div className="container-alt footer-widgets">
        <div className="col-left">
          <div className="responsive-left">
            <div className="footer-logo">
              <a href="/">{ICON_LOGO_ALT}</a>
            </div>
            <ul className="footer-social-links">
              <li>
                <a href="/">{ICON_FACEBOOK}</a>
              </li>
              <li>
                <a href="/">{ICON_INSTAGRAM}</a>
              </li>
              <li>
                <a href="/">{ICON_YOUTUBE}</a>
              </li>
            </ul>
          </div>
          <div className="footer-address">
            <p>
              <span>Av calle 123 # 34 -56</span>
              <span>Medellín, Colombia </span>
              <br />
              <span>+ 57 (602) 123 45 67</span>
            </p>
          </div>
        </div>

        <div className="col-right">
          <div className="footer-widget footer-widget-link">
            <ul>
              <li>
                <a href="/">Ingresar</a>
              </li>
              <li>
                <a href="/">¿Por qué Coliiv?</a>
              </li>
              <li>
                <a href="/">Diseño</a>
              </li>
              <li>
                <a href="/">Reservar</a>
              </li>
              <li>
                <a href="/">Carrera</a>
              </li>
            </ul>
          </div>
          <div className="footer-widget footer-widget-link">
            <ul>
              <li>
                <a href="/">Nosotros</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Servicios administrativos</a>
              </li>
              <li>
                <a href="/">Contactanos</a>
              </li>
              <li>
                <a href="/">Tratamiento de datos</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-alt copyright">
        <p>© 2022 COLIIV</p>
      </div>
    </footer>
  );
}

export default Footer;
