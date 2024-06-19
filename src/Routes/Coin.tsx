import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Coin.css";
import Loading from "../Components/Loading";

type CoinData = {
  id: string;
  symbol: string;
  name: string;
  image: {
    large: string;
  };
  market_data: {
    current_price: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
    total_volume: {
      usd: number;
    };
    price_change_percentage_24h: number;
  };
  description: {
    en: string;
  };
};

const Coin = () => {
  const { coinId } = useParams<{ coinId: string }>();
  const [coin, setCoin] = useState<CoinData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;
    axios
      .get(url)
      .then((res) => {
        setCoin(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.warn("ERROR", error);
        setError("Failed to fetch coin data.");
        setLoading(false);
      });
  }, [coinId]);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  if (error) return <div>{error}</div>;

  return (
    <div className="coin-container">
      {coin && (
        <>
          <h1>{coin.name}</h1>
          <img src={coin.image.large} alt={coin.name} />
          <p>
            <span>Symbol:</span> {coin.symbol}
          </p>
          <p>
            <span>Current Price: </span> $ {coin.market_data.current_price.usd}
          </p>
          <p>
            <span>Market Cap: </span> $ {coin.market_data.market_cap.usd}
          </p>
          <p>
            <span>Total Volume: </span> $ {coin.market_data.total_volume.usd}
          </p>
          <p>
            <span>24h Change: </span>
            {coin.market_data.price_change_percentage_24h} %
          </p>
          <p>
            <span>About: </span> {coin.description.en}
          </p>
        </>
      )}
    </div>
  );
};

export default Coin;
