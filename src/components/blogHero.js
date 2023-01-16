import BlogImg01 from "../assets/blog-img.jpg";
import BlogImg02 from "../assets/blog-img02.jpg";
import BlogImg03 from "../assets/blog-img03.jpg";
import BlogImg04 from "../assets/blog-img04.jpg";
import HeroImg from "../assets/blog-hero-img.jpg";
import BlogCarousel from "./blogCarousel";
function BlogHero() {
  return (
    <>
      <section className="blgo-hero hero">
        <div className="hero__img">
          <img src={HeroImg} alt="" />
        </div>
        <h1 className="hero__title">BLOG</h1>
      </section>

      {/* blog 01 start */}
      <section className="info-blog blog blog01 top">
        <div className="container-alt">
          <div className="inner-section">
            <div className="info-blog__text-area">
              <h2 className="info-blog__title">
                Consectetur adipiscing elit, phasellus dui diam, varius a tellus
              </h2>
              <h4 className="blog-time">Prensa - 20 Julio 2022</h4>
              <h5 className="dsc">
                Nulla a posuere erat. Sed sapien nisl, rhoncus non ipsum ac,
                vehicula pharetra augue. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Nulla
                mollis leo quis ligula varius maximus.
                <span className="slice portrait"></span>
                <span className="dsc">
                  Phasellus dolor sem, iaculis id quam quis, aliquam facilisis
                  enim. Proin facilisis viverra sodales. Vestibulum ut efficitur
                  metus. Nulla fringilla non nibh non fermentum.
                </span>
              </h5>
              <h4 className="more-link">Leer artÍculo</h4>
            </div>
            <div className="info-blog__figure">
              <img src={BlogImg01} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* blog 01 end */}

      {/* blog 02 start */}
      <section className="info-blog blog middle">
        <div className="container-alt">
          <div className="inner-section">
            <div className="info-blog__figure">
              <img src={BlogImg02} alt="" />
            </div>
            <div className="info-blog__text-area">
              <h2 className="info-blog__title">
                A lectus. Phasellus condimentum eu diam quis ullamcorper
              </h2>
              <h4 className="blog-time">Prensa - 20 Julio 2022</h4>
              <h5 className="dsc">
                Fusce sit amet sodales libero, sit amet tempor nulla. Etiam ac
                sapien ante. Donec laoreet iaculis diam sit amet efficitur.
                Nulla scelerisque, neque in fringilla tincidunt, dui mauris
                sollicitudin elit, a iaculis erat nisi.
              </h5>
              <h4 className="more-link">Leer artÍculo</h4>
            </div>
          </div>
        </div>
      </section>
      {/* blog 02 end */}

      {/* blog 03 start */}
      <section className="info-blog blog bottom">
        <div className="container-alt">
          <div className="inner-section">
            <div className="info-blog__text-area">
              <h2 className="info-blog__title">
                Sed sed fringilla neque etiam feugiat, felis nec aliquet
              </h2>
              <h4 className="blog-time">Prensa - 20 Julio 2022</h4>
              <h5 className="dsc">
                Elementum libero risus bibendum nibh, eu ornare sapien massa nec
                odio. Nullam maximus aliquam neque, sit amet semper orci
                eleifend a. Maecenas fringilla vulputate venenatis quisque
                tristique dui in felis.
              </h5>
              <h4 className="more-link">Leer artÍculo</h4>
            </div>
            <div className="info-blog__figure">
              <img src={BlogImg03} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* blog 03 end */}

      <BlogCarousel />

      {/* blog 04 start */}
      <section className="info-blog blog top">
        <div className="container-alt">
          <div className="inner-section">
            <div className="info-blog__text-area">
              <h2 className="info-blog__title">
                Aenean leo est, facilisis non turpis sed, dictum rutrum ante
              </h2>
              <h4 className="blog-time">Prensa - 20 Julio 2022</h4>
              <h5 className="dsc">
                Sed sed magna rhoncus metus ultrices aliquam nec in sapien.
                Nulla id iaculis justo, et euismod ante. Integer tristique risus
                ante. Phasellus tempus vehicula urna, sed feugiat arcu venenatis
                ac.
              </h5>
              <h4 className="more-link">Leer artÍculo</h4>
            </div>
            <div className="info-blog__figure">
              <img src={BlogImg01} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* blog 04 end */}
      {/* blog 05 start */}
      <section className="info-blog blog middle">
        <div className="container-alt">
          <div className="inner-section">
            <div className="info-blog__figure">
              <img src={BlogImg02} alt="" />
            </div>
            <div className="info-blog__text-area">
              <h2 className="info-blog__title">
                Ut aliquam venenatis hendrerit in faucibus, ex non volutpat
                <span className="slice landscape"></span>
              </h2>
              <h4 className="blog-time">Prensa - 20 Julio 2022</h4>
              <h5 className="dsc">
                Curabitur vestibulum tristique lectus, nec vehicula felis luctus
                vitae. Ut leo velit, aliquam nec leo ut, porttitor mollis
                libero. Maecenas eget maximus eros. In sodales quam ante, sit
                amet sodales dui.
              </h5>
              <h4 className="more-link">Leer artÍculo</h4>
            </div>
          </div>
        </div>
      </section>
      {/* blog 05 end */}
      {/* blog 06 start */}
      <section className="info-blog blog bottom">
        <div className="container-alt">
          <div className="inner-section">
            <div className="info-blog__text-area">
              <h2 className="info-blog__title">
                Pellentesque hendrerit consectetur tortor vel laoreet
              </h2>
              <h4 className="blog-time">Prensa - 20 Julio 2022</h4>
              <h5 className="dsc">
                Aenean ligula tellus, efficitur ut vehicula sit amet, malesuada
                quis arcu. Pellentesque suscipit mollis urna, vitae porta arcu
                imperdiet at. Cras lectus neque, consectetur sed purus porta
                congue.
              </h5>
              <h4 className="more-link">Leer artÍculo</h4>
            </div>
            <div className="info-blog__figure">
              <img src={BlogImg04} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* blog 06 end */}

      {/* pagination start */}
      <div className="blog-pagination">
        <ul>
          <li>
            <a className="active" href="/">
              1
            </a>
          </li>
          <li>
            <a href="/">2</a>
          </li>
          <li>
            <a href="/">3</a>
          </li>
          <li>
            <a href="/">...</a>
          </li>
        </ul>
      </div>

      {/* pagination end */}
    </>
  );
}
export default BlogHero;
