import React, { useState } from 'react';

import '../App.css';
export default function LoginForm({ onSwitch }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      // Add your validation message here
      return;
    }
    // Implement login logic
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit} className="login-form">
        
        <h2>Login</h2>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        
        
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        <div>
        <button type="submit" className="login-button">Login</button></div>
        <div>
        <button type="button" onClick={onSwitch} className="switch-button">Switch to Signup</button></div>
      </form>
    </div>
  );
}
