import React from 'react';
import './UserCard.css'; // optional, or comment this out if you don’t use it

const UserCard = ({ name, email, isActive }) => {
  return (
    <div className={`user-card ${isActive ? 'active' : 'inactive'}`}>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>Status: <strong>{isActive ? 'Active' : 'Inactive'}</strong></p>
    </div>
  );
};

export default UserCard;
