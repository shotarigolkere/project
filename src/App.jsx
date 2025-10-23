import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';      // მთავარი გვერდი
import Regis from './pages/regis';    // შესვლის გვერდი
import Register from './pages/Register'; // რეგისტრაციის გვერდი
import { AuthProvider } from './context/AuthContext';
import Product from './pages/product';
import SellCar from './pages/sellCar';

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
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;