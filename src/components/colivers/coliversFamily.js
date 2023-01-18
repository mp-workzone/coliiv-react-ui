import MainFigure from "../../assets/main-figure.webp";
import SideFigure02 from "../../assets/side-figure02.webp";
import SideFigure04 from "../../assets/side-figure04.webp";
function ColiversFamily() {
  return (
    <section className="coliv-family-gallery">
      <div className="gallery-center-content">
        <div className="top-figure">
          <div className="side-figure top-left">
            <img src={SideFigure04} alt="" />
          </div>
          <div className="side-figure top-right">
            <img src={SideFigure02} alt="" />
          </div>
        </div>
        <div className="main-figure">
          <img src={MainFigure} alt="" />
        </div>

        <h3 className="fig-caption">
          Aliquam commodo sed augue eget congue maecenas a augue lorem
          vestibulum ut
        </h3>
        <div className="bottom-figure">
          <div className="side-figure bottom-left">
            <img src={SideFigure02} alt="" />
          </div>
          <div className="side-figure bottom-right">
            <img src={SideFigure04} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default ColiversFamily;
