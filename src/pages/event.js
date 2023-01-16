import EventConcept from "../components/eventConcept";
import EventContact from "../components/eventContact";
import EventHero from "../components/eventHero";
import HeldEvent from "../components/heldEvent";
import UpCommingEvents from "../components/upCommingEvents";
import "../css/event.css";
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
