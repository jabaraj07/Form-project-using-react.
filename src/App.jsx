// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // Fetch data from the Fake Store API
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  function Home() {
    if (loading) return <p>Loading...</p>;

    return (
      <div>
        <h1>All Products</h1>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {products.map(product => (
            <li key={product.id} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px', borderRadius: '5px' }}>
              <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p><strong>Price:</strong> ${product.price}</p>
              <p><strong>Category:</strong> {product.category}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  function Category() {
    if (loading) return <p>Loading...</p>;

    const categoryProducts = selectedCategory === 'all' ? products : products.filter(product => product.category === selectedCategory);

    return (
      <div>
        <h1>Category: {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}</h1>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {categoryProducts.length > 0 ? (
            categoryProducts.map(product => (
              <li key={product.id} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px', borderRadius: '5px' }}>
                <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p><strong>Price:</strong> ${product.price}</p>
                <p><strong>Category:</strong> {product.category}</p>
              </li>
            ))
          ) : (
            <li>No products found</li>
          )}
        </ul>
      </div>
    );
  }

  return (
    <Router>
      <div>
        <nav>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><Link to="/" onClick={() => handleCategoryChange('all')}>Home</Link></li>
            <li><Link to="/category/electronics" onClick={() => handleCategoryChange('electronics')}>Electronics</Link></li>
            <li><Link to="/category/jewelery" onClick={() => handleCategoryChange('jewelery')}>Jewelry</Link></li>
            <li><Link to="/category/men's clothing" onClick={() => handleCategoryChange("men's clothing")}>Men's Clothing</Link></li>
            <li><Link to="/category/women's clothing" onClick={() => handleCategoryChange("women's clothing")}>Women's Clothing</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/*" element={<Category />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
