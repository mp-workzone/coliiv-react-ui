import ColiversImg01 from "../../assets/colivers-img01.webp";
import ColiversImg02 from "../../assets/colivers-img02.webp";
import Leaf from "../../assets/leaf02.webp";
function ColiversFamilyGridView() {
  return (
    <section className="colivers-family">
      <div className="leaf">
        <img src={Leaf} alt="" />
      </div>
      <div className="container-alt">
        <div className="colivers-family__title">
          <h2 className="title-primary colivers-title-primary">
            Como se describe
            <span className="title-secondary colivers-title-secodary">
              nuestra familia colivers
            </span>
          </h2>
        </div>
        <div className="colivers-family__content grid-area">
          <div className="grid-item flex ">
            <div className="title">
              <h3 className="title__main">Tranquilos</h3>
              <h4 className="title__sub dsc">
                Raesent pretium finibus interdum. Vestibulum iaculis justo
                libero, faucibus blandit ante.
              </h4>
            </div>
            <div className="figure">
              <img src={ColiversImg01} alt="" />
            </div>
          </div>
          <div className="grid-item flex">
            <div className="title">
              <h3 className="title__main">optimistas</h3>
              <h4 className="title__sub dsc">
                Proin auctor eleifend diam, in aliquam nisl iaculis eget. Mauris
                eu leo dapibus, fringilla felis quis.
              </h4>
            </div>
            <div className="figure">
              <img src={ColiversImg02} alt="" />
            </div>
          </div>
          <div className="grid-item flex">
            <div className="title">
              <h3 className="title__main">Animalistas</h3>
              <h4 className="title__sub dsc">
                Aliquam neque. Nullam eget ex vitae risus scelerisque
                sollicitudin. Sed ullamcorper lorem.
              </h4>
            </div>
            <div className="figure">
              <img src={ColiversImg02} alt="" />
            </div>
          </div>
          <div className="grid-item flex">
            <div className="title">
              <h3 className="title__main">cultos</h3>
              <h4 className="title__sub dsc">
                Rutrum, nulla erat dapibus erat, a ultrices sem orci eget neque.
                Curabitur tincidunt felis.
              </h4>
            </div>
            <div className="figure">
              <img src={ColiversImg01} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ColiversFamilyGridView;
