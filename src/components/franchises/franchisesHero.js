import FranchisesHeroImg from "../../assets/franchiseshero-img.webp";
function FranchisesHero() {
  return (
    <section className="franchises-hero hero">
      <div className="hero__img">
        <img src={FranchisesHeroImg} alt="" />
      </div>
      <h1 className="hero__title hero-title">franquicias</h1>
    </section>
  );
}
export default FranchisesHero;
