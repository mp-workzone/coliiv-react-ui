import { useEffect } from "react";
import EventConcept from "../components/eventConcept";
import EventContact from "../components/eventContact";
import EventHero from "../components/eventHero";
import HeldEvent from "../components/heldEvent";
import UpCommingEvents from "../components/upCommingEvents";
import "../scss/event.scss";
function Event() {
    useEffect(() => {
        document.body.classList.add('header-light')
        return () => {
          document.body.classList.remove('header-light')
        }
      }, []);

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
