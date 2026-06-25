import React, { createContext, useState, useEffect } from 'react';
import { auth, db } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, doc, setDoc } from 'firebase/firestore';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  // USEEFFECT: Background me user state check karega
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      
      if (currentUser) {
        // User data Firestore 'users' collection me save ho raha hai
        await setDoc(doc(db, "users", currentUser.uid), {
          name: currentUser.displayName || currentUser.email.split('@')[0],
          email: currentUser.email
        });
      }
    });
    return () => unsubscribe();
  }, []);

  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === pizza.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...pizza, quantity: 1 }];
    });
  };

  const clearCart = () => setCart([]);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Order Firestore me save karne ka function
  const placeOrder = async () => {
    if (!user) return alert("Please login to place an order");
    if (cart.length === 0) return alert("Your cart is empty");

    try {
      await addDoc(collection(db, "orders"), {
        userId: user.uid,
        userName: user.displayName || user.email.split('@')[0],
        items: cart,
        totalAmount: getTotalPrice(),
        createdAt: new Date().toLocaleDateString()
      });

      alert("Order placed successfully in Firestore!");
      clearCart();
    } catch (error) {
      console.error("Error placing order: ", error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, user, addToCart, clearCart, getTotalPrice, placeOrder }}>
      {children}
    </CartContext.Provider>
  );
};