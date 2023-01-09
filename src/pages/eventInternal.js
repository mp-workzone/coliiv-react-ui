import EventContact from "../components/eventContact";
import EventGuests from "../components/eventGuests";
import EventInternalHero from "../components/eventInternalHero";
import EventShedule from "../components/eventShedule";
import RecomendedEvents from "../components/recomededEvents";
import "../css/eventInternal.css";
function EventInternal() {
  return (
    <>
      <EventInternalHero />
      <EventShedule />
      <EventGuests />
      <RecomendedEvents />
      <EventContact />
    </>
  );
}
export default EventInternal;
