// frontend/src/components/Reactions.js
import React from 'react';
import axios from 'axios';
import '../styles/Reactions.css';

const Reactions = () => {
  const userId = localStorage.getItem('userId');
  const meetId = localStorage.getItem('meetId');

  const handleReaction = async (reaction) => {
    try {
      await axios.post('/api/users/send-reaction', { userId, meetId, reaction });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="reactions">
      <button onClick={() => handleReaction('like')}>Like</button>
      <button onClick={() => handleReaction('love')}>Love</button>
      <button onClick={() => handleReaction('clap')}>Clap</button>
    </div>
  );
};

export default Reactions;
