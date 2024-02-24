import { Player } from '../../app.model';
import { ZONES } from '../zones';

export interface PlayerRowProps {
  player: Player;
}

export function PlayerRow(props: PlayerRowProps) {
  return (
    <tr>
      <td className="border border-slate-300 p-2">{props.player.name}</td>
      <td className="border border-slate-300 p-2">{props.player.level}</td>
      <td className="border border-slate-300 p-2">{props.player.guildName}</td>
      <td className="border border-slate-300 p-2">{ZONES[props.player.zone]}</td>
    </tr>
  );
}

export default PlayerRow;
