import ContentImg01 from "../assets/blog-content-img.jpg";
import ContentImg02 from "../assets/content-img02.jpg";
import ContentImg03 from "../assets/rl-blog-img.jpg";
import { ICON_BACK } from "../utils/icons";
import MainImg from "../assets/blog-details-main.jpg";
function BlogDetailsHero() {
  return (
    <>
      <section className="blog-details-hero">
        <div className="inner-wrapper">
          <a href="/" className="back-link">
            <span className="back-icon">{ICON_BACK}</span>
            Volver al blog
          </a>
          <div className="main-fugure">
            <img src={MainImg} alt="" />
          </div>
          <div className="blog-date">Prensa - 20 Julio 2022</div>
        </div>
      </section>

      {/* blog details main content start */}
      <section className="blog-details-content">
        <div className="inner-wrapper">
          <h2 className="content-title">
            Consectetur adipiscing elit, phasellus dui diam, varius a tellus{" "}
          </h2>
          <h4 className="content-dsc dsc">
            Nulla a posuere erat. Sed sapien nisl, rhoncus non ipsum ac,
            vehicula pharetra augue. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Nulla mollis
            leo quis ligula varius maximus.
            <span className="dsc">
              Phasellus dolor sem, iaculis id quam quis, aliquam facilisis enim.
              Proin facilisis viverra sodales. Vestibulum ut efficitur metus.
              Nulla fringilla non nibh non fermentum.
            </span>
            <span className="dsc">
              Aenean orci dolor, accumsan sed blandit id, accumsan vitae felis.
              Maecenas vitae turpis nibh. Pellentesque sit amet massa posuere,
              auctor augue et, efficitur sem. Phasellus tempus sapien vel libero
              imperdiet, quis porta nunc auctor. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Donec quis diam sit amet felis
              finibus malesuada ut nec risus. Cras lacinia enim tempor purus
              rutrum, non aliquam dolor faucibus quisque.
            </span>
          </h4>
          <div className="content-figure">
            <img src={ContentImg01} alt="" />
          </div>
          <h4 className="content-dsc dsc">
            Fusce dignissim placerat nibh, vitae consequat lacus placerat vitae.
            Morbi egestas et turpis quis accumsan. Donec eros orci, lacinia
            lacinia mollis ut, egestas quis turpis. In maximus quam sed
            malesuada dapibus. Etiam condimentum a nibh a accumsan. Suspendisse
            dapibus, risus in mollis euismod, quam tellus dictum magna, at
            lobortis ex lacus vitae turpis. In maximus, ante quis pharetra
            elementum, ligula dui pharetra sem, at facilisis libero risus a
            felis. Nunc tempus magna vitae massa accumsan malesuada. Etiam
            facilisis, tortor ac convallis sodales, nulla urna ullamcorper
            tortor, eget hendrerit justo eros aliquam odio. Aenean porttitor
            felis enim, id congue neque mattis in. Nunc suscipit turpis et elit
            varius, nec vulputate elit elementum. Suspendisse molestie a risus
            ut interdum. Sed tellus felis, auctor in orci id, aliquam feugiat
            magna. Nulla ultricies ultricies est eget convallis. Ut venenatis,
            erat ut pretium luctus, quam augue gravida ipsum, non rutrum velit
            leo eget est sed mattis semper dapibus.
          </h4>
          <div className="content-grid-area">
            <div className="grid-item">
              <img src={ContentImg02} alt="" />
            </div>
            <div className="grid-item">
              <img src={ContentImg02} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* blog details main content end */}

      {/* relative blog start */}
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
                Phasellus dolor sem, iaculis id quam quis, aliquam facilisis
                enim. Proin facilisis viverra sodales vestibulum ut efficitur
                metus. Nulla fringilla non nibh non fermentum.
              </h4>
              <h5 className="blog-date">Prensa — 27 Julio 2022</h5>
              <a href="/" className="more-link">
                Leer artÍculo
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* relative blog end */}
    </>
  );
}
export default BlogDetailsHero;
