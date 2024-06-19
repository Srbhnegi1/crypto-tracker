import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <Link to="/">
      <div className="navBar">
        <FaCoins />
        <h1>
          Coin <span>Search</span>
        </h1>
      </div>
    </Link>
  );
};

export default NavBar;
