import { type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../type/Playertype";
import SelectedCard from "./SelectedCard";
interface selectedprops {
  selectedplayers: Iplayer[];
  setselectedplayers: Dispatch<SetStateAction<Iplayer[]>>;
  coin: number;
  setcoin: Dispatch<SetStateAction<number>>;
}

export default function Selectedplayers({
  selectedplayers,
  setselectedplayers,
  coin,
  setcoin,
}: selectedprops) {
  if (selectedplayers.length === 0) {
    return (
      <div className="container h-150 items-center">
        <h2 className="text-3xl font-bold text-center text-gray-400">
          No Players Selected
        </h2>
      </div>
    );
  }
  const handlermvplayer = (player: Iplayer) => {
    const remainplayer = selectedplayers.filter(
      (selectplayer) => selectplayer.playerName != player.playerName,
    );
    setselectedplayers(remainplayer);
    const addedcoin = coin + player.price;
    setcoin(addedcoin);
  };
  return (
    <div className="min-h-5">
      {selectedplayers.map((player, index: number) => (
        <SelectedCard key={index} player={player} handler={handlermvplayer} />
      ))}
    </div>
  );
}
