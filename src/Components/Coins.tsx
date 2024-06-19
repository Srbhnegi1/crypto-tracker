import CoinItem from "./CoinItem";
import "./Coins.css";
import { Link } from "react-router-dom";

type Coin = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  total_volume: number;
  market_cap: number;
  market_cap_rank: number;
  price_change_percentage_24h: number;
};

type CoinsProps = {
  coins: Coin[];
};

const Coins = ({ coins }: CoinsProps) => {
  return (
    <div className="container">
      <div>
        <div className="heading">
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p>Volume</p>
          <p>Market Cap</p>
        </div>
        {coins.map((coin) => (
          <Link to={`/coin/${coin.id}`} key={coin.id}>
            <CoinItem coin={coin} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Coins;
