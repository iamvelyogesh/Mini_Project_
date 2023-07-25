import React from 'react';

function AccountPage({ userData }) {
  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {userData.name}</h1>
      <p>Email: {userData.email}</p>
      {/* Display other user details as needed */}
    </div>
  );
}

export default AccountPage;
