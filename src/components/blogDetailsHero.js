import MainImg from "../assets/blog-details-main.jpg";

import { ICON_BACK } from "../utils/icons";
function BlogDetailsHero() {
  return (
    <>
      <section className="blog-details-hero">
        <div className="inner-wrapper">
          <a href="/" className="back-link">
            <span className="back-icon">{ICON_BACK}</span>
            Volver al blog
          </a>
          <div className="main-figure">
            <img src={MainImg} alt="" />
          </div>
          <div className="blog-date">Prensa - 20 Julio 2022</div>
        </div>
      </section>
    </>
  );
}
export default BlogDetailsHero;
