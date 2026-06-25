import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { auth, googleProvider } from '../firebase/config';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const PizzaCard = ({ pizza, onAdd }) => {
  return (
    <div className="pizza-card">
      <h3>{pizza.name}`</h3>
      <p>Price: {pizza.price}</p>
      <button onClick={() => onAdd(pizza)}>Add</button>
    </div>
  );
};

const Home = () => {
  const { addToCart, clearCart, getTotalPrice, user } = useContext(CartContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const pizzas = [
    { id: 1, name: 'Margherita', price: 800 },
    { id: 2, name: 'Pepperoni', price: 1200 },
    { id: 3, name: 'BBQ Chicken', price: 1500 },
    { id: 4, name: 'Veggie', price: 1000 },
  ];

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  const displayName = user ? (user.displayName || user.email.split('@')[0]) : 'Guest';

  return (
    <div className="home-container">
      {/* Assignment-4 Requirement: Login hone par sirf user ka naam top par show hoga */}
      {user && (
        <div style={{ position: 'absolute', top: '20px', right: '40px', fontFamily: 'sans-serif' }}>
          <span>Hi! <strong>{displayName}</strong></span>
        </div>
      )}

      <div className="left-side">
        <h2>Pizza Ordering System</h2>
        <div className="pizza-grid">
          {pizzas.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} onAdd={addToCart} />
          ))}
        </div>
      </div>

      <div className="right-side">
        {!user ? (
          <div className="login-box">
            <form onSubmit={handleEmailLogin}>
              <label>User-Name OR Email</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="e.g. abdul@email.com" 
                required 
              />
              
              <label>Password</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
              
              <button type="submit" className="login-btn">Login</button>
            </form>
            
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <p style={{ margin: '5px 0', fontSize: '12px' }}>OR</p>
              <button 
                type="button" 
                onClick={handleGoogleLogin} 
                style={{ backgroundColor: '#db4437', color: 'white', border: '1px solid black', width: '100%', padding: '5px' }}
              >
                Sign In with Google
              </button>
            </div>
            
            <p className="signup-text">New User -- <strong>SIGN-UP</strong></p>
          </div>
        ) : (
          <div className="login-box" style={{ textAlign: 'center', backgroundColor: '#e2f0cb' }}>
            <p>Welcome, <strong>{displayName}</strong>!</p>
            <p style={{ fontSize: '12px', color: 'gray' }}>You are securely logged in via Firebase.</p>
          </div>
        )}

        <div className="total-section">
          <h3>{displayName} Your Order Total</h3>
          <p className="total-price">Rs. {getTotalPrice()}</p>
          <button onClick={clearCart} className="clear-btn">Clear Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;