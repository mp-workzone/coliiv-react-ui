import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import "./css/common.css";
import EventInternal from "./pages/eventInternal";
import Home from "./pages/home";
import Team from "./pages/team";
import Event from "./pages/event";
function App() {
  return (
    <div className="main">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/event-internal" element={<EventInternal />} />
        <Route path="/event" element={<Event />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
