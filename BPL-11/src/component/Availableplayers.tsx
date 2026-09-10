import type { Dispatch, SetStateAction } from "react";
import type { Iplayer } from "../type/Playertype";

import Cardofplayer from "./Cardofplayer";
interface availableProps {
  Playercard: Iplayer[];
  coin: number;
  setcoin: Dispatch<SetStateAction<number>>;
  selectedplayers: Iplayer[];
  setselectedplayers: Dispatch<SetStateAction<Iplayer[]>>;
}

export default function Availableplayers({
  Playercard,
  coin,
  setcoin,
  selectedplayers,
  setselectedplayers,
}: availableProps) {
  return (
    <div className="grid grid-cols-3 mt-5 gap-5">
      {Playercard.map((player: Iplayer, index: number) => {
        return (
          <Cardofplayer
            key={index}
            player={player}
            coin={coin}
            setcoin={setcoin}
            selectedplayers={selectedplayers}
            setselectedplayers={setselectedplayers}
          />
        );
      })}
    </div>
  );
}
