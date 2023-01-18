// @flow
import { useEffect } from "react";
import Appartments from "../components/home/appartments";
import Contact from "../components/home/contact";
import Feature from "../components/home/feature";
import H2Contact from "../components/home/h2Contact";
import Hero from "../components/home/hero";
import HomeCarousel from "../components/home/homeCarousel";
import Location from "../components/home/location";
import Partners from "../components/home/partners";
import Service from "../components/home/service";
import ServiceTable from "../components/home/serviceTable";
import "../scss/home.scss";
function Home() {
  useEffect(() => {
    document.body.classList.add("home");
    return () => {
      document.body.classList.remove("home");
    };
  }, []);
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
