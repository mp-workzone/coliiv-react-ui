import { useEffect } from "react";
import { default as ApartmentFigure } from "../../assets/apartment-1.webp";
import IntroFigure from "../../assets/shape-1h-1b.webp";
import StudioLoftHero from "../../assets/stdio-loft.webp";
import StudioLofFeatureFigure from "../../assets/stl-ft-r.webp";
import ApartmentFeatures from "../../components/apartment/apartmentFeatures";
import ApartmentGallery from "../../components/apartment/apartmentGallery";
import ApartmentHero from "../../components/apartment/apartmentHero";
import ApartmentImageBlock from "../../components/apartment/apartmentImageBlock";
import ApartmentIntro from "../../components/apartment/apartmentIntro";
import ApartmentMap from "../../components/apartment/apartmentMap";
import ApartmentMoreSpaces from "../../components/apartment/apartmentMoreSpaces";
import "../../scss/apartments.scss";

function OneHOneB() {
  useEffect(() => {
    document.body.classList.add('header-light')
    return () => {
      document.body.classList.remove('header-light')
    }
  }, []);

  let heroContent = {
    figure: StudioLoftHero,
    figureAlt: "",
    title: "<span>Apartamento</span><span className='lt'>2H - 2B</span>",
    titleBgText: "A2",
  };

  let introContent = {
    figure: IntroFigure,
    figureAlt: "",
    figureText: "A2",
    title:
      " Un nuevo hogar todo <span class='alt title-secondary'>una nueva vida</span>",
    descroption:
      "Apartamento te ofrece amet, consectetur adipiscing elit. Phasellus vestibulum nisl sed faucibus consequat. Aliquam in leo metus. Fusce at orci auctor ante malesuada feugiat.",
  };

  let figureContent = {
    src: ApartmentFigure,
    alt: "",
  };
  let featuresContent = {
    figure: StudioLofFeatureFigure,
    alt: "",
  };

  return (
    <div className="apartment-page style-3">
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
