import React, { useState, useEffect } from 'react';
import { fetchPlayers } from '../API';

function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const playersData = await fetchPlayers();
        setPlayers(playersData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching players:', error);
        setLoading(false);
      }
    };
    getPlayers();
  }, []);

  return (
    <div>
      <h1>All Players</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {players.map((player) => (
            <div key={player.id}>
              <h2>{player.name}</h2>
              <p>Breed: {player.breed}</p>
              <p>Status: {player.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AllPlayers;
