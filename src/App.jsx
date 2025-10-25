import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';      
import Regis from './pages/regis';    
import Register from './pages/Register'; 
import { AuthProvider } from './context/AuthContext';
import Product from './pages/product';
import SellCar from './pages/sellCar';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Regis />} />
            <Route path="/register" element={<Register />} />
            <Route path="/sell-car" element={<SellCar />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer/>
      </Router>
     
    </AuthProvider>
  );
}

export default App;