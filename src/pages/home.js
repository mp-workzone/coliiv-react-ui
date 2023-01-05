// @flow
import Appartment from "../components/appartment";
import Hero from "../components/hero";
import Service from "../components/service";
import Featured from "../components/featured";
import "../css/home.css";
function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Service />
      <Appartment />
    </>
  );
}

export default Home;
