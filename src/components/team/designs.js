import Img01 from "../../assets/design-img.webp";
import Img02 from "../../assets/design-img02.webp";
import Img03 from "../../assets/design-img03.webp";
function Designs() {
  return (
    <section className="design-wrapper">
      <div className="container-alt">
        <div className="design">
          <div className="design-img">
            <img src={Img01} alt="" />
          </div>
          <div className="content">
            <h2 className="design__title">
              Así mezclamos perfectamente lo sofisticado y lo contemporáneo
              <span className="slice landscape"></span>
            </h2>
            <h4 className="dsc">
              Nunc feugiat nisl id cursus gravida. Proin ultrices sed enim eget
              viverra. Aenean ultrices sapien in neque bibendum viverra.
              Phasellus vulputate, lacus eget convallis ullamcorper, dui odio
              volutpat mi, ac lacinia leo enim fermentum ex. Donec rutrum, metus
              vitae maximus mollis, urna ante faucibus arcu, et rutrum ante orci
              nec neque. Maecenas suscipit enim nec commodo sagittis. Quisque ut
              arcu quam.
            </h4>
          </div>
        </div>
        <div className="design">
          <div className="design-img">
            <img src={Img02} alt="" />
          </div>
          <div className="content">
            <h2 className="title-primary main-title">
              diseño
              <span className="title-secondary main-title-secondary">
                e innovación
              </span>
            </h2>
            <h4 className="dsc">
              Curabitur sit amet dolor libero. Pellentesque vehicula felis ante,
              ut aliquet tortor porta fringilla. Aenean consectetur massa ut
              consectetur fermentum. Sed ac tellus ac justo dapibus venenatis
              vel eget massa. Sed mollis in magna ullamcorper scelerisque.
              Phasellus auctor lectus ut libero commodo ullamcorper.
            </h4>
          </div>
        </div>
        <div className="design negative-space">
          <div className="design-img ">
            <img src={Img03} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Designs;
