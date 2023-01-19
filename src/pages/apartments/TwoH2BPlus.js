import { useEffect } from "react";
import FeatureFigure from "../../assets/2h-2b-feature.webp";
import IntroFigure from "../../assets/2h-2b-plus.webp";
import Apartment from "../../assets/apartment-1.webp";
import HeroFigure from "../../assets/stdio-loft.webp";
import ApartmentFeatures from "../../components/apartment/apartmentFeatures";
import ApartmentGallery from "../../components/apartment/apartmentGallery";
import ApartmentHero from "../../components/apartment/apartmentHero";
import ApartmentImageBlock from "../../components/apartment/apartmentImageBlock";
import ApartmentIntro from "../../components/apartment/apartmentIntro";
import ApartmentMap from "../../components/apartment/apartmentMap";
import ApartmentMoreSpaces from "../../components/apartment/apartmentMoreSpaces";
import "../../scss/apartment.scss";

function TwoH2BPlus() {
  useEffect(() => {
    document.body.classList.add('header-light')
    return () => {
      document.body.classList.remove('header-light')
    }
  }, []);

  let figureContent = {
    src: Apartment,
    alt: "",
  };
  let featuresContent = {
    figure: FeatureFigure,
    alt: "",
  };

  let introContent = {
    figure: IntroFigure,
    figureAlt: "",
    figureText: 'A2<span class="sub">+</span>',
    title:
      " Un nuevo hogar todo <span class='alt title-secondary'>una nueva vida</span>",
    descroption:
      "Apartamento te ofrece amet, consectetur adipiscing elit. Phasellus vestibulum nisl sed faucibus consequat. Aliquam in leo metus. Fusce at orci auctor ante malesuada feugiat.",
  };

  let heroContent = {
    figure: HeroFigure,
    figureAlt: "",
    title: "<span>Apartamento</span><span className='lt'>2H - 2B PLUS</span>",
    titleBgText: 'A2<span className="sub">+</span>',
  };

  return (
    <div className="apartment-page style-4">
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

export default TwoH2BPlus;
