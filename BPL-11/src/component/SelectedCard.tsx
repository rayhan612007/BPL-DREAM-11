import { MdOutlineDeleteForever } from "react-icons/md";
import type { Iplayer } from "../type/Playertype";

interface Iselectcard {
  player: Iplayer;
  handler: (player: Iplayer) => void;
}

export default function SelectedCard({ player, handler }: Iselectcard) {
  return (
    <div className="flex justify-between container p-3 border border-gray-500  rounded-2xl mt-3">
      <div className="flex gap-2">
        <img src={player.playerImg} alt={player.playerName} className="w-10" />
        <div>
          <h2 className="font-semibold text-md">{player.playerName} </h2>
          <p className="font-medium text-sm">{player.playerType}</p>
        </div>
      </div>
      <button onClick={() => handler(player)}>
        <MdOutlineDeleteForever className="text-red-600" />
      </button>
    </div>
  );
}
