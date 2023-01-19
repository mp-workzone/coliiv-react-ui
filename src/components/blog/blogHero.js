import HeroImg from "../../assets/blog-hero-img.webp";
function BlogHero() {
  return (
    <section className="blgo-hero hero">
      <div className="hero__img">
        <img src={HeroImg} alt="" />
      </div>
      <h1 className="hero__title">BLOG</h1>
    </section>
  );
}
export default BlogHero;
