import { Link } from "react-router-dom";
import {
  UilShoppingCart,
  UilListUl,
  UilUserCircle,
  UilBookOpen,
} from "@iconscout/react-unicons";
import "./header.css";

const Header = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to={`/`}>
          <div className="navbar-logo">
            <UilBookOpen size="35" />
          </div>
        </Link>
        <Link to={`/`}>
          <div className="navbar-title">
            <h3>Bibliophile</h3>
          </div>
        </Link>
      </div>

      <div className="navbar-middle">
        <ul className="navbar-list">
          <Link to={`/`}>
            <li className="navbar-list-items">Home</li>
          </Link>
          <Link to={`/books`}>
            <li className="navbar-list-items">Books</li>
          </Link>
          <Link to={`/trade`}>
            <li className="navbar-list-items">Trade</li>
          </Link>
        </ul>
      </div>
      <div className="navbar-right">
        <div className="navbar-search">
          <input type="text" placeholder="Search" />
        </div>
        <div className="navbar-cart">
          <UilShoppingCart />
        </div>
        <div className="navbar-menu">
          <UilUserCircle />
        </div>
      </div>
    </div>
  );
};

export default Header;
