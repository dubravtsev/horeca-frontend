import React from "react";
import burgerCloseLogo from "../../images/burgerCloseLogo.svg";
import BurgerLogoHoreca from "../../images/BurgerLogoHoreca.svg";
import TelegramLogo from "../../images/TelegramLogo.svg";
import WhatsappLogo from "../../images/WhatsappLogo.svg";

export default function BurgerMenu({ burgerClose, setBurgerClose }) {
  return (
    <section className={`burger ${burgerClose && "burger_close"}`}>
      <div className="burger__container">
        <button className="burger__close-button" onClick={setBurgerClose}>
          <img
            src={burgerCloseLogo}
            alt="кнопка закрыть"
            className="burger__close-ikon"
          />
        </button>
        <img
          src={BurgerLogoHoreca}
          alt="логотип меню"
          className="burger__logo"
        />
        <li className="burger__list">
          <ul>
            <button className="burger__list-item">Услуги</button>
          </ul>
          <ul>
            <button className="burger__list-item">Кейсы</button>
          </ul>
          <ul>
            <button className="burger__list-item">О нас</button>
          </ul>
          <ul>
            <button className="burger__list-item">Контакты</button>
          </ul>
        </li>
        <div className="burger__contacts">
          <p className="burger__number">+7 999-66-66</p>
          <img
            src={TelegramLogo}
            alt="Телеграм лого"
            className="burger__contacts-logo"
          />
          <img
            src={WhatsappLogo}
            alt="Вотсап лого"
            className="burger__contacts-logo"
          />
        </div>
      </div>
    </section>
  );
}
