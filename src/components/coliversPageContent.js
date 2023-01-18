import ColiversActivity from "./colivers/coliversActivity";

import ColiversFamily from "./colivers/coliversFamily";
import ColiversFamilyGridView from "./colivers/coliversFamilyGridView";
import ColiversFavFood from "./colivers/coliversFavFood";
import ColiversFavSport from "./colivers/coliversFavSport";

import ColiversHero from "./colivers/coliversHero";
import ColiversIntro from "./colivers/coliversIntro";
function ColiversPageContent() {
  return (
    <>
      <ColiversHero />
      <ColiversIntro />
      <ColiversFamily />
      <ColiversActivity />
      <ColiversFavFood />
      <ColiversFavSport />
      <ColiversFamilyGridView />
    </>
  );
}

export default ColiversPageContent;
