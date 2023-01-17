import Img from "../assets/concept-img.webp";
import Leaf from "../assets/leaf05.webp";
function EventConcept() {
  return (
    <section className="event-concept">
      <div className="leaf">
        <img src={Leaf} alt="" />
      </div>
      <div className="container-alt">
        <div className="inner-section">
          <div className="content">
            <h3 className="content__title">
              Aliquam commodo sed augue eget congue
            </h3>
            <h4 className="content__dec">
              Donec nisl magna, blandit nec mauris sed, aliquam aliquam eros.
              Proin et metus consequat, facilisis nisi et, tincidunt ante.
              Integer interdum euismod mollis.
              <span className="content__dsc">
                Phasellus viverra vitae magna at accumsan. Nam eu ante sodales,
                malesuada felis sed, ullamcorper orci. Vestibulum placerat quis
                erat ultricies fermentum. Suspendisse nibh turpis, sagittis
                feugiat lacus feugiat, sodales dapibus lorem. Praesent viverra
                luctus neque dictum scelerisque.
              </span>
            </h4>
          </div>
          <div className="concept-figute">
            <img src={Img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default EventConcept;
