import CareerSideImg from "../../assets/career-intro-side-img.webp";
import IntroImg from "../../assets/intro-img.webp";
function CareerIntro() {
  return (
    <section className="career-intro info-blog career-intro-spacing">
      <div className="leaf">
        <img src={CareerSideImg} alt="" />
      </div>
      <div className="container-alt">
        <div className="inner-section">
          <div className="info-blog__figure">
            <img src={IntroImg} alt="" />
          </div>
          <div className="info-blog__text-area">
            <div className="intro-title">
              <h2 className="title-primary">
                un mundo por
                <span className="title-secondary">descubrir </span>
              </h2>
              <h4 className="dsc">
                Donec nisl magna, blandit nec mauris sed, aliquam aliquam eros.
                Proin et metus consequat, facilisis nisi et, tincidunt ante.
                Integer interdum euismod mollis.
                <span className="dsc">
                  Phasellus viverra vitae magna at accumsan. Nam eu ante
                  sodales, malesuada felis sed, ullamcorper orci. Vestibulum
                  placerat quis erat ultricies fermentum. Suspendisse nibh
                  turpis, sagittis feugiat lacus feugiat, sodales dapibus lorem.
                  Praesent viverra luctus neque dictum scelerisque.
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CareerIntro;
