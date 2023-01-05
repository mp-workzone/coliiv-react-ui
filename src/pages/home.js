// @flow
import Gallery from "../components/gallery";
import Header from "../components/header";
import Hero from "../components/hero";
import Service from "../components/service";
import Vdo_area from "../components/vdo_area";
function Home() {
    return (
        <>
            <Header />,
            <Hero />,
            <Vdo_area />,
            <Service />,
            <Gallery />
        </>
    );
}

export default Home;
