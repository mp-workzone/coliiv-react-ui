import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";

import Home from "./pages/home";
import Test from "./pages/test";
function App() {
  return (
    <div className="main">
      <Header />
      <Routes>
        <Route to="test" element={Test} />
      </Routes>
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
