import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Amenities from "./pages/amenities";
import OneHOneB from "./pages/apartments/OneHOneB";
import StdioLoft from "./pages/apartments/stdioLoft";
import TwoH2B from "./pages/apartments/TwoH2B";
import TwoH2BPlus from "./pages/apartments/TwoH2BPlus";
import Blog from "./pages/blog";
import BlogDetaisl from "./pages/blogDetails";
import Career from "./pages/career";
import Colivers from "./pages/colivers";
import Event from "./pages/event";
import EventInternal from "./pages/eventInternal";
import Franchises from "./pages/franchises";
import Home from "./pages/home";
import Team from "./pages/team";
import "./scss/common.scss";
function App() {
  return (
    <div className="main">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event-internal" element={<EventInternal />} />
        <Route path="/franchises" element={<Franchises />} />
        <Route path="/career" element={<Career />} />
        <Route path="/colivers" element={<Colivers />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/apartments/stdio-loft" element={<StdioLoft />} />
        <Route path="/apartments/1h-1b" element={<OneHOneB />} />
        <Route path="/apartments/2h-2b" element={<TwoH2B />} />
        <Route path="/apartments/2h-2b-plus" element={<TwoH2BPlus />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/blog-details" element={<BlogDetaisl />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
