// import { Link } from "react-router-dom";
import BlogImg01 from "../../assets/blog-img.webp";
import BlogImg02 from "../../assets/blog-img02.webp";
import BlogImg03 from "../../assets/blog-img03.webp";
import BlogImg04 from "../../assets/blog-img04.webp";
import Leaf from "../../assets/leaf03.webp";
import Plant from "../../assets/plant04.webp";
import BlogCarousel from "./blogCarousel";
import BlogHero from "./blogHero";
import BlogItem from "./blogItem";

function BlogContent() {
  let blogData01 = [
    {
      title: "Consectetur adipiscing elit, phasellus dui diam, varius a tellus",
      time: "Prensa - 20 Julio 2022",
      dscription: `<p class="beforeSlice">Nulla a posuere erat. Sed sapien nisl, rhoncus non ipsum ac,vehicula pharetra augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla mollis leo quis ligula varius maximus.</p> <p>Phasellus dolor sem, iaculis id quam quis, aliquam facilisis enim. Proin facilisis viverra sodales. Vestibulum ut efficitur metus. Nulla fringilla non nibh non fermentum.</p>`,
      link: "Leer artÍculo",
      thumb: BlogImg01,
    },
    {
      direction: "changeDirection",
      title: "A lectus. Phasellus condimentum eu diam quis ullamcorper",
      time: "Prensa - 20 Julio 2022",
      dscription:
        "<p>Fusce sit amet sodales libero, sit amet tempor nulla. Etiam ac sapien ante. Donec laoreet iaculis diam sit amet efficitur. Nulla scelerisque, neque in fringilla tincidunt, dui mauris sollicitudin elit, a iaculis erat nisi.</p>",
      link: "Leer artÍculo",
      thumb: BlogImg02,
    },
    {
      class: "bottom-plant",
      sideImg: Plant,
      title: "Sed sed fringilla neque etiam feugiat, felis nec aliquet",
      time: "Prensa - 20 Julio 2022",
      dscription:
        "<p>Elementum libero risus bibendum nibh, eu ornare sapien massa nec odio. Nullam maximus aliquam neque, sit amet semper orci eleifend a. Maecenas fringilla vulputate venenatis quisque tristique dui in felis.</p>",
      link: "Leer artÍculo",
      thumb: BlogImg03,
    },
  ];

  let blogData02 = [
    {
      class: "top-leaf",
      sideImg: Leaf,
      title: "Aenean leo est, facilisis non turpis sed, dictum rutrum ante",
      time: "Prensa - 20 Julio 2022",
      dscription:
        "<p>Sed sed magna rhoncus metus ultrices aliquam nec in sapien. Nulla id iaculis justo, et euismod ante. Integer tristique risus ante. Phasellus tempus vehicula urna, sed feugiat arcu venenatis ac.</p>",
      link: "Leer artÍculo",
      thumb: BlogImg01,
    },
    {
      direction: "changeDirection",
      title: "Ut aliquam venenatis hendrerit in faucibus, ex non volutpat",
      time: "Prensa - 20 Julio 2022",
      dscription:
        "<p>Curabitur vestibulum tristique lectus, nec vehicula felis luctus vitae. Ut leo velit, aliquam nec leo ut, porttitor mollis libero. Maecenas eget maximus eros. In sodales quam ante, sit amet sodales dui.</p>",
      link: "Leer artÍculo",
      thumb: BlogImg02,
    },
    {
      title: "Pellentesque hendrerit consectetur tortor vel laoreet",
      time: "Prensa - 20 Julio 2022",
      dscription:
        "<p>Aenean Ligula Tellus, Efficitur Ut Vehicula Sit Amet, Malesuada Quis Arcu. Pellentesque Suscipit Mollis Urna, Vitae Porta Arcu Imperdiet At. Cras Lectus Neque, Consectetur Sed Purus Porta Congue.</p>",
      link: "Leer artÍculo",
      thumb: BlogImg04,
    },
  ];
  return (
    <>
      <BlogHero />

      {blogData01.map((blog, index) => {
        let CssClass = "middle";
        if (index === 0) {
          CssClass = "top";
        } else if (index === blogData01.length - 1) {
          CssClass = "bottom";
        }
        return <BlogItem blog={blog} key={index} cssClass={CssClass} />;
      })}

      <BlogCarousel />

      {blogData02.map((blog, index) => {
        let CssClass = "middle";
        if (index === 0) {
          CssClass = "top";
        } else if (index === blogData02.length - 1) {
          CssClass = "bottom";
        }
        return <BlogItem blog={blog} key={index} cssClass={CssClass} />;
      })}

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
