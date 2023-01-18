import { ICON_LOCATION } from "../../utils/icons";
function ChooseProject() {
  return (
    <section className="choose-project">
      <div className="container-alt">
        <div className="choose-project__title">
          <h2 className="choose-project__title__main">te estamos buscando</h2>
          <div className="choose-project__title__sub dsc">
            Gracias por ver nuestras ofertas de trabajo, postúlate aquí si ves
            algo de tu interés.
          </div>
        </div>
        <div className="projects">
          <div className="project-category">
            <h3 className="project-category__title">Construcción </h3>
            <div className="project">
              <div className="project__content">
                <h4 className="project__title">
                  Pasante de gestión de construcción
                </h4>
                <h6 className="project__subtitle">Presencial </h6>
                <p className="project__location">
                  <span className="location-icon">{ICON_LOCATION}</span>
                  Medellín, Colombia
                </p>
              </div>
              <a href="/" className="more-btn">
                Ver más
              </a>
            </div>
            <div className="project">
              <div className="project__content">
                <h4 className="project__title">Tecnólogo en altura</h4>
                <h6 className="project__subtitle">Presencial </h6>
                <p className="project__location">
                  <span className="location-icon">{ICON_LOCATION}</span>
                  Medellín, Colombia
                </p>
              </div>
              <a href="/" className="more-btn">
                Ver más
              </a>
            </div>
          </div>
          <div className="project-category">
            <h3 className="project-category__title">Limpiza </h3>
            <div className="project">
              <div className="project__content">
                <h4 className="project__title">Aseadora</h4>
                <h6 className="project__subtitle">Presencial </h6>
                <p className="project__location">
                  <span className="location-icon">{ICON_LOCATION}</span>
                  Medellín, Colombia
                </p>
              </div>
              <a href="/" className="more-btn">
                Ver más
              </a>
            </div>
            <div className="project">
              <div className="project__content">
                <h4 className="project__title">Limpiador de vidrios</h4>
                <h6 className="project__subtitle">Presencial </h6>
                <p className="project__location">
                  <span className="location-icon">{ICON_LOCATION}</span>
                  Medellín, Colombia
                </p>
              </div>
              <a href="/" className="more-btn">
                Ver más
              </a>
            </div>
          </div>
          <div className="project-category">
            <h3 className="project-category__title">Operaciones </h3>
            <div className="project">
              <div className="project__content">
                <h4 className="project__title">Administrador de contactos</h4>
                <h6 className="project__subtitle">Presencial </h6>
                <p className="project__location">
                  <span className="location-icon">{ICON_LOCATION}</span>
                  Medellín, Colombia
                </p>
              </div>
              <a href="/" className="more-btn">
                Ver más
              </a>
            </div>
            <div className="project">
              <div className="project__content">
                <h4 className="project__title">Relaciones de residentes</h4>
                <h6 className="project__subtitle">Presencial </h6>
                <div className="dsc">
                  Praesent non sem lectus. Fusce varius ipsum eu libero
                  sagittis, id pulvinar erat convallis.Aliquam erat volutpat. In
                  non lacus augue. Vestibulum vel velit lacus. Ut ornare mi
                  turpis, sit amet eleifend ex luctus at. Proin imperdiet urna
                  vel interdum euismod. Etiam nec nisl erat. Nullam nisi neque,
                  euismod sed dui et, rutrum mattis sapien. Sed eu justo auctor,
                  rhoncus purus non, sagittis eros. Mauris nunc lectus, porta ut
                  mauris et, tristique elementum magna.
                </div>
                <p className="project__location">
                  <span className="location-icon">{ICON_LOCATION}</span>
                  Medellín, Colombia
                </p>
              </div>
              <a href="/" className="more-btn">
                Ver más
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ChooseProject;
