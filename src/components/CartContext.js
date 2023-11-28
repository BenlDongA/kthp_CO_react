// CartContext.js
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  cart: [],
};
const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const existingItemIndex = state.cart.findIndex(item => item.id === action.payload.id);
  
        if (existingItemIndex !== -1) {
          // If item exists, increase its quantity and update total price
          const updatedCart = [...state.cart];
          const existingItem = updatedCart[existingItemIndex];
  
          const newQuantity = existingItem.quantity + 1;
          const newPrice = isNaN(Number(action.payload.price))
            ? existingItem.price
            : existingItem.price + Number(action.payload.price);
  
          updatedCart[existingItemIndex] = { ...existingItem, quantity: newQuantity, price: newPrice };
  
          return {
            ...state,
            cart: updatedCart,
          };
        } else {
          // If item doesn't exist, add it to the cart with initial quantity and total price
          const newCartItem = {
            ...action.payload,
            quantity: 1,
            price: isNaN(Number(action.payload.price)) ? 0 : Number(action.payload.price),
          };
  
          return {
            ...state,
            cart: [...state.cart, newCartItem],
          };
        }
      // Add more cases for removing items, updating quantities, etc. if needed
      default:
        return state;
    }
  };
  
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };
  // Add more functions for removing items, updating quantities, etc. if needed

  return (
    <CartContext.Provider value={{ cart: state.cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};