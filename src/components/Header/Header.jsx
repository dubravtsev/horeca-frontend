import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import burgerMenu from "../../images/burgerMenu.svg";

function Header({ setPopupClose }) {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src={logo} alt="логотип приложения" />
        </Link>
        <button className="header__burger-menu" onClick={setPopupClose}>
          <img
            src={burgerMenu}
            alt="кнопка меню"
            className="header__menu-ikon"
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
