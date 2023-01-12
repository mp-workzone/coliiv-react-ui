import FacilityIntro01 from "../assets/facility-intro01.jpg";
import FacilityIntro02 from "../assets/facility-intro02.jpg";
import FacilityIntro03 from "../assets/facility-intro03.jpg";
import CounterLobby01 from "../assets/counter-lobby01.jpg";
import PoolFigure01 from "../assets/pool-figure01.jpg";
import PoolFigure02 from "../assets/pool-figure02.jpg";
import Coworking from "../assets/coworking.jpg";
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
        <div className="inner-section">
          <div className="intro-text-area">
            <h2 className="intro-title">
              Mauris venenatis dignissim aliquet in eget tristique orci
            </h2>
            <h4 className="dsc">
              El Counter Lobby Quisque vitae suscipit justo. Cras fringilla,
              ligula ultricies rutrum consequat, quam dui sagittis enim,
              condimentum euismod nulla nunc a lacus. Vestibulum in ex id elit
              aliquam lacinia. Fusce vitae magna in libero porta porta a nec
              neque.
            </h4>
          </div>
          <div className="intro-figure">
            <img src={FacilityIntro01} alt="" />
          </div>
        </div>
      </section>

      {/*  facility-intro 01 end */}

      {/*  facility-intro 02 start */}
      <section className="facility-intro two intro-section right-space">
        <div className="inner-section">
          <div className="intro-figure">
            <img src={FacilityIntro02} alt="" />
          </div>
          <div className="intro-text-area">
            <h2 className="title-primary">
              Mini market
              <span className="title-secondary">Café</span>
              <div className="slice landscape"></div>
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
            <div className="intro-text-area">
              <h2 className="intro-title">
                Aliquam commodo sed augue eget congue
              </h2>
              <h4 className="dsc">
                Coliiv es verdadera innovación. Morbi eu nibh non arcu molestie
                ultrices. Vestibulum dictum, Leo sed gravida euismod, quam eros
                maximus urna.
              </h4>
            </div>
            <div className="intro-figure shadow-right">
              <img src={FacilityIntro03} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/*  facility-intro 03 end */}

      {/* slide count 03 start */}
      <section className="counter-lobby facility">
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
          <div className="intro-text-area">
            <h2 className="intro-title">
              Mauris venenatis dignissim aliquet in eget tristique orci
            </h2>
            <h4 className="dsc">
              El Counter Lobby Quisque vitae suscipit justo. Cras fringilla,
              ligula ultricies rutrum consequat, quam dui sagittis enim,
              condimentum euismod nulla nunc a lacus. Vestibulum in ex id elit
              aliquam lacinia. Fusce vitae magna in libero porta porta a nec
              neque.
            </h4>
          </div>
          <div className="intro-figure">
            <img src={FacilityIntro01} alt="" />
          </div>
        </div>
      </section>

      {/*  facility 01 end */}

      {/*  facility 02 start */}
      <section className="facility-intro two intro-section right-space">
        <div className="inner-section">
          <div className="intro-figure">
            <img src={FacilityIntro02} alt="" />
          </div>
          <div className="intro-text-area">
            <h2 className="title-primary">
              Mini market
              <span className="title-secondary">Café</span>
              <div className="slice landscape"></div>
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
      <section className="counter-lobby facility">
        <div className="facility__figure">
          <img src={Coworking} alt="" />
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
      <section className="pool intro-section">
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
            <div className="intro-figure pool-right-figure">
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
              Mini market
              <span className="title-secondary">Café</span>
              <div className="slice landscape"></div>
            </h2>
            <h4 className="dsc">
              Praesent lobortis posuere sapien, varius imperdiet urna varius
              non. Phasellus eleifend blandit imperdiet. Phasellus augue enim,
              lacinia a posuere nec, feugiat ut justo.
            </h4>
          </div>
          <div className="intro-figure">
            <img src={FacilityIntro02} alt="" />
          </div>
        </div>
      </section>
      {/*  facility 02 end */}

      {/* slide count 07 start */}
      <section className="counter-lobby facility">
        <div className="facility__figure">
          <img src={Coworking} alt="" />
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
              Mauris venenatis dignissim aliquet in eget tristique orci
            </h2>
            <h4 className="dsc">
              El Counter Lobby Quisque vitae suscipit justo. Cras fringilla,
              ligula ultricies rutrum consequat, quam dui sagittis enim,
              condimentum euismod nulla nunc a lacus. Vestibulum in ex id elit
              aliquam lacinia. Fusce vitae magna in libero porta porta a nec
              neque.
            </h4>
          </div>
          <div className="intro-figure">
            <img src={FacilityIntro01} alt="" />
          </div>
        </div>
      </section>

      {/*  facility 01 end */}

      {/* slide count 08 start */}
      <section className="counter-lobby facility">
        <div className="facility__figure">
          <img src={Coworking} alt="" />
        </div>
        <h1 className="facility__title title-primary">Coworking</h1>
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
            <h2 className="intro-title">
              Mauris venenatis dignissim aliquet in eget tristique orci
            </h2>
            <h4 className="dsc">
              El Counter Lobby Quisque vitae suscipit justo. Cras fringilla,
              ligula ultricies rutrum consequat, quam dui sagittis enim,
              condimentum euismod nulla nunc a lacus. Vestibulum in ex id elit
              aliquam lacinia. Fusce vitae magna in libero porta porta a nec
              neque.
            </h4>
          </div>
          <div className="intro-figure">
            <img src={FacilityIntro01} alt="" />
          </div>
        </div>
      </section>

      {/*  facility 01 end */}

      {/* slide count 09 start */}
      <section className="counter-lobby facility">
        <div className="facility__figure">
          <img src={Coworking} alt="" />
        </div>
        <h1 className="facility__title title-primary">Coworking</h1>
        <div className="scrollbar">
          <div className="count-no">09</div>
          <div className="scrollbar__inner top"></div>
          <div className="scrollbar__inner bottom"></div>
          <div className="total-count">12</div>
        </div>
      </section>
      {/* slide count 09 end*/}

      {/* facility 01 start */}
      <section className="facility-intro one intro-section left-space">
        <div className="inner-section">
          <div className="intro-text-area">
            <h2 className="intro-title">
              Mauris venenatis dignissim aliquet in eget tristique orci
            </h2>
            <h4 className="dsc">
              El Counter Lobby Quisque vitae suscipit justo. Cras fringilla,
              ligula ultricies rutrum consequat, quam dui sagittis enim,
              condimentum euismod nulla nunc a lacus. Vestibulum in ex id elit
              aliquam lacinia. Fusce vitae magna in libero porta porta a nec
              neque.
            </h4>
          </div>
          <div className="intro-figure">
            <img src={FacilityIntro01} alt="" />
          </div>
        </div>
      </section>

      {/*  facility 01 end */}

      {/*  facility 02 start */}
      <section className="facility-intro two intro-section left-space">
        <div className="inner-section">
          <div className="intro-text-area">
            <h2 className="title-primary">
              Mini market
              <span className="title-secondary">Café</span>
              <div className="slice landscape"></div>
            </h2>
            <h4 className="dsc">
              Praesent lobortis posuere sapien, varius imperdiet urna varius
              non. Phasellus eleifend blandit imperdiet. Phasellus augue enim,
              lacinia a posuere nec, feugiat ut justo.
            </h4>
          </div>
          <div className="intro-figure">
            <img src={FacilityIntro02} alt="" />
          </div>
        </div>
      </section>
      {/*  facility 02 end */}

      {/* slide count 11 start */}
      <section className="counter-lobby facility">
        <div className="facility__figure">
          <img src={Coworking} alt="" />
        </div>
        <h1 className="facility__title title-primary">Coworking</h1>
        <div className="scrollbar">
          <div className="count-no">09</div>
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
                Placerat eleifend ligula, Cras in molestie velit
              </h2>
              <h4 className="dsc">
                El Counter Lobby Quisque vitae suscipit justo. Cras fringilla,
                ligula ultricies rutrum consequat, quam dui sagittis enim,
                condimentum euismod nulla nunc a lacus. Vestibulum in ex id elit
                aliquam lacinia. Fusce vitae magna in libero porta porta a nec
                neque.
              </h4>
              <div className="pool-left-figure">
                <img src={PoolFigure01} alt="" />
              </div>
            </div>
            <div className="intro-figure pool-right-figure">
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
            <h2 className="title-primary">Mini market</h2>
            <h4 className="dsc">
              Praesent lobortis posuere sapien, varius imperdiet urna varius
              non. Phasellus eleifend blandit imperdiet. Phasellus augue enim,
              lacinia a posuere nec, feugiat ut justo.
            </h4>
          </div>
          <div className="intro-figure">
            <img src={FacilityIntro02} alt="" />
          </div>
        </div>
      </section>
      {/*  facility 02 end */}
    </>
  );
}
export default AmenitiesHero;
