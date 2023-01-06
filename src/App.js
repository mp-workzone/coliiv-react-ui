import Footer from "./components/footer";
import Header from "./components/header";
import "./css/common.css";
import Home from "./pages/home";
function App() {
  return (
    <div className="main">
      <Header />
      <Home/>
      {/* <Routes>
        <Route to="/" element={<Home/>}/>
        <Route to="/test" element={<Test/>} />
      </Routes> */}

      <Footer/>
    </div>
  );
}

export default App;
