import Designs from "../components/team/designs";
import TeamHero from "../components/team/teamHero";
import TeamMembers from "../components/team/teamMembers";
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
