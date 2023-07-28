import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="personal-info">
        <h2>Personal Information</h2>
        <p>Name: John Doe</p>
        <p>Email: johndoe@example.com</p>
        <p>Address: 123 Main St, City, State</p>
      </div>
      
      <div className="previous-orders">
        <h2>Previous Orders</h2>
        <div className="order-card">
          <p>Order #1</p>
          <p>Item: Product A</p>
          <p>Date: July 1, 2023</p>
        </div>
        <div className="order-card">
          <p>Order #2</p>
          <p>Item: Product B</p>
          <p>Date: July 5, 2023</p>
        </div>
        <div className="order-card">
          <p>Order #3</p>
          <p>Item: Product C</p>
          <p>Date: July 10, 2023</p>
        </div>
      </div>
      
      <div className="chat">
        <h2>Chat</h2>
        {/* Your chat component goes here */}
      </div>
    </div>
  );
};

export default Profile;
