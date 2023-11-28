// CartPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function CartPage({ cart }) {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate('/')}>Back</button>
      <h1>Cart Page</h1>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.price}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CartPage;
