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
        const updatedCart = [...state.cart];
        const existingItem = updatedCart[existingItemIndex];

        const newQuantity = existingItem.quantity + 1;
        const newPrice =
          isNaN(Number(action.payload.price))
            ? existingItem.price
            : existingItem.price + Number(action.payload.price);

        updatedCart[existingItemIndex] = { ...existingItem, quantity: newQuantity, price: newPrice };

        return {
          ...state,
          cart: updatedCart,
        };
      } else {
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

      case 'INCREMENT_QUANTITY':
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  price: item.price + item.price / item.quantity,
                }
              : item
          ),
        };
        

        case 'DECREMENT_QUANTITY':
          return {
            ...state,
            cart: state.cart.map(item =>
              item.id === action.payload.id && item.quantity > 1
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                    price: item.price - item.price / item.quantity,
                  }
                : item
            ),
          };
          
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      };
        
    default:
      return state;
      
      
      
  }
  
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const incrementQuantity = (item) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: item });
  };

  const decrementQuantity = (item) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: item });
  };

  const removeFromCart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  return (
    <CartContext.Provider value={{ cart: state.cart, addToCart, incrementQuantity, decrementQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
