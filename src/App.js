import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import "./css/common.css";
import Home from "./pages/home";
import Team from "./pages/team";
import EventInternal from "./pages/eventInternal";
import Test from "./pages/test";
function App() {
  return (
    <div className="main">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test/test" element={<Test />} />
        <Route path="/team" element={<Team />} />
        <Route path="/event/event_internal" element={<EventInternal />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
