// eslint-disable-next-line @typescript-eslint/no-unused-vars
import PlayersTable from './players-table/players-table';
import { Player } from './app.model';
import { useEffect, useState } from 'react';


const API_URL = 'https://chromiecraft.com/api/characters/online';

export function App() {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    let ignore = false;
    async function fetchPlayers() {
      if (!ignore) {
        await fetch(API_URL)
          .then(response => response.json())
          .then(json => setPlayers(json))
          .catch(error => console.error(error));
      }
    }

    fetchPlayers();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <PlayersTable players={players} />
  );
}

export default App;
