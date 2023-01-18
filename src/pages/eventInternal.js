import EventContact from "../components/eventContact";
import EventGuests from "../components/eventInternal/eventGuests";
import EventInternalHero from "../components/eventInternal/eventInternalHero";
import EventShedule from "../components/eventInternal/eventShedule";
import RecomendedEvents from "../components/eventInternal/recomededEvents";
import "../scss/eventInternal.scss";
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
