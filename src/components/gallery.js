function Gallery() {
  return (
    <section className="home-gallery">
      <div className="leaf">
        <img src="../assets/leaf02.png" alt="" />
      </div>
      im
      <div className="container">
        <div className="gallery-content">
          <div className="title">
            <h2 className="title__primary">UNA MEZCLA PERFECTA ENTRE LO</h2>
            <h2 className="title__secondary">SOFISTICADO Y LO CONTEMPORáNEO</h2>
          </div>
          <h4 className="dsc">
            En Coliiv tenemos cuatro tipos de espacios que puedes habitar y
            disfrutar.
          </h4>

          <a href="/" className="more">
            VER TODOS
          </a>

          {/* .gallery-items>.gallery-item>img+h3.item-title-primary{Studio}+h3.item-title-secondary{loft}+.view-btn> */}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
