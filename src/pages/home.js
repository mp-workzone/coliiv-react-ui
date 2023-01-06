// @flow
import Appartments from "../components/appartments";
import Feature from "../components/feature";
import H2Contact from "../components/h2Contact";
import Hero from "../components/hero";
import Service from "../components/service";
import ServiceTable from "../components/serviceTable";
import PartnerCarousel from "../components/partnerCarousel";
import Location from "../components/location";
import "../css/home.css";
import Partners from "../components/partners";
function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <Service />
      <Appartments />
      <H2Contact />
      <ServiceTable />
      <PartnerCarousel />
      <Partners />
      <Location />
    </>
  );
}

export default Home;
