import HeroImg from "../../assets/colivers-hero.webp";
function ColiversHero() {
  return (
    <section className="colivers-hero hero">
      <div className="hero__img">
        <img src={HeroImg} alt="" />
      </div>
      <h1 className="hero__title">colivers</h1>
    </section>
  );
}
export default ColiversHero;
