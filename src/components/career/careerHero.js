import CareerHeroImg from "../../assets/career-hero.webp";
function CareerHero() {
  return (
    <section className="career-hero hero">
      <div className="hero__img">
        <img src={CareerHeroImg} alt="" />
      </div>
      <h2 className="hero__title title-primary">CARRERA</h2>
    </section>
  );
}
export default CareerHero;
