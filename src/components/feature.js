import plant from "../assets/plant01.png";
import video from "../assets/video01.jpg";
function Feature() {
  return (
    <section className="feature-area">
      <div className="plant">
        <img src={plant} alt="" />
      </div>
      <div className="container">
        <div className="feature-context">
          <h2 className="title-primary">
            Una nueva forma de vivir,
            <span className="title-secondary">explorar y habitar</span>
          </h2>
          <h4 className="dsc">
            Coliiv es un lugar multifuncional, con el uso inteligente del
            espacio para suplir las necesidades modernas.
          </h4>
        </div>
        <a href="/" className="featured-video">
          <img src={video} alt="" />
        </a>
      </div>
    </section>
  );
}

export default Feature;
