import { useEffect } from "react";
import EventConcept from "../components/event/eventConcept";
import EventContact from "../components/eventContact";
import EventHero from "../components/event/eventHero";
import HeldEvent from "../components/event/heldEvent";
import UpCommingEvents from "../components/event/upCommingEvents";
import "../scss/event.scss";
function Event() {
  useEffect(() => {
    document.body.classList.add("header-light");
    return () => {
      document.body.classList.remove("header-light");
    };
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
