import IntroImg from "../../assets/coliver-activity.webp";
function ColiversActivity() {
  return (
    <section className="coliver-activity info-blog">
      <div className="container-alt">
        <div className="inner-section">
          <div className="info-blog__text-area">
            <h2 className="title-primary colivers-title-primary">
              En quÉ trabajan
              <span className="title-secondary colivers-title-secodary">
                nuestros colivers
              </span>
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
                luctus neque dictum scelerisque.
              </span>
            </h4>
          </div>
          <div className="info-blog__figure">
            <img src={IntroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default ColiversActivity;
