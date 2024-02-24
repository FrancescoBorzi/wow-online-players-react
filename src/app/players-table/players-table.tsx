import React, { useState } from 'react';
import { Player } from '../app.model';
import PlayerRow from './player-row/player-row';
import SearchBar from './search-bar/search-bar';
import { ZONES } from './zones';

export interface PlayersTableProps {
  players: Player[];
}

export function PlayersTable(props: PlayersTableProps) {

  const [textFilter, setTextFilter] = useState<string>('');

  const rows: React.JSX.Element[] = [];

  for (const player of props.players) {
    const filter = textFilter.toLowerCase();
    const playerName = player.name?.toLowerCase();
    const playerLevel = String(player.level);
    const guildName = player.guildName?.toLowerCase();
    const zoneName = ZONES[player.zone]?.toLowerCase();

    if (
      (playerName && playerName.indexOf(filter) !== -1) ||
      (guildName && guildName.indexOf(filter) !== -1) ||
      (zoneName && zoneName.indexOf(filter) !== -1) ||
      playerLevel && playerLevel === filter
    ) {
      rows.push(
        <PlayerRow key={player.guid} player={player} />
      );
    }
  }

  return (
    <>
      <div className="m-2 text-center">
        Online players: {rows.length}
      </div>
      <SearchBar filterText={textFilter} onFilterTextChange={setTextFilter} />
      <table className="w-auto m-auto table-auto border-collapse border border-slate-200 text-center">
        <thead>
        <tr>
          <th className="border border-slate-300 p-2">Character</th>
          <th className="border border-slate-300 p-2">Level</th>
          <th className="border border-slate-300 p-2">Guild</th>
          <th className="border border-slate-300 p-2">Map</th>
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
