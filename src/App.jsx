import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './sass/style.scss';
import Home from './components/home/Home';
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>   
        <nav>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      
    </div>
    </>
  );
}

export default App;
