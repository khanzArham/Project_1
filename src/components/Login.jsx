import React, { useState } from 'react';
import { auth, googleProvider } from '../firebase/config';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // 1. Email/Password Login Handler
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // Login ke baad home page par bhej do
    } catch (error) {
      alert(error.message);
    }
  };

  // 2. Google Sign-In Handler
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <div style={{ border: '2px solid black', padding: '30px', textAlign: 'center', width: '300px' }}>
        <h2>Login</h2>
        <form onSubmit={handleEmailLogin} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            style={{ padding: '8px' }}
          /> [cite: 20]
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            style={{ padding: '8px' }}
          /> [cite: 20]
          <button type="submit" style={{ backgroundColor: '#4285F4', color: 'white', border: 'none', padding: '10px' }}>Log In</button>
        </form>
        <p style={{ margin: '15px 0' }}>OR</p>
        <button onClick={handleGoogleLogin} style={{ backgroundColor: '#db4437', color: 'white', border: 'none', padding: '10px', width: '100%' }}>
          Sign In with Google
        </button> [cite: 17]
      </div>
    </div>
  );
};

export default Login;