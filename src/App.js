import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import './css/style.css';
import Home from "./pages/home";
import Test from "./pages/test";
function App() {
    return (
        <div className='main'>
            <Header/>
            <Routes>
                <Route to="test" element={Test}/>
            </Routes>
            <Home />
        </div>
    );
}

export default App;
