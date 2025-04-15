import React from 'react';
import Footer from './Footer';
import Nav from './Nav';

export default function Explore() {
  return (
    <div>
        <Nav/>

<div className="profile-container">
      <div className="profile-header">
        <img className="profile-avatar" src="/Images/pets.jpeg" alt="Profile" />
        <h2 className="profile-name">Satabdi Goswami</h2>
        <p className="profile-email">satabdi@example.com</p>
      </div>
      <div className="profile-info">
        <h3>Account Details</h3>
        <div className="info-item">
          <label>Username:</label>
          <p>satabdi_01</p>
        </div>
        <div className="info-item">
          <label>Phone Number:</label>
          <p>+123 456 7890</p>
        </div>
        <div className="info-item">
          <label>Shipping Address:</label>
          <p>1234 Street Name, City, Country</p>
        </div>
      </div>
      <div className="order-history">
        <h3>Order History</h3>
        <ul>
          <li>Order #1234 - Delivered</li>
          <li>Order #1235 - Pending</li>
          <li>Order #1236 - Shipped</li>
        </ul>
      </div>
      <button className="logout-btn">Logout</button>
    </div>


    <Footer/>
    </div>
  );
};
