import { Link } from "react-router-dom";
import HeroImg from "../../assets/blog-hero-img.webp";
import BlogImg01 from "../../assets/blog-img.webp";
import BlogImg02 from "../../assets/blog-img02.webp";
import BlogImg03 from "../../assets/blog-img03.webp";
import BlogImg04 from "../../assets/blog-img04.webp";
import Leaf from "../../assets/leaf03.webp";
import Plant from "../../assets/plant04.webp";
import BlogCarousel from "./blogCarousel";

function BlogContent() {
  return (
    <>
      <section className="blgo-hero hero">
        <div className="hero__img">
          <img src={HeroImg} alt="" />
        </div>
        <h1 className="hero__title">BLOG</h1>
      </section>

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
              <Link to="/blog/blog-details" className="more-link">
                Leer artÍculo
              </Link>
            </div>
            <div className="info-blog__figure">
              <img src={BlogImg01} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="info-blog blog middle">
        <div className="container-alt">
          <div className="inner-section responsive-reverse">
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
              <Link to="/blog/blog-details" className="more-link">
                Leer artÍculo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="info-blog blog bottom">
        <div className="bottom-plant">
          <img src={Plant} alt="" />
        </div>
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
              <Link to="/blog/blog-details" className="more-link">
                Leer artÍculo
              </Link>
            </div>
            <div className="info-blog__figure">
              <img src={BlogImg03} alt="" />
            </div>
          </div>
        </div>
      </section>

      <BlogCarousel />

      <section className="info-blog blog top ">
        <div className="top-leaf">
          <img src={Leaf} alt="" />
        </div>
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
              <Link to="/blog/blog-details" className="more-link">
                Leer artÍculo
              </Link>
            </div>
            <div className="info-blog__figure">
              <img src={BlogImg01} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="info-blog blog middle">
        <div className="container-alt">
          <div className="inner-section responsive-reverse">
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
              <Link to="/blog/blog-details" className="more-link">
                Leer artÍculo
              </Link>
            </div>
          </div>
        </div>
      </section>

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
              <Link to="/blog/blog-details" className="more-link">
                Leer artÍculo
              </Link>
            </div>
            <div className="info-blog__figure">
              <img src={BlogImg04} alt="" />
            </div>
          </div>
        </div>
      </section>

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
    </>
  );
}

export default BlogContent;
