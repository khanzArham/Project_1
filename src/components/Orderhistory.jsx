import React, { useState, useEffect, useContext } from 'react';
import { db } from '../firebase/config';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { CartContext } from '../context/CartContext';

const OrderHistory = () => {
  const { user } = useContext(CartContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user) return;
      try {
        // Query: Sirf is logged-in user ke orders lekar aao
        const q = query(collection(db, "orders"), where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);
        
        const fetchedOrders = [];
        querySnapshot.forEach((doc) => {
          fetchedOrders.push({ id: doc.id, ...doc.data() });
        });
        
        setOrders(fetchedOrders);
      } catch (error) {
        console.error("Error fetching orders: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  if (!user) return <p style={{ textAlign: 'center', marginTop: '40px' }}>Please login to see your order history.</p>;
  if (loading) return <p style={{ textAlign: 'center', marginTop: '40px' }}>Loading History...</p>;

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center' }}>Your Order History</h2>
      {orders.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No past orders found.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} style={{ border: '1px solid black', padding: '15px', margin: '15px 0', backgroundColor: '#f9f9f9' }}>
            <p><strong>Order ID:</strong> {order.id}</p>
            <p><strong>Date:</strong> {order.createdAt}</p>
            <div>
              <strong>Items:</strong>
              <ul>
                {order.items.map((item, idx) => (
                  <li key={idx}>{item.name} (x{item.quantity}) - Rs. {item.price * item.quantity}</li>
                ))}
              </ul>
            </div>
            <p><strong>Total Amount Paid:</strong> Rs. {order.totalAmount}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistory;