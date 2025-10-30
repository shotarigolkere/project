import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import useCars from '../hooks/useCars';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getCarById } = useCars();

  useEffect(() => {
    setLoading(true);
    setError(null);
    getCarById(id)
      .then(data => setProduct(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  const productPageStyle = {
    maxWidth: '900px', 
    margin: '50px auto',
    padding: '30px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    gap: '30px'      
  };

 
  const imageColumnStyle = {
    flex: '1 1 60%', 
    minWidth: '300px'
  };


  const detailsColumnStyle = {
    flex: '1 1 40%' 
  };
  
  if (loading) {
    return <div className="loading-state">Loading product details...</div>;
  }

  if (error) {
    
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


  return (
   
    <div style={productPageStyle}>
      

      <div style={imageColumnStyle}>
        <img 
          src={product.imageUrl} 
          alt={`${product.brand} ${product.model}`}
          
          className="car-image" 
          style={{ height: 'auto', width: '100%', borderRadius: '8px' }} 
        />
      </div>

      <div style={detailsColumnStyle}>
        
        <h1 style={{ marginTop: 0 }}>{product.brand} {product.model}</h1>

        <div 
          className="car-price" 
          style={{ fontSize: '2.2em', marginBottom: '20px' }}
        >
          ${product.price.toLocaleString()}
        </div>

      
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
        
        
        <button className="auth-btn" style={{ marginTop: '20px' }}>
          Contact Seller
        </button>
      </div>
    </div>
  );
}

export default Product;