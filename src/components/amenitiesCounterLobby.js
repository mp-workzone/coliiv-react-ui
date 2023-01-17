// import FacilityIntro01 from "../assets/facility-blog01.jpg";
import Coliiv from "../assets/coliiv.jpg";
import FacilityIntro02 from "../assets/facility-intro02.jpg";
import FacilityIntro03 from "../assets/facility-intro03.jpg";
import CounterLobby01 from "../assets/counter-lobby01.jpg";
import PlantNcircle from "../assets/plantNcircle.png";

function AmenitiesCounterLobby() {
  return (
    <>
      {/* counterLobbyBlog start */}
      <section className="counter-lobby facility negative-space">
        <div className="facility__figure">
          <img src={CounterLobby01} alt="" />
        </div>
        <h1 className="facility__title title-primary">Counter Lobby</h1>
        <div className="scrollbar">
          <div className="count-no">01</div>
          <div className="scrollbar__inner top-part"></div>
          <div className="scrollbar__inner bottom-part"></div>
          <div className="total-count">12</div>
        </div>
      </section>
      {/* counterLobbyBlog start */}

      {/* counterLobbyBlog 01 start */}
      <section className="facility-blog top info-blog left-space">
        <div className="plantNcircle">
          <img src={PlantNcircle} alt="" />
        </div>
        <div className="inner-section">
          <div className="info-blog__text-area">
            <h2 className="info-blog__title facility-text">
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
          <div className="info-blog__figure ">
            <img src={Coliiv} alt="" />
          </div>
        </div>
      </section>

      {/*  counterLobbyBlog 01 end */}

      {/*  counterLobbyBlog 02 start */}
      <section className="facility-blog middle info-blog right-space">
        <div className="inner-section responsive-reverse">
          <div className="info-blog__figure maximum">
            <img src={FacilityIntro02} alt="" />
          </div>
          <div className="info-blog__text-area facility-text">
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
      {/*  counterLobbyBlog 02 end */}

      {/* counterLobbyBlog 03 start */}
      <section className="facility-blog bottom info-blog">
        <div className="container-alt">
          <div className="inner-section">
            <div className="info-blog__text-area facility-text no-space">
              <h2 className="info-blog__title">
                Aliquam commodo sed augue eget congue
              </h2>
              <h4 className="dsc">
                Coliiv es verdadera innovación. Morbi eu nibh non arcu molestie
                ultrices. Vestibulum dictum, Leo sed gravida euismod, quam eros
                maximus urna.
              </h4>
            </div>
            <div className="info-blog__figure  shadow-right">
              <img src={FacilityIntro03} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/*  counterLobbyBlog 03 end */}
    </>
  );
}
export default AmenitiesCounterLobby;
