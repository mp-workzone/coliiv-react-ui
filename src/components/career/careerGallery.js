import GalleryImg01 from "../../assets/gallery-img01.webp";
import GalleryImg02 from "../../assets/gallery-img02.webp";
import GalleryImg03 from "../../assets/gallery-img03.webp";
import GalleryImg04 from "../../assets/gallery-img04.webp";
function CareerGallery() {
  return (
    <section className="gallery-section">
      <div className="container-alt">
        <div className="grid-area">
          <div className="grid-item">
            <div className="gallery-img">
              <img src={GalleryImg01} alt="" />
            </div>
          </div>
          <div className="grid-item span-3">
            <div className="gallery-img">
              <img src={GalleryImg02} alt="" />
            </div>
          </div>
          <div className="grid-item span-3">
            <div className="gallery-img">
              <img src={GalleryImg03} alt="" />
            </div>
          </div>
          <div className="grid-item">
            <div className="gallery-img">
              <img src={GalleryImg04} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CareerGallery;
