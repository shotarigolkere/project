import React, { useState, useEffect } from 'react';
import CarCard from '../components/CarCard';
import { fetchCars } from '../api/carsData'; 
import { Link } from 'react-router-dom';
const Home = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCars = async () => {
      try {
        const data = await fetchCars();
        setCars(data);
        setLoading(false);
      } catch (err) {
   
        setError("მონაცემების ჩატვირთვა ვერ მოხერხდა.");
        setLoading(false);
      }
    };

    loadCars();
  }, []);

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