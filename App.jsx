import React from 'react';
import users from './data/users';
import UserCard from './components/UserCard';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Dynamic User Directory</h1>
      <div className="user-list">
        {users.map(user => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            isActive={user.isActive}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
