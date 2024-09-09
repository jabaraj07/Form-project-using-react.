// src/components/Category.js
import React from 'react';
import { useParams } from 'react-router-dom';

function Category() {
  const { categoryId } = useParams();

  // Example category products
  const products = {
    a: [
      { id: 1, name: 'Category A Product 1', price: '$30' },
      // Add more category A products
    ],
    b: [
      { id: 2, name: 'Category B Product 2', price: '$40' },
      // Add more category B products
    ],
  };

  return (
    <div>
      <h1>Category {categoryId.toUpperCase()}</h1>
      <ul>
        {products[categoryId]?.map(product => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        )) || <li>No products found</li>}
      </ul>
    </div>
  );
}

export default Category;
