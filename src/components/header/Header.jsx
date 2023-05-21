import React from "react";
import {
  UilShoppingCart,
  UilListUl,
  UilBookOpen,
} from "@iconscout/react-unicons";
import "./header.css";

const Header = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <UilBookOpen size="35" />
        </div>
        <div className="navbar-title">
          <h3>Bibliophile</h3>
        </div>
      </div>
      <div className="navbar-middle">
        <ul className="navbar-list">
          <li className="navbar-list-items">Home</li>
          <li className="navbar-list-items">Category</li>
          <li className="navbar-list-items">Collections</li>
          <li className="navbar-list-items">Contact Us</li>
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
          <UilListUl />
        </div>
      </div>
    </div>
  );
};

export default Header;
