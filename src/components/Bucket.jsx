import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Bucket = () => {
  const { cart, getTotalPrice, user, placeOrder } = useContext(CartContext);

  // Verification check
  if (!user) {
    return (
      <div className="bucket-page">
        <div className="bucket-container" style={{ borderColor: 'red' }}>
          <h2>Access Denied!</h2>
          <p style={{ margin: '20px 0', color: 'gray' }}>
            Please login first from the Home page box to view your Bucket.
          </p>
          <Link to="/">
            <button style={{ backgroundColor: '#ffcccb' }}>Go to Home & Login</button>
          </Link>
        </div>
      </div>
    );
  }

  const displayName = user.displayName || user.email.split('@')[0];

  return (
    <div className="bucket-page">
      <div className="bucket-container">
        <h2>Hi.. {displayName}</h2>
        
        <div className="bucket-table">
          <div className="table-header">
            <span>Quantity</span>
            <span>Item-Name</span>
            <span>Price</span>
          </div>
          
          {cart.length === 0 ? (
            <p style={{ textAlign: 'center', margin: '20px 0' }}>Your bucket is empty!</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="table-row">
                <span>{item.quantity}</span>
                <span>{item.name}</span>
                <span>{item.price * item.quantity}</span>
              </div>
            ))
          )}
        </div>

        <h3>Total - Rs. {getTotalPrice()}</h3>
        
        {/* Brown Order Button jesa Image-4 me hai */}
        <button 
          onClick={placeOrder} 
          style={{ backgroundColor: '#a05a2c', color: 'white', border: 'none', padding: '10px 25px', fontSize: '18px', cursor: 'pointer', marginTop: '10px' }}
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default Bucket;