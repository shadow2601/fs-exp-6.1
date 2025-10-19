import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch products');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Product List</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {products.map(product => (
          <div key={product.id} style={{
              border: '2px solid #444',
              borderRadius: '8px',
              padding: '25px',
              width: '200px',
              background: '#222',
              color: '#fff'
            }}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button style={{
                backgroundColor: '#0066ff',
                color: 'white',
                padding: '10px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                marginTop: '10px'
              }}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
