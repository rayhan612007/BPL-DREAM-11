// import { FaUser } from "react-icons/fa";
// import { IoFlagSharp } from "react-icons/io5";
// import type { Iplayer } from "../type/Playertype";
// export default function Cardofplayer({ player }: { player: Iplayer }) {
//   return (
//     <div className="card bg-base-100 shadow-sm ">
//       <figure>
//         <img src={player.playerImg} alt={player.playerName} />
//       </figure>
//       <div className="card-body space-y-3">
//         <h2 className="card-title">
//           <FaUser />
//           {player.playerName}
//         </h2>

//         <div className="flex justify-between gap-4">
//           <p className="font-semibold flex items-center gap-1">
//             <IoFlagSharp />
//             {player.origin}
//           </p>
//           <button className="btn btn-soft">{player.playerType}</button>
//         </div>
//         <div className="divider"></div>
//         <h2 className="font-semibold text-xl">Rating</h2>
//         <div className="flex justify-between font-semibold text-lg">
//           <h2>Left-Hand-Bat</h2>
//           <h2>{player.battingStyle}-Bat</h2>
//         </div>
//         <div className="flex justify-between font-semibold text-lg">
//           <h2>Price: ${player.price}</h2>
//           <button className="btn btn-soft btn-primary text-md">
//             Choose Player
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import { FaUser } from "react-icons/fa";
import { IoFlagSharp } from "react-icons/io5";
import type { Iplayer } from "../type/Playertype";
import { useState, type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";


interface cardplayerprops {
  player: Iplayer;
  coin: number;
  setcoin: Dispatch<SetStateAction<number>>;
  selectedplayers: Iplayer[];
  setselectedplayers: Dispatch<SetStateAction<Iplayer[]>>;
}

export default function Cardofplayer({
  player,
  coin,
  setcoin,
  selectedplayers,
  setselectedplayers,
}: cardplayerprops) {
  const [Isselected, setIsSelected] = useState(false);

  const handlecoin = () => {
    const newcoin = coin - player.price;
    if (newcoin >= 0) {
      setcoin(newcoin);
      setIsSelected(true);
      toast.success(`${player.playerName} Selected Sucessfully`);
    } else {
      toast.error("You don't have enough Coin");
    }

    setselectedplayers([...selectedplayers, player]);
  };
  return (
    <div className="card bg-base-100 border border-gray-200 rounded-3xl p-6 max-w-sm shadow-sm">
      {/* Player Image with rounded corners and padding spacing */}
      <figure className="rounded-2xl overflow-hidden h-56 w-full mb-5">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="w-full h-full object-contain"
        />
      </figure>

      <div className="space-y-4">
        {/* Player Name */}
        <div className="flex items-center gap-3 text-xl font-bold text-gray-900">
          <FaUser className="text-gray-700 text-lg" />
          <h2>{player.playerName}</h2>
        </div>

        {/* Origin & Role Tag */}
        <div className="flex justify-between items-center text-gray-400">
          <p className="flex items-center gap-2 text-sm font-medium">
            <IoFlagSharp className="text-gray-400 text-base" />
            {player.origin}
          </p>
          <span className="badge bg-gray-100 text-gray-800 border-none font-medium text-xs px-3 py-3 rounded-lg">
            {player.playerType}
          </span>
        </div>

        <hr className="border-gray-100 my-2" />

        {/* Rating Section */}
        <h3 className="font-bold text-gray-900 text-base">Rating</h3>

        <div className="flex justify-between items-center text-sm">
          <span className="font-bold text-gray-900">Left-Hand-Bat</span>
          <span className="font-medium text-gray-400">
            {player.battingStyle}-Bat
          </span>
        </div>

        {/* Price & Action Button */}
        <div className="flex justify-between items-center pt-1">
          <span className="font-bold text-gray-900 text-base">
            Price: ${player.price}
          </span>
          <button
            onClick={() => handlecoin()}
            className="btn  btn-soft btn-accent"
            disabled={Isselected}
          >
            {Isselected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
}
