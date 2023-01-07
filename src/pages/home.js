// @flow
import Appartments from "../components/appartments";
import Feature from "../components/feature";
import H2Contact from "../components/h2Contact";
import Hero from "../components/hero";
import Location from "../components/location";
import PartnerCarousel from "../components/partnerCarousel";
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
      <PartnerCarousel />
      <Partners />
      <Location />
    </>
  );
}

export default Home;
