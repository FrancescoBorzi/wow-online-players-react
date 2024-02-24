import { Player } from '../../app.model';

export interface PlayerRowProps {
  player: Player;
}

export function PlayerRow(props: PlayerRowProps) {
  return (
    <tr>
      <td>{props.player.name}</td>
      <td>{props.player.level}</td>
    </tr>
  );
}

export default PlayerRow;
