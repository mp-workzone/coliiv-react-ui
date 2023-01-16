import Coworking from "../assets/coworking.jpg";
import Leaf from "../assets/leaf06.png";
import ZoomRooms from "../assets/zoomRooms.jpg";

function AmenitiesCoworking() {
  return (
    <>
      {/* coworking start */}
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
      {/* coworking end*/}

      {/* coworkingBlog 01 start */}
      <section className="facility-blog top info-blog left-space">
        <div className="inner-section">
          <div className="info-blog__text-area facility-text">
            <h2 className="info-blog__title">
              <span className="slice portrait coworking-portrait"></span>
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
          <div className="info-blog__figure min-height">
            <img src={Coworking} alt="" />
          </div>
        </div>
      </section>

      {/*  coworkingBlog 01 end */}

      {/*  coworkingBlog 02 start */}
      <section className="facility-blog bottom info-blog right-space">
        <div className="zoom-leaf">
          <img src={Leaf} alt="" />
        </div>
        <div className="inner-section responsive-reverse">
          <div className="info-blog__figure maximum">
            <img src={ZoomRooms} alt="" />
          </div>
          <div className="info-blog__text-area facility-text">
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
      {/* coworkingBlog 02 end */}
    </>
  );
}

export default AmenitiesCoworking;
