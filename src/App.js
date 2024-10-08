import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Reservation from './pages/Reservation';
import Footer from './components/Footer';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Reservation" element={<Reservation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;