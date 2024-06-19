import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import Coins from "./Components/Coins";
import Coin from "./Routes/Coin";
import Loading from "./Components/Loading";
type Coin = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  market_cap_rank: number;
  price_change_percentage_24h: number;
};

const App = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const apiUrl =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setCoins(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("ERROR", error);
        setError("Failed to fetch coin data.");
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  if (error) return <div>{error}</div>;
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />
        <Route path="/coin/:coinId" element={<Coin />} />
      </Routes>
    </>
  );
};

export default App;
