import Member from "../../assets/member.webp";
import { ICON_ADD } from "../../utils/icons";
function TeamMembers() {
  let teamMembers = [
    {
      name: "Nullam Eu",
      designation: "Arquitecto",
    },
    {
      name: "Nullam Eu",
      designation: "Arquitecto",
    },
    {
      name: "Nullam Eu",
      designation: "Arquitecto",
    },
    {
      name: "Nullam Eu",
      designation: "Arquitecto",
    },
    {
      name: "Nullam Eu",
      designation: "Arquitecto",
    },
    {
      name: "Nullam Eu",
      designation: "Arquitecto",
    },
    {
      name: "Nullam Eu",
      designation: "Arquitecto",
    },
    {
      name: "Nullam Eu",
      designation: "Arquitecto",
    },
    {
      name: "Nullam Eu",
      designation: "Arquitecto",
    },
  ];
  return (
    <section className="team-members">
      <div className="container">
        <h2 className="team-members__title main-title">Equipo</h2>
        <div className="grid-area">
          {teamMembers.map((item, index) => {
            return (
              <div key={index} className="team-member">
                <div className="team-member__img">
                  <img src={Member} alt="" />
                  <div className="add-icon">{ICON_ADD}</div>
                </div>
                <h3 className="team-member__name">{item.name}</h3>
                <h4 className="team-member__profession">{item.designation}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TeamMembers;
