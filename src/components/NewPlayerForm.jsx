import React, { useState } from 'react';
import { createPlayer } from '../API';

function NewPlayerForm({ onPlayerAdded }) {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [team, setTeam] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPlayer = await createPlayer({ name, owner, team });
      onPlayerAdded(newPlayer);
      setName('');
      setOwner('');
      setTeam('');
    } catch (error) {
      console.error('Error creating player:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Owner" value={owner} onChange={(e) => setOwner(e.target.value)} />
      <input type="text" placeholder="Team" value={team} onChange={(e) => setTeam(e.target.value)} />
      <button type="submit">Create Player</button>
    </form>
  );
}

export default NewPlayerForm;
