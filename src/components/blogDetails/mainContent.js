import ContentImg01 from "../../assets/blog-content-img.jpg";
import ContentImg02 from "../../assets/content-img02.webp";
function MainContent() {
  return (
    <article className="blog-details-content">
      <div className="inner-wrapper">
        <h2 className="content-title">
          Consectetur adipiscing elit, phasellus dui diam, varius a tellus
        </h2>
        <div className="entry-content">
          <p>
            Nulla a posuere erat. Sed sapien nisl, rhoncus non ipsum ac,
            vehicula pharetra augue. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Nulla mollis
            leo quis ligula varius maximus.
          </p>
          <p>
            Phasellus dolor sem, iaculis id quam quis, aliquam facilisis enim.
            Proin facilisis viverra sodales. Vestibulum ut efficitur metus.
            Nulla fringilla non nibh non fermentum.
          </p>
          <p>
            Aenean orci dolor, accumsan sed blandit id, accumsan vitae felis.
            Maecenas vitae turpis nibh. Pellentesque sit amet massa posuere,
            auctor augue et, efficitur sem. Phasellus tempus sapien vel libero
            imperdiet, quis porta nunc auctor. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec quis diam sit amet felis finibus
            malesuada ut nec risus. Cras lacinia enim tempor purus rutrum, non
            aliquam dolor faucibus quisque.
          </p>

          <figure>
            <img src={ContentImg01} alt="" />
          </figure>
          <p>
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
          </p>
          <div className="row">
            <div className="col">
              <img src={ContentImg02} alt="" />
            </div>
            <div className="col">
              <img src={ContentImg02} alt="" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
export default MainContent;
