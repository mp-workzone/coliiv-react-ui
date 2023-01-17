import Designs from "../components/designs";
import TeamHero from "../components/teamHero";
import TeamMembers from "../components/teamMembers";
import "../scss/team.scss";

function Team() {
  return (
    <>
      <TeamHero />
      <Designs />
      <TeamMembers />
    </>
  );
}

export default Team;
