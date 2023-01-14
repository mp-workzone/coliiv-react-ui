import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import "./css/common.css";
import Amenities from "./pages/amenities";
import OneHOneB from "./pages/apartments/OneHOneB";
import StdioLoft from "./pages/apartments/stdioLoft";
import TwoH2B from "./pages/apartments/TwoH2B";
import TwoH2BPlus from "./pages/apartments/TwoH2BPlus";
import Career from "./pages/career";
import Colivers from "./pages/colivers";
import Event from "./pages/event";
import EventInternal from "./pages/eventInternal";
import Franchises from "./pages/franchises";
import Home from "./pages/home";
import Team from "./pages/team";
function App() {
  return (
    <div className="main">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/event-internal" element={<EventInternal />} />
        <Route path="/event" element={<Event />} />
        <Route path="/apartments/stdio-loft" element={<StdioLoft />} />
        <Route path="/apartments/1h-1b" element={<OneHOneB/>} />
        <Route path="/apartments/2h-2b" element={<TwoH2B/>} />
        <Route path="/apartments/2h-2b-plus" element={<TwoH2BPlus/>} />
        <Route path="/franchises" element={<Franchises />} />
        <Route path="/career" element={<Career />} />
        <Route path="/colivers" element={<Colivers />} />
        <Route path="/amenities" element={<Amenities />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
