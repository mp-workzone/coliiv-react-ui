import GYM from "../assets/gym.webp";
import GYM01 from "../assets/gym01.webp";
import PlantNcircle from "../assets/plantNcircle.webp";
function Gym() {
  return (
    <>
      {/* gym start */}
      <section className="counter-lobby facility facility-after">
        <div className="facility__figure">
          <img src={GYM} alt="" />
        </div>
        <h1 className="facility__title title-primary">Gym</h1>
        <div className="scrollbar">
          <div className="count-no">09</div>
          <div className="scrollbar__inner top-part"></div>
          <div className="scrollbar__inner bottom-part"></div>
          <div className="total-count">12</div>
        </div>
      </section>
      {/* gym end*/}

      {/* gymBlog01 start */}
      <section className="facility-blog top info-blog left-space">
        <div className="plantNcircle">
          <img src={PlantNcircle} alt="" />
        </div>
        <div className="inner-section align-end">
          <div className="info-blog__text-area ">
            <h2 className="info-blog__title">
              Consectetur adipiscing elit, phasellus dui diam, varius a tellus
              at
            </h2>
            <h4 className="dsc">
              Nulla a posuere erat. Sed sapien nisl, rhoncus non ipsum ac,
              vehicula pharetra augue. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Nulla mollis
              leo quis ligula varius maximus.
            </h4>
          </div>
          <div className="info-blog__text-area">
            <h4 className="dsc">
              Phasellus dolor sem, iaculis id quam quis, aliquam facilisis enim.
              Proin facilisis viverra sodales. Vestibulum ut efficitur metus.
              Nulla fringilla non nibh non fermentum.
            </h4>
          </div>
        </div>
      </section>

      {/*  gymBlog01 end */}

      {/*  gymBlog02 start */}
      <section className="facility-blog bottom info-blog left-space">
        <div className="inner-section">
          <div className="info-blog__figure maximum">
            <img src={GYM01} alt="" />
          </div>
          <div className="info-blog__text-area">
            <h2 className="title-primary">
              Salón de
              <span className="title-secondary">meditación y yoga</span>
              <div className="slice portrait"></div>
            </h2>
            <h4 className="dsc">
              Proin hendrerit, nulla id convallis ultrices, lacus risus suscipit
              dui, eu auctor sem nulla et nibh. Aenean eu semper dui, sit amet
              vulputate metus vestibulum fringilla nisl.
            </h4>
          </div>
        </div>
      </section>
      {/*  gymBlog02 end */}
    </>
  );
}
export default Gym;
