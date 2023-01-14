import FacilityIntro01 from "../assets/facility-intro01.jpg";
import FacilityIntro02 from "../assets/facility-intro02.jpg";
import FacilityIntro03 from "../assets/facility-intro03.jpg";
import CounterLobby01 from "../assets/counter-lobby01.jpg";
import PoolFigure01 from "../assets/pool-figure01.jpg";
import PoolFigure02 from "../assets/pool-figure02.jpg";
import Coworking from "../assets/coworking.jpg";
import PlantNcircle from "../assets/plantNcircle.png";
import ZoomRooms from "../assets/zoomRooms.jpg";
import Terraza from "../assets/terraza.jpg";
import Restaurant from "../assets/restaurant.jpg";
import Bar from "../assets/bar.jpg";
import BarGarden from "../assets/bar-garden.jpg";
import GYM from "../assets/gym.jpg";
import GYM01 from "../assets/gym01.jpg";
import Salon from "../assets/salon.jpg";
import Spa from "../assets/spa.jpg";
import Spa01 from "../assets/spa01.jpg";
import Spa02 from "../assets/spa01.jpg";
function AmenitiesHero() {
  return (
    <>
      <section className="counter-lobby facility negative-space">
        <div className="facility__figure">
          <img src={CounterLobby01} alt="" />
        </div>
        <h1 className="facility__title title-primary">Counter Lobby</h1>
        <div className="scrollbar">
          <div className="count-no">01</div>
          <div className="scrollbar__inner top"></div>
          <div className="scrollbar__inner bottom"></div>
          <div className="total-count">12</div>
        </div>
      </section>

      {/* facility-intro 01 start */}
      <section className="facility-intro one intro-section left-space">
        <div className="plantNcircle">
          <img src={PlantNcircle} alt="" />
        </div>
        <div className="inner-section">
          <div className="intro-text-area">
            <h2 className="intro-title facility-text">
              Mauris venenatis dignissim aliquet in eget tristique orci
            </h2>
            <h4 className="dsc  facility-text">
              El Counter Lobby Quisque vitae suscipit justo. Cras fringilla,
              ligula ultricies rutrum consequat, quam dui sagittis enim,
              condimentum euismod nulla nunc a lacus. Vestibulum in ex id elit
              aliquam lacinia. Fusce vitae magna in libero porta porta a nec
              neque.
            </h4>
          </div>
          <div className="intro-figure ">
            <img src={FacilityIntro01} alt="" />
          </div>
        </div>
      </section>

      {/*  facility-intro 01 end */}

      {/*  facility-intro 02 start */}
      <section className="facility-intro two intro-section right-space">
        <div className="inner-section responsive-reverse">
          <div className="intro-figure maximum">
            <img src={FacilityIntro02} alt="" />
          </div>
          <div className="intro-text-area facility-text">
            <h2 className="title-primary">
              Mini market
              <span className="title-secondary">
                Café
                <div className="slice landscape"></div>
              </span>
            </h2>
            <h4 className="dsc">
              Praesent lobortis posuere sapien, varius imperdiet urna varius
              non. Phasellus eleifend blandit imperdiet. Phasellus augue enim,
              lacinia a posuere nec, feugiat ut justo.
            </h4>
          </div>
        </div>
      </section>
      {/*  facility-intro 02 end */}

      {/* facility-intro 03 start */}
      <section className="facility-intro three intro-section">
        <div className="container-alt">
          <div className="inner-section">
            <div className="intro-text-area facility-text">
              <h2 className="intro-title">
                Aliquam commodo sed augue eget congue
              </h2>
              <h4 className="dsc">
                Coliiv es verdadera innovación. Morbi eu nibh non arcu molestie
                ultrices. Vestibulum dictum, Leo sed gravida euismod, quam eros
                maximus urna.
              </h4>
            </div>
            <div className="intro-figure  shadow-right">
              <img src={FacilityIntro03} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/*  facility-intro 03 end */}

      {/* slide count 03 start */}
      <section className="counter-lobby facility facility-after">
        <div className="facility__figure">
          <img src={Coworking} alt="" />
        </div>
        <h1 className="facility__title title-primary">Coworking</h1>
        <div className="scrollbar">
          <div className="count-no">03</div>
          <div className="scrollbar__inner top"></div>
          <div className="scrollbar__inner bottom"></div>
          <div className="total-count">12</div>
        </div>
      </section>
      {/* slide count 03 end*/}

      {/* facility 01 start */}
      <section className="facility-intro one intro-section left-space">
        <div className="inner-section">
          <div className="intro-text-area facility-text">
            <h2 className="intro-title">
              Vel efficitur augue vestibulum nisl orci, tristique eu leo sitam
            </h2>
            <h4 className="dsc">
              Aliquam lacinia dolor nisl, molestie imperdiet risus posuere eget.
              Nunc pretium laoreet volutpat. Duis vitae finibus ex.
              <span className="dsc">
                Morbi ac mi maximus, ultrices lectus sagittis, mollis turpis. In
                facilisis hendrerit risus ut mollis. Curabitur eget felis
                posuere, sollicitudin leo in, accumsan ipsum sed non ex quis
                sapien pretium aliquet.
              </span>
            </h4>
          </div>
          <div className="intro-figure ">
            <img src={Coworking} alt="" />
          </div>
        </div>
      </section>

      {/*  facility 01 end */}

      {/*  facility 02 start */}
      <section className="facility-intro two intro-section right-space">
        <div className="inner-section responsive-reverse">
          <div className="intro-figure maximum">
            <img src={ZoomRooms} alt="" />
          </div>
          <div className="intro-text-area facility-text">
            <h2 className="title-primary">
              Zoom
              <span className="title-secondary">Rooms</span>
            </h2>
            <h4 className="dsc">
              Praesent lobortis posuere sapien, varius imperdiet urna varius
              non. Phasellus eleifend blandit imperdiet. Phasellus augue enim,
              lacinia a posuere nec, feugiat ut justo.
            </h4>
          </div>
        </div>
      </section>
      {/*  facility 02 end */}

      {/* slide count 05 start */}
      <section className="counter-lobby facility facility-after">
        <div className="facility__figure">
          <img src={Terraza} alt="" />
        </div>
        <h1 className="facility__title title-primary">Coworking</h1>
        <div className="scrollbar">
          <div className="count-no">05</div>
          <div className="scrollbar__inner top"></div>
          <div className="scrollbar__inner bottom"></div>
          <div className="total-count">12</div>
        </div>
      </section>
      {/* slide count 05 end*/}

      {/* pool facility start */}
      <section className="pool one intro-section">
        <div className="plantNcircle">
          <img src={PlantNcircle} alt="" />
        </div>
        <div className="container-alt">
          <div className="inner-section">
            <div className="intro-text-area">
              <h2 className="intro-title">
                Placerat eleifend ligula, Cras in molestie velit
              </h2>
              <h4 className="dsc">
                El Counter Lobby Quisque vitae suscipit justo. Cras fringilla,
                ligula ultricies rutrum consequat, quam dui sagittis enim,
                condimentum euismod nulla nunc a lacus. Vestibulum in ex id elit
                aliquam lacinia. Fusce vitae magna in libero porta porta a nec
                neque.
              </h4>
              <div className="pool__figure-title title-primary">Piscina</div>
              <div className="pool-left-figure">
                <img src={PoolFigure01} alt="" />
              </div>
            </div>
            <div className="intro-figure  pool-right-figure">
              <img src={PoolFigure02} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* pool facility end */}

      {/*  facility 02 start */}
      <section className="facility-intro two intro-section left-space">
        <div className="inner-section">
          <div className="intro-text-area">
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
          <div className="intro-figure ">
            <img src={Terraza} alt="" />
          </div>
        </div>
      </section>
      {/*  facility 02 end */}

      {/* slide count 07 start */}
      <section className="counter-lobby facility facility-after">
        <div className="facility__figure">
          <img src={Restaurant} alt="" />
        </div>
        <h1 className="facility__title title-primary">Coworking</h1>
        <div className="scrollbar">
          <div className="count-no">07</div>
          <div className="scrollbar__inner top"></div>
          <div className="scrollbar__inner bottom"></div>
          <div className="total-count">12</div>
        </div>
      </section>
      {/* slide count 07 end*/}

      {/* facility 01 start */}
      <section className="facility-intro one intro-section left-space">
        <div className="inner-section">
          <div className="intro-text-area">
            <h2 className="intro-title">
              hendrerit aliquam erat in eros sem, posuere nec sollicitudin
              consectetur.
            </h2>
            <h4 className="dsc">
              Donec nisl magna, blandit nec mauris sed, aliquam aliquam eros.
              Proin et metus consequat, facilisis nisi et, tincidunt ante.
              Integer interdum euismod mollis.
              <span className="dsc">
                Phasellus viverra vitae magna at accumsan. Nam eu ante sodales,
                malesuada felis sed, ullamcorper orci. Vestibulum placerat quis
                erat ultricies fermentum. Suspendisse nibh turpis, sagittis
                feugiat lacus feugiat, sodales dapibus lorem. Praesent viverra
                luctus neque dictum scelerisque
              </span>
            </h4>
          </div>
          <div className="intro-figure maximum">
            <img src={Restaurant} alt="" />
          </div>
        </div>
      </section>

      {/*  facility 01 end */}

      {/* slide count 08 start */}
      <section className="counter-lobby facility facility-after">
        <div className="facility__figure">
          <img src={Bar} alt="" />
        </div>
        <h1 className="facility__title title-primary">BAR</h1>
        <div className="scrollbar">
          <div className="count-no">08</div>
          <div className="scrollbar__inner top"></div>
          <div className="scrollbar__inner bottom"></div>
          <div className="total-count">12</div>
        </div>
      </section>
      {/* slide count 08 end*/}

      {/* facility 01 start */}
      <section className="facility-intro one intro-section left-space">
        <div className="inner-section">
          <div className="intro-text-area">
            <div className="slice portrait bar-portrait"></div>
            <h2 className="intro-title">
              Eu euismod nunc integer vel pellentesque lorem
            </h2>
            <h4 className="dsc">
              Vivamus vel sem dignissim, auctor eros sed, dignissim odio.
              Pellentesque tortor diam, posuere a nibh eget, vehicula
              sollicitudin lorem. Suspendisse potenti. Proin a elit purus.
              <span className="dsc">
                Nulla eu sagittis quam. Mauris viverra nulla eu dolor rhoncus,
                et porttitor libero ultrices. Nunc justo metus, consequat eget
                libero eu, rutrum vestibulum nunc.
              </span>
            </h4>
          </div>
          <div className="intro-figure ">
            <img src={Bar} alt="" />
          </div>
        </div>
      </section>

      {/*  facility 01 end */}

      {/*  facility 02 start */}
      <section className="facility-intro two intro-section right-space">
        <div className="inner-section responsive-reverse">
          <div className="intro-figure maximum">
            <img src={BarGarden} alt="" />
          </div>
          <div className="intro-text-area">
            <h2 className="title-primary">Gradería</h2>
            <h4 className="dsc">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; In sed mi laoreet, mattis nulla faucibus,
              sollicitudin dolor.
            </h4>
          </div>
        </div>
      </section>
      {/*  facility 02 end */}

      {/* slide count 09 start */}
      <section className="counter-lobby facility facility-after">
        <div className="facility__figure">
          <img src={GYM} alt="" />
        </div>
        <h1 className="facility__title title-primary">Gym</h1>
        <div className="scrollbar">
          <div className="count-no">09</div>
          <div className="scrollbar__inner top"></div>
          <div className="scrollbar__inner bottom"></div>
          <div className="total-count">12</div>
        </div>
      </section>
      {/* slide count 09 end*/}

      {/* facility 01 start */}
      <section className="facility-intro three intro-section left-space">
        <div className="plantNcircle">
          <img src={PlantNcircle} alt="" />
        </div>
        <div className="inner-section align-end">
          <div className="intro-text-area ">
            <h2 className="intro-title">
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
          <div className="intro-text-area">
            <h4 className="dsc">
              Phasellus dolor sem, iaculis id quam quis, aliquam facilisis enim.
              Proin facilisis viverra sodales. Vestibulum ut efficitur metus.
              Nulla fringilla non nibh non fermentum.
            </h4>
          </div>
        </div>
      </section>

      {/*  facility 01 end */}

      {/*  facility 02 start */}
      <section className="facility-intro two intro-section left-space">
        <div className="inner-section">
          <div className="intro-figure maximum">
            <img src={GYM01} alt="" />
          </div>
          <div className="intro-text-area">
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
      {/*  facility 02 end */}

      {/* slide count 11 start */}
      <section className="counter-lobby facility facility-after">
        <div className="facility__figure">
          <img src={Salon} alt="" />
        </div>
        <h1 className="facility__title title-primary">Coworking</h1>
        <div className="scrollbar">
          <div className="count-no">11</div>
          <div className="scrollbar__inner top"></div>
          <div className="scrollbar__inner bottom"></div>
          <div className="total-count">12</div>
        </div>
      </section>
      {/* slide count 11 end*/}
      {/* pool facility start */}
      <section className="pool intro-section">
        <div className="container-alt">
          <div className="inner-section">
            <div className="intro-text-area">
              <h2 className="intro-title">
                Fusce non dui est, praesent faucibus ut velit vel molestie
              </h2>
              <h4 className="dsc">
                Donec ac lacinia metus, eget tempor ex. Vestibulum eget arcu
                lorem. Nulla molestie, ante ac convallis tempus, justo lorem
                dictum risus, et eleifend quam mauris et justo proin sodales.
              </h4>
              <div className="pool-left-figure">
                <img src={Spa02} alt="" />
              </div>
            </div>
            <div className="intro-figure  pool-right-figure">
              <img src={Spa01} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* pool facility end */}
      {/*  facility 02 start */}
      <section className="facility-intro two intro-section left-space">
        <div className="inner-section">
          <div className="intro-text-area facility-text">
            <h2 className="title-primary">Spa</h2>
            <h4 className="dsc">
              Aenean a laoreet diam. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Donec sem
              leo, pulvinar eget arcu vel, tincidunt aliquam mi.
            </h4>
          </div>
          <div className="intro-figure maximum">
            <img src={Spa} alt="" />
          </div>
        </div>
      </section>
      {/*  facility 02 end */}
    </>
  );
}
export default AmenitiesHero;
