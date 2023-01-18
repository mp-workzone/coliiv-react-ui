import FavSportImg from "../../assets/fav-sport.jpg";
function ColiversFavSport() {
  return (
    <section className="fav-sport">
      <div className="container-alt">
        <div className="fav-sport__title">
          <h2 className="title-primary colivers-title-primary">
            deporte favorito
            <span className="title-secondary colivers-title-secodary">
              de nuestros colivers
            </span>
          </h2>
        </div>
        <div className="fav-sport__content">
          <h4 className="fav-sport__dsc dsc">
            Donec nisl magna, blandit nec mauris sed, aliquam aliquam eros.
            Proin et metus consequat, facilisis nisi et, tincidunt ante. Integer
            interdum euismod mollis, phasellus viverra vitae magna at accumsan.
            Nam eu ante sodales, malesuada felis sed, ullamcorper orci.
            Vestibulum placerat quis erat ultricies fermentum. Suspendisse
            nibnh.
            <span className="dsc">
              Maecenas ut lectus at mi pretium egestas ac hendrerit Leo.
              Curabitur pellentesque elit purus, tristique interdum odio
              tristique vel. Cras id rhoncus orci. Morbi finibus porta tortor id
              porttitor. Vestibulum aliquet et lacus sit amet sodales. Vivamus
              interdum tortor auctor mauris finibus maximus. Donec sed erat
              pretium, interdum sem sit amet, luctus lorem. In consectetur vitae
              quam eget hendrerit.
            </span>
          </h4>
          <div className="fav-sport__figure">
            <img src={FavSportImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default ColiversFavSport;
