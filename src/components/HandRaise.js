// frontend/src/components/HandRaise.js
import React from 'react';
import axios from 'axios';
import '../styles/HandRaise.css';

const HandRaise = () => {
  const userId = localStorage.getItem('userId');
  const meetId = localStorage.getItem('meetId');

  const handleRaiseHand = async () => {
    try {
      await axios.post('/api/users/raise-hand', { userId, meetId });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="hand-raise">
      <button onClick={handleRaiseHand}>Raise Hand</button>
    </div>
  );
};

export default HandRaise;
