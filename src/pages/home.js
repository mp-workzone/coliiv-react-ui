// @flow
import Appartment from "../components/appartment";
import Featured from "../components/featured";
import Hero from "../components/hero";
import Service from "../components/service";
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
