import { Suspense, useState } from "react";
import Banner from "./component/Banner";
import Navbar from "./component/Navbar";
import Playercard from "./component/Playercard";

import type { Iplayer } from "./type/Playertype";

const fetchPlayer = async (): Promise<Iplayer[]> => {
  const response = await fetch("/player.json");
  const data = await response.json();
  return data;
};

export default function App() {
  const [playerpromise] = useState(() => fetchPlayer());
  const [coin, setcoin] = useState(5000);
  return (
    <>
      <Navbar coin={coin} />
      <Banner />
      <Suspense fallback={<p>Loading....</p>}>
        <Playercard
          coin={coin}
          setcoin={setcoin}
          playerpromise={playerpromise}
        />
      </Suspense>
    </>
  );
}
