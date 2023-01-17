import featureFigure from "../../assets/1h-1b-features.webp";
import ApartmentFigure from "../../assets/apartment-1.webp";
import AboutFigure from "../../assets/shape-1h-1b.webp";
import ApartmentHeroFigure from "../../assets/stdio-loft.webp";
import ApartmentFeatures from "../../components/apartment/apartmentFeatures";
import ApartmentGallery from "../../components/apartment/apartmentGallery";
import ApartmentHero from "../../components/apartment/apartmentHero";
import ApartmentImageBlock from "../../components/apartment/apartmentImageBlock";
import ApartmentIntro from "../../components/apartment/apartmentIntro";
import ApartmentMap from "../../components/apartment/apartmentMap";
import ApartmentMoreSpaces from "../../components/apartment/apartmentMoreSpaces";
import "../../css/apartments.css";

function OneHOneB() {
  let heroContent = {
    figure: ApartmentHeroFigure,
    figureAlt: "",
    title: "<span>Apartamento</span><span className='lt'>1H - 1B</span>",
    titleBgText: "A1",
  };

  let introContent = {
    figure: AboutFigure,
    figureAlt: "",
    figureText: "A1",
    title:
      "El espacio todo <span class='alt title-secondary'>perfecto para ti</span>",
    titleClass: "has-circle",
    descroption:
      "Apartamento te ofrece amet, consectetur adipiscing elit. Phasellus vestibulum nisl sed faucibus consequat. Aliquam in leo metus. Fusce at orci auctor ante malesuada feugiat.",
  };

  let figureContent = {
    src: ApartmentFigure,
    alt: "",
  };

  let featuresContent = {
    figure: featureFigure,
    alt: "",
  };

  return (
    <div className="apartment-page style-2">
      <ApartmentHero heroContent={heroContent} />
      <ApartmentIntro introContent={introContent} />
      <ApartmentImageBlock figure={figureContent} />
      <ApartmentFeatures featuresContent={featuresContent} />
      <ApartmentGallery />
      <ApartmentMap />
      <ApartmentMoreSpaces />
    </div>
  );
}

export default OneHOneB;
