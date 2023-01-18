import ExploreProject01 from "../../assets/explore-project01.webp";
import ExploreProject02 from "../../assets/explore-project02.webp";
import ExploreProject03 from "../../assets/explore-project03.webp";
import ExploreProject04 from "../../assets/explore-project04.webp";
function ExploreProject() {
  return (
    <section className="explore-project">
      <div className="container">
        <div className="explore-project__title">
          <div className="container-alt">
            <h2 className="title-primary">
              EXPLORA NUESTROS
              <span className="title-secondary">PROYECTOS</span>
            </h2>
          </div>
          <div className="grid-area">
            <a href="/" className="project">
              <div className="project__img">
                <img src={ExploreProject01} alt="" />
              </div>
              <div className="project__title">
                <h3 className="project__title__main">
                  TAU<span className="project__title__sub">HOUSE</span>
                </h3>
              </div>
            </a>
            <a href="/" className="project">
              <div className="project__img">
                <img src={ExploreProject02} alt="" />
              </div>
              <div className="project__title">
                <h3 className="project__title__main">BELIIV</h3>
              </div>
            </a>
            <a href="/" className="project">
              <div className="project__img">
                <img src={ExploreProject03} alt="" />
              </div>
              <div className="project__title">
                <h3 className="project__title__main">WAKE</h3>
              </div>
            </a>
            <a href="/" className="project">
              <div className="project__img">
                <img src={ExploreProject04} alt="" />
              </div>
              <div className="project__title">
                <h3 className="project__title__main">WAKE II</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ExploreProject;
