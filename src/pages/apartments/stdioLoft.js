import Apartment from "../../assets/apartment-1.webp";
import IntroFigure from "../../assets/stdio-lofg-ab.png";
import StudioLoftHero from "../../assets/stdio-loft.webp";
import StudioLofFeatureFigure from "../../assets/stl-ft-r.webp";
import ApartmentFeatures from "../../components/apartment/apartmentFeatures";
import ApartmentGallery from "../../components/apartment/apartmentGallery";
import ApartmentHero from "../../components/apartment/apartmentHero";
import ApartmentImageBlock from "../../components/apartment/apartmentImageBlock";
import ApartmentIntro from "../../components/apartment/apartmentIntro";
import ApartmentMap from "../../components/apartment/apartmentMap";
import ApartmentMoreSpaces from "../../components/apartment/apartmentMoreSpaces";
import "../../css/apartments.css";

function StdioLoft() {
    let introContent = {
        figure: IntroFigure,
        figureAlt: "",
        figureText: 'SL',
        title: "<span class='has-border'>Disfrútalo</span> todo <span class='alt'>con estilo</span>",
        descroption: "El Studio Loft te ofrece amet, consectetur adipiscing elit. Phasellus vestibulum nisl sed faucibus consequat. Aliquam in leo metus. Fusce at orci auctor ante malesuada feugiat."
    }

    let heroContent = {
        figure: StudioLoftHero,
        figureAlt: "",
        title: "<span>Studio</span><span className='lt'>Loft</span>",
        titleBgText: 'SL',
    }

    let figureContent = {
        src: Apartment,
        alt: "",
    }

    let featuresContent = {
        figure: StudioLofFeatureFigure,
        alt: "",
    }

    return (
        <div className='apartment-page style-1'>

           <ApartmentHero heroContent={heroContent}/>
            <ApartmentIntro introContent={introContent}/>
            <ApartmentImageBlock figure={figureContent} />
            <ApartmentFeatures featuresContent={featuresContent}/>
            <ApartmentGallery/>
            <ApartmentMap/>
            <ApartmentMoreSpaces/>
        </div>
    );
}

export default StdioLoft;
