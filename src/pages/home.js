// @flow
import Appartments from "../components/appartments";
import Contact from "../components/contact";
import Feature from "../components/feature";
import H2Contact from "../components/h2Contact";
import Hero from "../components/hero";
import HomeCarousel from "../components/homeCarousel";
import Location from "../components/location";
import Partners from "../components/partners";
import Service from "../components/service";
import ServiceTable from "../components/serviceTable";
import "../css/home.css";
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
