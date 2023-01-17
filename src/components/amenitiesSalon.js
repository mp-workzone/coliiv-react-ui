import PlantNcircle from "../assets/plantNcircle.webp";
import SalonImg from "../assets/salon.webp";
import Spa from "../assets/spa.webp";
import Spa01 from "../assets/spa01.webp";
import Spa02 from "../assets/spa02.webp";
function Salon() {
  return (
    <>
      {/* salon start */}
      <section className="counter-lobby facility facility-after">
        <div className="facility__figure">
          <img src={SalonImg} alt="" />
        </div>
        <h1 className="facility__title title-primary">
          Salón de belleza Y barbería
        </h1>
        <div className="scrollbar">
          <div className="count-no">11</div>
          <div className="scrollbar__inner top-part"></div>
          <div className="scrollbar__inner bottom-part"></div>
          <div className="total-count">12</div>
        </div>
      </section>
      {/* salon end*/}

      {/* salonBlog01 start */}
      <section className="lg-blog top info-blog">
        <div className="plantNcircle">
          <img src={PlantNcircle} alt="" />
        </div>
        <div className="container-alt">
          <div className="inner-section">
            <div className="lg-blog__inner">
              <div className="info-blog__text-area">
                <h2 className="info-blog__title maximum">
                  Fusce non dui est, praesent faucibus ut velit vel molestie
                </h2>
                <h4 className="dsc maximum">
                  Dtopc ac lacinia metus, eget tempor ex. Vestibulum eget arcu
                  lorem. Nulla molestie, ante ac convallis tempus, justo lorem
                  dictum risus, et eleifend quam mauris et justo proin sodales.
                </h4>
                <div className="flex-items space-left">
                  <div className="lg-blog__left-figure">
                    <img src={Spa01} alt="" />
                  </div>
                </div>
              </div>
              <div className="info-blog__figure  lg-blog-right-figure">
                <img src={Spa02} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* salonBlog01 end */}

      {/*  salonBlog02 start */}
      <section className="facility-blog bottom info-blog left-space">
        <div className="inner-section">
          <div className="info-blog__text-area facility-text">
            <h2 className="title-primary">Spa</h2>
            <h4 className="dsc">
              Aenean a laoreet diam. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Dtopc sem
              leo, pulvinar eget arcu vel, tincidunt aliquam mi.
            </h4>
          </div>
          <div className="info-blog__figure maximum">
            <img src={Spa} alt="" />
          </div>
        </div>
      </section>
      {/*  salonBlog02 end */}
    </>
  );
}
export default Salon;
