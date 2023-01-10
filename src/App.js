import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import "./css/common.css";
import StdioLoft from "./pages/apartments/stdioLoft";
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
        <Route path="/franchises" element={<Franchises />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
