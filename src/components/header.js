import { useState } from "react";
import { Link } from "react-router-dom";
import menuFigure from "../assets/menu-figure.webp";

function Header() {
  const [fix, setFix] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Fixed Header
  function setFixed() {
    if (window.scrollY > 60) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);

  // Menu Open Controll
  function menuController() {
    if (!menuOpen) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  }

  return (
    <>
      <section className={`menu ${menuOpen ? "open" : ""}`}>
        <div className="main-content">
          <div className="container">
            <div className="language-menu">
              <button>EN</button> <span>/</span> <button>ES</button>
            </div>
          </div>
          <div className="container-alt">
            <div className="main-menu">
              <ul>
                <li className="main-menu__item">
                  <Link to="/xyz">Inicio</Link>
                </li>
                <li className="main-menu__item">
                  <Link to="/xyz">Apartamentos</Link>
                </li>
                <li className="main-menu__item">
                  <Link to="/xyz">amenidades</Link>
                </li>
                <li className="main-menu__item">
                  <Link to="/xyz">Colivers</Link>
                </li>
                <li className="main-menu__item">
                  <Link to="/xyz">Eventos</Link>
                </li>
                <li className="main-menu__item">
                  <Link to="/xyz">Nosotros</Link>
                </li>
                <li className="main-menu__item main-menu-item_alt">
                  <Link to="/xyz">Servicios</Link>
                </li>
                <li className="main-menu__item main-menu-item_alt">
                  <Link to="/xyz">Franquicias</Link>
                </li>
                <li className="main-menu__item main-menu-item_alt">
                  <Link to="/xyz">Carrera</Link>
                </li>
                <li className="main-menu__item main-menu-item_alt">
                  <Link to="/xyz">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="menu-footer">
          <div className="container-alt">
            <ul>
              <li>
                <a href="https:://www.faceboo.com">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.539"
                    height="26.099"
                    viewBox="0 0 13.539 26.099"
                  >
                    <path
                      id="Path_2934"
                      data-name="Path 2934"
                      d="M-38.413-1407.247c.439.034.878.067,1.316.1.3.025.606.054.916.081v4.151c-.125,0-.241,0-.356,0-.875.013-1.752,0-2.625.046a1.636,1.636,0,0,0-1.736,1.716c-.051,1.136-.011,2.276-.011,3.452h4.575l-.6,4.653H-40.92v11.9h-4.8v-11.885h-4v-4.645h4c0-.131,0-.229,0-.328.005-1.215-.025-2.432.025-3.646a5.812,5.812,0,0,1,1.524-3.9,5.306,5.306,0,0,1,2.872-1.537c.3-.062.6-.106.9-.158Z"
                      transform="translate(49.72 1407.247)"
                      fill="#737373"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https:://www.faceboo.com">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26.052"
                    height="18.278"
                    viewBox="0 0 26.052 18.278"
                  >
                    <g
                      id="Group_1932"
                      data-name="Group 1932"
                      transform="translate(0 0)"
                    >
                      <path
                        id="Path_2505"
                        data-name="Path 2505"
                        d="M1099.354-1325.117c2.682.1,5.365.2,8.047.321a13.737,13.737,0,0,1,1.882.227,3.282,3.282,0,0,1,2.744,2.869,31.258,31.258,0,0,1,.4,6.592c-.051,1.542-.2,3.083-.349,4.62a3.453,3.453,0,0,1-1.574,2.743,4.422,4.422,0,0,1-1.986.57,73.723,73.723,0,0,1-8.1.333c-2.711-.014-5.423-.1-8.133-.183a22.724,22.724,0,0,1-2.641-.271,3.194,3.194,0,0,1-2.777-2.759c-.194-1.156-.3-2.329-.385-3.5a37.784,37.784,0,0,1,.058-5.745,21.36,21.36,0,0,1,.358-2.655,3.278,3.278,0,0,1,3-2.692,71.184,71.184,0,0,1,7.634-.387c.606-.01,1.211,0,1.817,0Zm-2.513,13.079,6.771-3.9-6.771-3.9Z"
                        transform="translate(-1086.399 1325.117)"
                        fill="#737373"
                      />
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https:://www.faceboo.com">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26.052"
                    height="26.099"
                    viewBox="0 0 26.052 26.099"
                  >
                    <g
                      id="Group_1931"
                      data-name="Group 1931"
                      transform="translate(0)"
                    >
                      <path
                        id="Path_2502"
                        data-name="Path 2502"
                        d="M501.206-1399.545v10.507c-.015.117-.032.233-.046.35-.069.573-.1,1.154-.214,1.717a6.7,6.7,0,0,1-4.325,5.2,10.03,10.03,0,0,1-3.577.582c-2.762.028-5.524.054-8.286.039a17.439,17.439,0,0,1-4.055-.337,6.688,6.688,0,0,1-4.721-3.774,9.332,9.332,0,0,1-.781-3.944c-.03-2.821-.061-5.643-.039-8.464a25.785,25.785,0,0,1,.254-3.554,6.617,6.617,0,0,1,2.645-4.464,7.926,7.926,0,0,1,4.332-1.454c.626-.044,1.253-.07,1.88-.1h7.8c.609.034,1.219.066,1.828.1a8.683,8.683,0,0,1,3.088.687,6.8,6.8,0,0,1,4.059,5.553C501.12-1400.455,501.155-1400,501.206-1399.545Zm-13.021,16.1v-.04c.688,0,1.378.021,2.065,0,1.485-.053,2.981-.036,4.451-.219a4.256,4.256,0,0,0,3.863-3.4,11.013,11.013,0,0,0,.281-2.447q.067-3.977.04-7.955a26.1,26.1,0,0,0-.19-3.151,4.346,4.346,0,0,0-3.646-3.927,15.325,15.325,0,0,0-2.734-.247c-2.286-.038-4.573-.031-6.859-.024a22.95,22.95,0,0,0-3.889.212,4.369,4.369,0,0,0-3.764,3.582,14.54,14.54,0,0,0-.25,2.606c-.045,2.09-.061,4.182-.038,6.272.016,1.477.055,2.959.2,4.427a4.319,4.319,0,0,0,2.074,3.4,5.543,5.543,0,0,0,2.768.772C484.429-1383.518,486.307-1383.487,488.185-1383.441Z"
                        transform="translate(-475.154 1407.247)"
                        fill="#737373"
                      />
                      <path
                        id="Path_2503"
                        data-name="Path 2503"
                        d="M599.1-1276.207a6.712,6.712,0,0,1,6.725-6.7,6.7,6.7,0,0,1,6.69,6.727,6.71,6.71,0,0,1-6.708,6.687A6.72,6.72,0,0,1,599.1-1276.207Zm6.7,4.354a4.333,4.333,0,0,0,4.359-4.326,4.334,4.334,0,0,0-4.32-4.366,4.335,4.335,0,0,0-4.372,4.339A4.334,4.334,0,0,0,605.794-1271.853Z"
                        transform="translate(-592.764 1289.258)"
                        fill="#737373"
                      />
                      <path
                        id="Path_2504"
                        data-name="Path 2504"
                        d="M839.382-1317.112a1.556,1.556,0,0,1-1.586,1.551,1.566,1.566,0,0,1-1.538-1.577,1.556,1.556,0,0,1,1.564-1.547A1.548,1.548,0,0,1,839.382-1317.112Z"
                        transform="translate(-817.805 1323.212)"
                        fill="#737373"
                      />
                    </g>
                  </svg>
                </a>
              </li>
            </ul>

            <div className="copy-right">© 2022 DRIM STAY</div>
          </div>
        </div>
        <img className="menu-figure" src={menuFigure} alt="Menu Figure" />
      </section>
      <header
        className={`header-area ${fix ? "fixed" : ""} ${
          menuOpen ? "menu-open" : ""
        }`}
      >
        <div className="container">
          <div className="navbar">
            <a href="/" className="brand-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="153.726"
                height="29.298"
                viewBox="0 0 153.726 29.298"
              >
                <g
                  id="Group_1964"
                  data-name="Group 1964"
                  transform="translate(-250.878 -1385.134)"
                >
                  <path
                    id="Path_2921"
                    data-name="Path 2921"
                    d="M264.332,1413.615q6.016,0,8.348-6.362h1.842a12.949,12.949,0,0,1-4.376,4.865,10.455,10.455,0,0,1-5.815,1.785,12.768,12.768,0,0,1-9.442-4.073,14.7,14.7,0,0,1-3.512-9.946,15.093,15.093,0,0,1,3.527-10.076,12.642,12.642,0,0,1,9.427-4.174,10.448,10.448,0,0,1,5.844,1.8,12.963,12.963,0,0,1,4.376,4.937h-2.706a11.513,11.513,0,0,0-2.936-4.966,6.806,6.806,0,0,0-4.577-1.454,8.1,8.1,0,0,0-6.879,3.843q-2.217,3.843-2.217,10.262,0,6.363,2.173,9.96A8.209,8.209,0,0,0,264.332,1413.615Z"
                    transform="translate(0)"
                    fill="#383838"
                    stroke="#383838"
                    strokeWidth="1"
                  />
                  <path
                    id="Path_2922"
                    data-name="Path 2922"
                    d="M402.344,1392.255a16.9,16.9,0,0,1,1.583,7.485,16.3,16.3,0,0,1-.374,3.714,16.52,16.52,0,0,1-1.238,3.368,12.536,12.536,0,0,1-4.491,5.239,11.774,11.774,0,0,1-6.564,1.871,12.865,12.865,0,0,1-6.65-1.727,11.259,11.259,0,0,1-4.4-4.922,14.483,14.483,0,0,1-1.583-7.053,16.861,16.861,0,0,1,1.641-7.485,12.847,12.847,0,0,1,4.491-5.239,11.725,11.725,0,0,1,6.535-1.871,12.866,12.866,0,0,1,6.65,1.727A11.07,11.07,0,0,1,402.344,1392.255Zm-3.051,14.365a21.439,21.439,0,0,0,1.094-6.707,20.393,20.393,0,0,0-1.209-7.255,12.124,12.124,0,0,0-3.311-5.009,7.185,7.185,0,0,0-4.721-1.813,6.729,6.729,0,0,0-4.778,1.9,11.935,11.935,0,0,0-3.109,5.153,22.633,22.633,0,0,0-1.094,7.2,19.345,19.345,0,0,0,1.209,6.794,11.721,11.721,0,0,0,3.339,5.038,7.139,7.139,0,0,0,4.692,1.785,6.731,6.731,0,0,0,4.779-1.9A12.319,12.319,0,0,0,399.292,1406.62Z"
                    transform="translate(-93.629)"
                    fill="#383838"
                    stroke="#383838"
                    strokeWidth="1"
                  />
                  <path
                    id="Path_2923"
                    data-name="Path 2923"
                    d="M524.07,1413.587h14.048v.317h-17.3v-28.269h3.253Z"
                    transform="translate(-198.259)"
                    fill="#383838"
                    stroke="#383838"
                    strokeWidth="1"
                  />
                  <path
                    id="Path_2924"
                    data-name="Path 2924"
                    d="M764.9,1385.634h.374L754.339,1413.9h-.317l-11.486-28.269h3.973l9.01,24.268Z"
                    transform="translate(-361.404)"
                    fill="#383838"
                    stroke="#383838"
                    strokeWidth="1"
                  />
                  <path
                    id="Path_2925"
                    data-name="Path 2925"
                    d="M628.558,1385.744l0,8.656c0,2.324-.594,4.569-2.56,5.248v14.365h3.253v-28.269Z"
                    transform="translate(-275.652 -0.081)"
                    fill="#383838"
                    stroke="#383838"
                    strokeWidth="1"
                  />
                  <path
                    id="Path_2926"
                    data-name="Path 2926"
                    d="M689.925,1385.743l0,1.787c0,2.324.594,4.569,2.56,5.248v21.234h-3.253v-28.269Z"
                    transform="translate(-322.183 -0.08)"
                    fill="#383838"
                    stroke="#383838"
                    strokeWidth="1"
                  />
                </g>
              </svg>
            </a>
            <button className="hambarger-menu" onClick={menuController}>
              <svg
                className="main"
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="23"
                viewBox="0 0 53 23"
              >
                <g
                  id="menu_x"
                  data-name="menu x"
                  transform="translate(-2018.374 -120.24)"
                >
                  <line
                    id="Line_1"
                    data-name="Line 1"
                    x2="50"
                    transform="translate(2019.874 121.74)"
                    fill="none"
                    stroke="#383838"
                    strokeLinecap="round"
                    strokeWidth="3"
                  />
                  <line
                    id="Line_2"
                    data-name="Line 2"
                    x2="49.384"
                    transform="translate(2020.49 141.74)"
                    fill="none"
                    stroke="#383838"
                    strokeLinecap="round"
                    strokeWidth="3"
                  />
                </g>
              </svg>

              <svg
                className="close"
                xmlns="http://www.w3.org/2000/svg"
                width="32.814"
                height="32.746"
                viewBox="0 0 32.814 32.746"
              >
                <g
                  id="Group_2847"
                  data-name="Group 2847"
                  transform="translate(-1808.593 -33.627)"
                >
                  <line
                    id="Line_1"
                    data-name="Line 1"
                    x2="40.309"
                    transform="translate(1810.715 35.748) rotate(45)"
                    fill="none"
                    stroke="#383838"
                    strokeLinecap="round"
                    strokeWidth="3"
                  />
                  <line
                    id="Line_2"
                    data-name="Line 2"
                    x2="39.841"
                    transform="translate(1811.114 64.25) rotate(-45)"
                    fill="none"
                    stroke="#383838"
                    strokeLinecap="round"
                    strokeWidth="3"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
