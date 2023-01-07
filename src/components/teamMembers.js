import Member from "../assets/member.jpg";
import { ICON_ADD } from "../utils/icons";
function TeamMembers() {
  return (
    <section className="team-members">
      <div className="container">
        <h2 className="team-members__title">Equipo</h2>
        <div className="grid-area">
          <div className="team-member">
            <div className="team-member__img">
              <img src={Member} alt="" />
              <a href="/" className="add-icon">
                {ICON_ADD}
              </a>
            </div>
            <h3 className="team-member__name">
              <a href="/"> Nullam Eu</a>
            </h3>
            <h4 className="team-member__profession">Arquitecto</h4>
          </div>
          <div className="team-member">
            <div className="team-member__img">
              <img src={Member} alt="" />
              <a href="/" className="add-icon">
                {ICON_ADD}
              </a>
            </div>
            <h3 className="team-member__name">
              <a href="/"> Nullam Eu</a>
            </h3>
            <h4 className="team-member__profession">Arquitecto</h4>
          </div>
          <div className="team-member">
            <div className="team-member__img">
              <img src={Member} alt="" />
              <a href="/" className="add-icon">
                {ICON_ADD}
              </a>
            </div>
            <h3 className="team-member__name">
              <a href="/"> Nullam Eu</a>
            </h3>
            <h4 className="team-member__profession">Arquitecto</h4>
          </div>
          <div className="team-member">
            <div className="team-member__img">
              <img src={Member} alt="" />
              <a href="/" className="add-icon">
                {ICON_ADD}
              </a>
            </div>
            <h3 className="team-member__name">
              <a href="/"> Nullam Eu</a>
            </h3>
            <h4 className="team-member__profession">Arquitecto</h4>
          </div>
          <div className="team-member">
            <div className="team-member__img">
              <img src={Member} alt="" />
              <a href="/" className="add-icon">
                {ICON_ADD}
              </a>
            </div>
            <h3 className="team-member__name">
              <a href="/"> Nullam Eu</a>
            </h3>
            <h4 className="team-member__profession">Arquitecto</h4>
          </div>
          <div className="team-member">
            <div className="team-member__img">
              <img src={Member} alt="" />
              <a href="/" className="add-icon">
                {ICON_ADD}
              </a>
            </div>
            <h3 className="team-member__name">
              <a href="/"> Nullam Eu</a>
            </h3>
            <h4 className="team-member__profession">Arquitecto</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
export default TeamMembers;
