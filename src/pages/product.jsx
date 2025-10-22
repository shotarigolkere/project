// src/pages/Product.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchCarById } from '../api/carsData'; 

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchCarById(id)
      .then(data => setProduct(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  // --- STYLES ---
  // We create style objects here to keep the JSX clean.
  
  // 1. This is our new "wrapper" style.
  // It's like .auth-form-container but with maxWidth: '900px'
  const productPageStyle = {
    maxWidth: '900px', // <--- WIDER CONTENT
    margin: '50px auto',
    padding: '30px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex', // <--- Two-column layout
    gap: '30px'      // Space between columns
  };

  // 2. Styles for the left (image) column
  const imageColumnStyle = {
    flex: '1 1 60%', // Takes up 60% of the space
    minWidth: '300px'
  };

  // 3. Styles for the right (details) column
  const detailsColumnStyle = {
    flex: '1 1 40%' // Takes up 40% of the space
  };
  // --- END STYLES ---


  // --- RENDER LOGIC ---
  if (loading) {
    return <div className="loading-state">Loading product details...</div>;
  }

  if (error) {
    // We can still use auth-form-container for the error box, it's fine here
    return (
      <div className="auth-form-container error-state">
        <h2>Error</h2>
        <p>{error}</p>
        <Link 
          to="/" 
          className="details-btn" 
          style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
        >
          Go Back Home
        </Link>
      </div>
    );
  }

  if (!product) {
    return <div className="error-state">Product not found.</div>;
  }

  // --- SUCCESS RENDER ---
  return (
    // We apply our new wrapper style here
    <div style={productPageStyle}>
      
      {/* Left Column */}
      <div style={imageColumnStyle}>
        <img 
          src={product.imageUrl} 
          alt={`${product.brand} ${product.model}`}
          // We re-use .car-image but override height
          className="car-image" 
          style={{ height: 'auto', width: '100%', borderRadius: '8px' }} 
        />
      </div>

      {/* Right Column */}
      <div style={detailsColumnStyle}>
        
        <h1 style={{ marginTop: 0 }}>{product.brand} {product.model}</h1>

        {/* We re-use .car-price, making it larger */}
        <div 
          className="car-price" 
          style={{ fontSize: '2.2em', marginBottom: '20px' }}
        >
          ${product.price.toLocaleString()}
        </div>

        {/* We re-use .auth-form styles for the details list */}
        <div className="auth-form" style={{ marginBottom: '20px' }}>
          <h3 style={{marginTop: 0, borderBottom: '1px solid #eee', paddingBottom: '5px'}}>Details</h3>
          
          <label style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <span>Year:</span> <span>{product.year}</span>
          </label>
          
          <label style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <span>Mileage:</span> <span>{product.mileage.toLocaleString()} km</span>
          </label>
          
          <label style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <span>Fuel Type:</span> <span>{product.fuelType}</span>
          </label>
        </div>

        <h3>Description</h3>
        <p style={{ lineHeight: 1.6 }}>{product.description}</p>
        
        {/* We re-use .auth-btn for the main action */}
        <button className="auth-btn" style={{ marginTop: '20px' }}>
          Contact Seller
        </button>
      </div>
    </div>
  );
}

export default Product;