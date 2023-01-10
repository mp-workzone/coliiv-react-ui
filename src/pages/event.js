import EventHero from "../components/eventHero";
import EventContact from "../components/eventContact";
import "../css/event.css";
import EventConcept from "../components/eventConcept";
import UpCommingEvents from "../components/upCommingEvents";
import HeldEvent from "../components/heldEvent";
function Event() {
  return (
    <>
      <EventHero />
      <EventConcept />
      <UpCommingEvents />
      <HeldEvent />
      <EventContact />
    </>
  );
}
export default Event;
