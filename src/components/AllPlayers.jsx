import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchPlayers, deletePlayer } from '../API';

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

  const handleDelete = async (id) => {
    try {
      await deletePlayer(id);
      setPlayers(players.filter(player => player.id !== id));
    } catch (error) {
      console.error('Error deleting player:', error);
    }
  };

  return (
    <div>
      <h1>All Players</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {players.map((player) => (
            <div key={player.id}>
              <h4>{player.name}</h4>
              <p>Owner: {player.owner}</p>
              <p>Team: {player.team}</p>
              <Link to={`/players/${player.id}`}>See Details</Link>
              <button onClick={() => handleDelete(player.id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AllPlayers;
