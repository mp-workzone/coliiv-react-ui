// @flow
import Gallery from "../components/gallery";
import Header from "../components/header";
import Hero from "../components/hero";
import Service from "../components/service";
import VideoArea from "../components/slogan";
function Home() {
  return (
    <>
      <Header />
      <Hero />
      <VideoArea />
      <Service />
      <Gallery />
    </>
  );
}

export default Home;
