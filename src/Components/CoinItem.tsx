import "./CoinItem.css";
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

type CoinItemProps = {
  coin: Coin;
};

const CoinItem = ({ coin }: CoinItemProps) => {
  return (
    <div className="coinRow">
      <p>{coin.market_cap_rank}</p>
      <div className="cryptoImg">
        <img src={coin.image} alt="cryptoImage" />
        <p> {coin.symbol}</p>
      </div>
      <p>${coin.current_price}</p>
      <p>{coin.price_change_percentage_24h} %</p>
      <p>${coin.total_volume}</p>
      <p>${coin.market_cap}</p>
    </div>
  );
};

export default CoinItem;
