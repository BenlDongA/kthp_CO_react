import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../components/CartContext';

function CartPage() {
  const navigate = useNavigate();
  const { cart } = useCart();

  // Ensure that the cart is updated before rendering
  useEffect(() => {
    console.log('Cart updated:', cart);
  }, [cart]);

  return (
    <>
      <button onClick={() => navigate('/')}>Back</button>
      <h1>Cart Page</h1>

      <div>
        <h2>Items in Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <div>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '50px', height: '50px', marginRight: '10px' }}
                />
              </div>
              <div>
                {item.name} sl: {item.quantity} - {item.price}$
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default CartPage;
