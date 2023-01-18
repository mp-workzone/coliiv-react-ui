import ContentImg03 from "../../assets/rl-blog-img.webp";
function RelativeBlog() {
  return (
    <section className="relative-blogs">
      <div className="inner-wrapper">
        <h2 className="title-secondary">Artículo relacionado</h2>
        <div className="blog">
          <div className="blog-figure">
            <img src={ContentImg03} alt="" />
          </div>
          <div className="blog-content">
            <h2 className="title">El futuro del sector co-living </h2>
            <h4 className="dsc blog-dsc">
              Phasellus dolor sem, iaculis id quam quis, aliquam facilisis enim.
              Proin facilisis viverra sodales vestibulum ut efficitur metus.
              Nulla fringilla non nibh non fermentum.
            </h4>
            <h5 className="blog-date">Prensa — 27 Julio 2022</h5>
            <a href="/" className="more-link">
              Leer artÍculo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default RelativeBlog;
