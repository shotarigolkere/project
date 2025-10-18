import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      {/* 💥 კრიტიკული: img ტეგი სწორად იღებს URL-ს */}
      <img src={car.imageUrl} alt={`${car.brand} ${car.model}`} className="car-image" />
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

// 💥 კრიტიკული: Default ექსპორტი, რათა იმპორტი home/haus-ში სწორად იმუშაოს
export default CarCard;