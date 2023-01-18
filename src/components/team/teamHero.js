import Leaf from "../../assets/leaf04.webp";
import { ICON_SCROLL_DOWN } from "../../utils/icons";
function TeamHero() {
  return (
    <section className="team-hero">
      <div className="leaf">
        <img src={Leaf} alt="" />
      </div>
      <h1 className="team-hero__title">Nosotros</h1>
      <h4 className="dsc sub-title-primary">
        Ut varius lorem id tincidunt ornare. Aenean dui nisl, rhoncus ut arcu
        eget, pharetra facilisis nulla. Nunc a elit vitae enim aliquam aliquet.
        Maecenas eleifend mi enim, vel elementum purus tristique sit amet.
        Quisque id velit id Leo gravida vulputate semper a neque. Mauris auctor
        ligula at ex consequat ullamcorper. Quisque ipsum nisl, dignissim quis
        tempor eu, vestibulum in felis. Suspendisse potenti. Sed quis diam nec
        sapien lobortis ornare.
        <span className="slice portrait"></span>
      </h4>
      <a href="/" className="scroll-down">
        {ICON_SCROLL_DOWN}
      </a>
    </section>
  );
}
export default TeamHero;
