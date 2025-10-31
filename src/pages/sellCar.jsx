// --- sellCar.jsx ---

// ... (კოდის დასაწყისი იგივე რჩება) ...
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCars from '../hooks/useCars';

const SellCar = () => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const [mileage, setMileage] = useState('');
  const [fuelType, setFuelType] = useState(''); 
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');

  const { addCar } = useCars();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const placeholderImage = 'data:image/jpeg;base64,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';

    const newCar = {
      // ... (car properties) ...
      brand,
      model,
      year: year ? Number(year) : undefined,
      price: price ? Number(price) : undefined,
      mileage: mileage ? Number(mileage) : undefined,
      fuelType,
      imageUrl: imageUrl && imageUrl.trim() ? imageUrl : placeholderImage,
      description,
    };

    (async () => {
      try {
        const added = await addCar(newCar);
        console.log('Car added:', added);
        // ... (reset form) ...
        setBrand('');
        setModel('');
        setYear('');
        setPrice('');
        setMileage('');
        setFuelType('');
        setImageUrl('');
        setDescription('');
        navigate('/');
      } catch (err) {
        console.error('Failed to add car', err);
        alert('Failed to add car.');
      }
    })();
  };
  
  // ... (inputStyle remains the same) ...
  const inputStyle = { width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontFamily: 'inherit', fontSize: 'inherit' };

  return (
    <div className="auth-form-container">
      <h2 style={{ textAlign: 'center' }}>Place Your Car for Sale</h2>
      
      <form className="auth-form" onSubmit={handleSubmit}>
        
        {/* ... (Brand, Model, Year, Price, Mileage inputs remain the same) ... */}
        <label>Brand</label>
        <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} required />
        <label>Model</label>
        <input type="text" value={model} onChange={(e) => setModel(e.target.value)} required />
        <label>Year</label>
        <input type="number" placeholder="e.g., 2020" value={year} onChange={(e) => setYear(e.target.value)} required />
        <label>Price ($)</label>
        <input type="number" placeholder="e.g., 18500" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <label>Mileage (km)</label>
        <input type="number" placeholder="e.g., 45000" value={mileage} onChange={(e) => setMileage(e.target.value)} required />

        {/* ... (Fuel Type select remains the same) ... */}
        <label>Fuel Type</label>
        <select value={fuelType} onChange={(e) => setFuelType(e.target.value)} required style={inputStyle} >
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
          /* --- "required" მოშორდა, რომ "qwe" არ ჩაწერო --- */
        />

        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          placeholder="e.g., კარგ მდგომარეობაში, რეგულარული სერვისით..."
          style={inputStyle} 
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