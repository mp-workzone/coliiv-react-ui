import { useEffect } from "react";
import Bar from "../components/amenitiesBar";
import AmenitiesCounterLobby from "../components/amenitiesCounterLobby";
import AmenitiesCoworking from "../components/amenitiesCoworking";
import Gym from "../components/amenitiesGym";
import Restaurante from "../components/amenitiesRestaurante";
import Salon from "../components/amenitiesSalon";
import AmenitiesTerraza from "../components/amenitiesTerraza";
import "../css/amenities.css";
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
