// @flow
import Appartments from "../components/appartments";
import Feature from "../components/feature";
import H2Contact from "../components/h2Contact";
import Hero from "../components/hero";
import Service from "../components/service";
import ServiceTable from "../components/serviceTable";
import HomeCarousel from "../components/homeCarousel";
import Location from "../components/location";
import "../css/home.css";
import Partners from "../components/partners";
import Contact from "../components/contact";
function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <Service />
      <Appartments />
      <H2Contact />
      <ServiceTable />
      <HomeCarousel />
      <Partners />
      <Location />
      <Contact />
    </>
  );
}

export default Home;
