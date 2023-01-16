import PoolFigure01 from "../assets/pool-figure01.jpg";
import PoolFigure02 from "../assets/pool-figure02.jpg";
import Terraza from "../assets/terraza.jpg";
import PlantNcircle from "../assets/plantNcircle.png";
function AmenitiesTerraza() {
  return (
    <>
      {/* terraza start */}
      <section className="counter-lobby facility facility-after">
        <div className="facility__figure">
          <img src={Terraza} alt="" />
        </div>
        <h1 className="facility__title title-primary">Terraza</h1>
        <div className="scrollbar">
          <div className="count-no">05</div>
          <div className="scrollbar__inner top"></div>
          <div className="scrollbar__inner bottom"></div>
          <div className="total-count">12</div>
        </div>
      </section>
      {/* terraza end*/}

      {/* terrazaBlog01 start */}
      <section className="lg-blog top info-blog">
        <div className="plantNcircle">
          <img src={PlantNcircle} alt="" />
        </div>
        <div className="container-alt">
          <div className="inner-section">
            <div className="lg-blog__inner">
              <div className="info-blog__text-area">
                <h2 className="info-blog__title maximum">
                  Placerat eleifend ligula, Cras in molestie velit
                </h2>
                <h4 className="dsc maximum">
                  El Counter Lobby Quisque vitae suscipit justo. Cras fringilla,
                  ligula ultricies rutrum consequat, quam dui sagittis enim,
                  condimentum euismod nulla nunc a lacus. Vestibulum in ex id
                  elit aliquam lacinia. Fusce vitae magna in libero porta porta
                  a nec neque.
                </h4>
                <div className="flex-items">
                  <div className="lg-blog__figure-title title-primary">
                    Piscina
                  </div>
                  <div className="lg-blog__left-figure">
                    <img src={PoolFigure02} alt="" />
                  </div>
                </div>
              </div>
              <div className="info-blog__figure  lg-blog-right-figure">
                <img src={PoolFigure01} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* terrazaBlog01 end */}

      {/*  terrazaBlog02 start */}
      <section className="facility-blog bottom info-blog left-space">
        <div className="inner-section">
          <div className="info-blog__text-area">
            <h2 className="title-primary">
              Zona de
              <span className="title-secondary">relajación</span>
              <div className="slice terraza-portrait"></div>
            </h2>
            <h4 className="dsc">
              Proin hendrerit, nulla id convallis ultrices, lacus risus suscipit
              dui, eu auctor sem nulla et nibh. Aenean eu semper dui, sit amet
              vulputate metus vestibulum fringilla nisl.
            </h4>
          </div>
          <div className="info-blog__figure min-height">
            <img src={Terraza} alt="" />
          </div>
        </div>
      </section>
      {/*  terrazaBlog02 end */}
    </>
  );
}

export default AmenitiesTerraza;
