import React, { useState, useEffect } from 'react';
import CarCard from '../components/CarCard';
import { fetchCars } from '../api/carsData'; 
import { Link } from 'react-router-dom';
import useCars from '../hooks/useCars';
const Home = () => {
  const {cars, error, loading} = useCars()

  if (loading) {
    return <div className="loading-state">მანქანები იტვირთება...</div>;
  }

  if (error) {
    return <div className="error-state">{error}</div>;
  }

  return (
    <div className="home-page">
      <h1>გაყიდვაში არსებული ავტომობილები</h1>
      <div className="car-list">
        {cars.map(car => (
          <Link to={`/product/${car.id}`}>
            <CarCard  key={car.id} car={car} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;