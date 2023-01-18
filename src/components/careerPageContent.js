import BuildTogether from "./career/buildTogether";
import CareerGallery from "./career/careerGallery";
import CareerHero from "./career/careerHero";
import CareerIntro from "./career/careerIntro";
import ChooseProject from "./career/chooseProject";
function CareerPageContent() {
  return (
    <>
      <CareerHero />
      <CareerIntro />
      <CareerGallery />
      <BuildTogether />
      <ChooseProject />
    </>
  );
}

export default CareerPageContent;
