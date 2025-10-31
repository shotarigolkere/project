// --- CarCard.jsx ---

import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      {/* --- აქ გასწორდა 3 რამ: width, height, fetchPriority (დიდი P) --- */}
      <img
        src={car.imageUrl || 'https://picsum.photos/seed/audi/600/400.webp'}
        alt={`${car.brand} ${car.model}`}
        fetchPriority="high"
        width="400"
        height="220"
        style={{ aspectRatio: '16/9' }}
      />
      {/* ----------------------------------------------------------- */}

      <div className="car-details">
        <h3>{car.brand} {car.model} ({car.year})</h3>
        <p className="car-price">**${car.price.toLocaleString()}**</p>
        <p>გარბენი: {car.mileage.toLocaleString()} კმ</p>
        <p>საწვავი: {car.fuelType}</p>
        <button className="details-btn">დეტალები</button>
      </div>
    </div>
  );
};

export default CarCard;