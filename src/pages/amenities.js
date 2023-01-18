import { useEffect } from "react";
import Bar from "../components/amenities/amenitiesBar";
import AmenitiesCounterLobby from "../components/amenities/amenitiesCounterLobby";
import AmenitiesCoworking from "../components/amenities/amenitiesCoworking";
import Gym from "../components/amenities/amenitiesGym";
import Restaurante from "../components/amenities/amenitiesRestaurante";
import Salon from "../components/amenities/amenitiesSalon";
import AmenitiesTerraza from "../components/amenities/amenitiesTerraza";
import "../scss/amenities.scss";
function Amenities() {
  useEffect(() => {
    document.body.classList.add("header-light");
    return () => {
      document.body.classList.remove("header-light");
    };
  }, []);

  return (
    <>
      <AmenitiesCounterLobby />
      <AmenitiesCoworking />
      <AmenitiesTerraza />
      <Restaurante />
      <Bar />
      <Gym />
      <Salon />
    </>
  );
}

export default Amenities;
