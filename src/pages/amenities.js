import Bar from "../components/amenitiesBar";
import AmenitiesCounterLobby from "../components/amenitiesCounterLobby";
import AmenitiesCoworking from "../components/amenitiesCoworking";
import Gym from "../components/amenitiesGym";
import Restaurante from "../components/amenitiesRestaurante";
import Salon from "../components/amenitiesSalon";
import AmenitiesTerraza from "../components/amenitiesTerraza";
import "../css/amenities.css";
function Amenities() {
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
