import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../type/Playertype";
import Availableplayers from "./Availableplayers";
import Selectedplayers from "./Selectedplayers";

interface Playerprops {
  playerpromise: Promise<Iplayer[]>;
  coin: number;
  setcoin: Dispatch<SetStateAction<number>>;
}

export default function Playercard({
  playerpromise,
  coin,
  setcoin,
}: Playerprops) {
  const Playercard = use(playerpromise);
  const [btnValue, setBtnValue] = useState("Available");
  const [selectedplayers, setSelectedPlayers] = useState<Iplayer[]>([]);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between my-10">
        <h2 className="font-bold text-3xl">
          {btnValue === "Available" ? "Available Players" : "Selected Players"}
        </h2>
        <div className="flex">
          <button
            onClick={() => setBtnValue("Available")}
            className={`btn ${btnValue === "Available" ? "btn-warning" : ""} rounded-r-none`}
          >
            Available
          </button>
          <button
            onClick={() => setBtnValue("Selected")}
            className={`btn ${btnValue === "Selected" ? "btn-warning" : ""} rounded-l-none`}
          >
            Selected
          </button>
        </div>
      </div>
      {btnValue === "Available" ? (
        <Availableplayers
          selectedplayers={selectedplayers}
          setselectedplayers={setSelectedPlayers}
          Playercard={Playercard}
          coin={coin}
          setcoin={setcoin}
        />
      ) : (
        <Selectedplayers
          selectedplayers={selectedplayers}
          setselectedplayers={setSelectedPlayers}
          coin={coin}
          setcoin={setcoin}
        />
      )}
    </div>
  );
}
