// frontend/src/components/AdminPanel.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/AdminPanel.css';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleMute = async (userId) => {
    try {
      await axios.post('/api/users/mute', { userId });
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUnmute = async (userId) => {
    try {
      await axios.post('/api/users/unmute', { userId });
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const handleClearUsers = async () => {
    try {
      await axios.post('/api/users/clear');
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <button onClick={handleClearUsers}>Clear All Users</button>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Muted</th>
            <th>Raise Hand</th>
            <th>Reaction</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.isMuted ? 'Yes' : 'No'}</td>
              <td>{user.hasRaisedHand ? 'Yes' : 'No'}</td>
              <td>{user.reaction}</td>
              <td>
                {user.isMuted ? (
                  <button onClick={() => handleUnmute(user._id)}>Unmute</button>
                ) : (
                  <button onClick={() => handleMute(user._id)}>Mute</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
