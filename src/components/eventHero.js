import HeroImg from "../assets/hero-img02.webp";
function EventHero() {
  return (
    <section className="event-hero">
      <div className="bg-img">
        <img src={HeroImg} alt="" />
      </div>
      <h1 className="hero-title">EVENTOS</h1>
    </section>
  );
}
export default EventHero;
