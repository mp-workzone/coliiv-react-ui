import ExploreProject from "./franchises/exploreProject";
import FranchisesHero from "./franchises/franchisesHero";
import InvestmentFacilities from "./franchises/investmentFacilities";
import InvestmentFactor from "./franchises/investmentFactor";
import MktPotentialNinvestment from "./franchises/mktPotentialNinvestment";
import OurPartners from "./franchises/ourPartners";
function FranchisesPageContent() {
  return (
    <>
      <FranchisesHero />
      <InvestmentFactor />
      <InvestmentFacilities />
      <MktPotentialNinvestment />
      <ExploreProject />
      <OurPartners />
    </>
  );
}

export default FranchisesPageContent;
