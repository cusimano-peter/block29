// components/SinglePlayer.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPlayerById } from '../API';

function SinglePlayer() {
  const [player, setPlayer] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getPlayer = async () => {
      try {
        const playerData = await fetchPlayerById(id);
        setPlayer(playerData);
      } catch (error) {
        console.error('Error fetching player:', error);
      }
    };
    getPlayer();
  }, [id]);

  return (
    <div>
      {player ? (
        <div>
          <h2>{player.name}</h2>
          <p>Owner: {player.owner}</p>
          <p>Team: {player.team}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SinglePlayer;
