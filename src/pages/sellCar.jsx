import React, { useState } from 'react';


const SellCar = () => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const [mileage, setMileage] = useState('');
  const [fuelType, setFuelType] = useState(''); // We'll make this a dropdown
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const newCar = {
      id: Date.now(), 
      brand: brand,
      model: model,
      fuelType: fuelType,
      imageUrl: imageUrl,
      description: description,
    };

    
    console.log('Submitting new car:', newCar);
    alert('Car submitted for review! (Check the console)');

    setBrand('');
    setModel('');
    setYear('');
    setPrice('');
    setMileage('');
    setFuelType('');
    setImageUrl('');
    setDescription('');
  };
  
  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    fontSize: 'inherit'
  };

  return (
    <div className="auth-form-container">
      <h2 style={{ textAlign: 'center' }}>Place Your Car for Sale</h2>
      
      <form className="auth-form" onSubmit={handleSubmit}>
        
        <label>Brand</label>
        <input 
          type="text" 
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          required 
        />

        <label>Model</label>
        <input 
          type="text" 
          value={model}
          onChange={(e) => setModel(e.target.value)}
          required 
        />

        <label>Year</label>
        <input 
          type="number" 
          placeholder="e.g., 2020"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required 
        />

        <label>Price ($)</label>
        <input 
          type="number" 
          placeholder="e.g., 18500"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required 
        />

        <label>Mileage (km)</label>
        <input 
          type="number" 
          placeholder="e.g., 45000"
          value={mileage}
          onChange={(e) => setMileage(e.target.value)}
          required 
        />

        <label>Fuel Type</label>
        <select 
          value={fuelType} 
          onChange={(e) => setFuelType(e.target.value)} 
          required
          style={inputStyle} // Apply the matching style
        >
          <option value="" disabled>Select a fuel type...</option>
          <option value="ბენზინი">ბენზინი (Gasoline)</option>
          <option value="დიზელი">დიზელი (Diesel)</option>
          <option value="ჰიბრიდი">ჰიბრიდი (Hybrid)</option>
          <option value="ელექტრო">ელექტრო (Electric)</option>
        </select>

        <label>Image URL</label>
        <input 
          type="url" 
          placeholder="https://example.com/image.jpg"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required 
        />

        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          placeholder="e.g., კარგ მდგომარეობაში, რეგულარული სერვისით..."
          style={inputStyle} // Apply the matching style
          required
        ></textarea>

        <button type="submit" className="auth-btn">
          Upload Car
        </button>

      </form>
    </div>
  );
};

export default SellCar;