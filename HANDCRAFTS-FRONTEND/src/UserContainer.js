import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './us.css'

const UsersContainer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the backend API
    axios.get('http://localhost:8080/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <h1>All Users</h1>
      <div className="users-container">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            {/* You can add more user details here if needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersContainer;
