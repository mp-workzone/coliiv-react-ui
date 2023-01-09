import EventHero from "../components/eventHero";
import EventContact from "../components/eventContact";
import "../css/event.css";
import EventConcept from "../components/eventConcept";
import UpCommingEvents from "../components/upCommingEvents";
function Event() {
  return (
    <>
      <EventHero />
      <EventConcept />
      <UpCommingEvents />
      <EventContact />
    </>
  );
}
export default Event;
