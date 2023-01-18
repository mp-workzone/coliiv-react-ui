import IntroImg02 from "../../assets/intro-img02.webp";
function BuildTogether() {
  return (
    <section className="build-together info-blog">
      <div className="container-alt">
        <div className="inner-section">
          <div className="info-blog__text-area">
            <h2 className="title-primary">
              Construir
              <span className="title-secondary">Juntos</span>
            </h2>
            <h4 className="dsc">
              <span className="slice portrait"></span>
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
          <div className="info-blog__figure">
            <img src={IntroImg02} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default BuildTogether;
