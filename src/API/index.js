export async function fetchPlayers() {
    const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-B/players');
    if (!response.ok) {
      throw new Error('Failed to fetch players');
    }
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  }
  
  
  export async function fetchPlayerById(id) {
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-B/players/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch player');
    }
    return response.json();
  }
  
export async function deletePlayer(id) {
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-B/players/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete player');
    }
  }
  