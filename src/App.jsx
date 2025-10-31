import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/home"));
const Regis = lazy(() => import("./pages/regis"));
const Register = lazy(() => import("./pages/Register"));
const Product = lazy(() => import("./pages/product"));
const SellCar = lazy(() => import("./pages/sellCar"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="layout">
          <Navbar />
          <div className="container">
            <Suspense
              fallback={<div className="loading-state">იტვირთება...</div>}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Regis />} />
                <Route path="/register" element={<Register />} />
                <Route path="/sell-car" element={<SellCar />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </div>

          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
