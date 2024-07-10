// frontend/src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Auth.css';

const Login = ({ setAuthToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [meetId, setMeetId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/login', { username, password, meetId });
      setAuthToken(response.data.token);
      localStorage.setItem('userId', response.data.userId);
      localStorage.setItem('meetId', meetId);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Meet ID"
          value={meetId}
          onChange={(e) => setMeetId(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
