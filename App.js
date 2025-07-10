import React, { useState } from 'react';
import './App.css';
import users from './data/users';
import UserCard from './components/UserCard';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // 'all', 'active', 'inactive'

  // Filter based on search + status
  const filteredUsers = users.filter(user => {
    const matchSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        user.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchStatus =
      statusFilter === 'all' ||
      (statusFilter === 'active' && user.isActive) ||
      (statusFilter === 'inactive' && !user.isActive);

    return matchSearch && matchStatus;
  });

  return (
    <div className="app">
      <h1>Dynamic User Directory</h1>

      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search by name or email..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* ✅ Status Filter Buttons */}
      <div className="filter-buttons">
        <button
          className={statusFilter === 'all' ? 'active-btn' : ''}
          onClick={() => setStatusFilter('all')}
        >
          All
        </button>
        <button
          className={statusFilter === 'active' ? 'active-btn' : ''}
          onClick={() => setStatusFilter('active')}
        >
          Active
        </button>
        <button
          className={statusFilter === 'inactive' ? 'active-btn' : ''}
          onClick={() => setStatusFilter('inactive')}
        >
          Inactive
        </button>
      </div>

      {/* 📊 Count */}
      <p>{filteredUsers.length} user(s) found</p>

      {/* 🧩 Render Filtered Users */}
      <div className="user-list">
        {filteredUsers.length > 0 ? (
          filteredUsers.map(user => (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              isActive={user.isActive}
            />
          ))
        ) : (
          <p>No users match your search.</p>
        )}
      </div>
    </div>
  );
}

export default App;
