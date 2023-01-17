import Restaurant from "../assets/restaurant.webp";
function Restaurante() {
  return (
    <>
      {/* restaurante start */}
      <section className="counter-lobby facility facility-after">
        <div className="facility__figure">
          <img src={Restaurant} alt="" />
        </div>
        <h1 className="facility__title title-primary">Restaurante</h1>
        <div className="scrollbar">
          <div className="count-no">07</div>
          <div className="scrollbar__inner top-part"></div>
          <div className="scrollbar__inner bottom-part"></div>
          <div className="total-count">12</div>
        </div>
      </section>
      {/* restaurante end*/}

      {/* restauranteBlog01 start */}
      <section className="facility-blog top info-blog left-space">
        <div className="inner-section">
          <div className="info-blog__text-area">
            <h2 className="info-blog__title">
              hendrerit aliquam erat in eros sem, posuere nec sollicitudin
              consectetur.
            </h2>
            <h4 className="dsc">
              Dtopc nisl magna, blandit nec mauris sed, aliquam aliquam eros.
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
          <div className="info-blog__figure maximum min-height">
            <img src={Restaurant} alt="" />
          </div>
        </div>
      </section>

      {/*  restauranteBlog01 end */}
    </>
  );
}
export default Restaurante;
