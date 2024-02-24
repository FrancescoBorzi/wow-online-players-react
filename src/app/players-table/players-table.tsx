import React, { useState } from 'react';
import { Player } from '../app.model';
import PlayerRow from './player-row/player-row';
import SearchBar from './search-bar/search-bar';

export interface PlayersTableProps {
  players: Player[];
}

export function PlayersTable(props: PlayersTableProps) {

  const [nameFilter, setNameFilter] = useState<string>('');

  const rows: React.JSX.Element[] = [];

  for (const player of props.players) {
    if (player.name.toLowerCase().indexOf(nameFilter.toLowerCase()) !== -1) {
      rows.push(
        <PlayerRow key={player.guid} player={player} />
      );
    }
  }

  return (
    <>
      <div>
        Online players: {rows.length}
      </div>
      <SearchBar nameFilter={nameFilter} onFilterNameChange={setNameFilter} />
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Level</th>
        </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
      </table>
    </>
  );
}

export default PlayersTable;
