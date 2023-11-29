// CartPage.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../components/CartContext';

function CartPage() {
  const navigate = useNavigate();
  const { cart, incrementQuantity, decrementQuantity, removeFromCart } = useCart();

  useEffect(() => {
    console.log('Cart updated:', cart);
  }, [cart]);

  return (
    <div className="cart-page">
      <button onClick={() => navigate('/')}>Back</button>
      <h1>Cart Page</h1>

      <div className="cart-items">
        <h2>Items in Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} className="cart-item-image" />
              </div>
              <div className="item-details">
                <p>
                  {item.name} sl: {item.quantity} - {item.price}$
                </p>
                <div>
                  <button id="but-1"onClick={() => incrementQuantity(item)}>+</button>
                  <button id="but-2"onClick={() => removeFromCart(item)}>X</button>
                  <button id="but-1"onClick={() => decrementQuantity(item)}>-</button>
            
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CartPage;
