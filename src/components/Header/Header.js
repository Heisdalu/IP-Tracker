import React from "react";
import ArrowIcon from "../../assets/icon-arrow.svg";
import "./Header.css";
import IpDetail from "./IpDetail";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">IP Address Tracker</h1>
      <div className="header_search_box">
        <input
          type="search"
          className="header_search__input"
          aria-label="search ip address"
        />
        <button className="search_ip">
          <img src={ArrowIcon} alt="right-arrow" />
        </button>
      </div>

      <IpDetail />
    </header>
  );
};

export default Header;
