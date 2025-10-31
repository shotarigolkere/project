import React from 'react';

const CarCard = React.memo(({ car }) => {
  return (
    <div className="car-card">
      <img
        src={'car.webp'}
        alt={`${car.brand} ${car.model}`}
        fetchPriority="high"
        width="400"
        height="220"
        style={{ aspectRatio: '16/9' }}
      />

      <div className="car-details">
        <h3>{car.brand} {car.model} ({car.year})</h3>
        <p className="car-price">**${car.price.toLocaleString()}**</p>
        <p>გარბენი: {car.mileage.toLocaleString()} კმ</p>
        <p>საწვავი: {car.fuelType}</p>
        <button className="details-btn">დეტალები</button>
      </div>
    </div>
  );
});

export default CarCard;