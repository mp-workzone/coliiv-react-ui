import FavFoodImg from "../../assets/fav-food.jpg";
function ColiversFavFood() {
  return (
    <section className="colivers-fav-food">
      <div className="container">
        <h2 className="title-primary colivers-title-primary">
          ¿Cuál es la comida favorita
          <span className="title-secondary colivers-title-secodary">
            de nuestra familia colivers?
          </span>
        </h2>
        <div className="inner-content">
          <div className="figure-area">
            <img src={FavFoodImg} alt="" />
          </div>
          <h4 className="dsc">
            Fusce ultricies lectus turpis, eu dictum sem dictum vitae. Duis eu
            ornare nulla. Nunc fringilla justo ut felis porta, a suscipit velit
            eleifend. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Vivamus lacinia turpis ullamcorper risus vehicula, lacinia
            eleifend nulla molestie.
            <span className="dsc">
              Mauris faucibus justo ac malesuada sollicitudin. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Vivamus congue sapien metus, a auctor lectus tempus
              et. Maecenas ultrices, lorem sed ultrices ullamcorper, tellus nisl
              pulvinar quam, pulvinar elementum erat risus in lectus.
            </span>
          </h4>
        </div>
      </div>
    </section>
  );
}
export default ColiversFavFood;
