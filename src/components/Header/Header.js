import React, {useRef } from "react";
import ArrowIcon from "../../assets/icon-arrow.svg";
import "./Header.css";
import IpDetail from "./IpDetail";

const Header = (props) => {
  const inputRef = useRef();


  const InputHandler = () => {
    if (inputRef.current.value) {
      props.searchIP(inputRef.current.value);
    }
  };

  document.body.addEventListener("keyup", (e) => {
    if (e.key === "Enter" && inputRef.current.value) {
      props.searchIP(inputRef.current.value);
    }
  });

  return (
    <header className="header">
      <h1 className="header__title">IP Address Tracker</h1>
      <div className="header_search_box">
        <input
          type="search"
          className="header_search__input"
          aria-label="ip address"
          ref={inputRef}
          placeholder="Search for any IP address or domain"
        />
        <button className="search_ip" onClick={InputHandler}>
          <img src={ArrowIcon} alt="right-arrow" />
        </button>
      </div>

      <IpDetail data={props.data}/>
    </header>
  );
};

export default Header;
