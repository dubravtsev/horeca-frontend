import React from "react";
import promoBackground from "../../images/promoBackground.svg";
import auditLogo from "../../images/auditLogo.svg";
import developmentLogo from "../../images/developmentLogo.svg";
import studiLogo from "../../images/studiLogo.svg";
import selectionLogo from "../../images/selectionLogo.svg";
import roomsLogo from "../../images/roomsLogo.svg";
import DaskovaLogo from "../../images/DaskovaLogo.svg";
import WawelbergLogo from "../../images/WawelbergLogo.svg";
import GHELogo from "../../images/GHELogo.svg";
import SchastyeLogo from "../../images/SchastyeLogo.svg";
import CrownePlazaLogo from "../../images/CrownePlazaLogo.svg";

function Promo({ setPopupClose }) {
  return (
    <section className="promo">
      <img
        className="promo__background"
        src={promoBackground}
        alt="фоновое изображение"
      />
      <div className="promo__container">
        <h1 className="promo__title">Консалтинг для ресторанов</h1>
        <h2 className="promo__subtitle">
          Хотите открыть свой ресторан? Уже открыли, но что-то не так?
          Обращайтесь к нам!
        </h2>
        <button className="promo__order-button" onClick={setPopupClose}>
          Заказать консультацию
        </button>
        <ul className="promo__list">
          <li className="promo__list-item">
            <img
              className="promo__list-logo"
              src={auditLogo}
              alt="фоновое изображение"
            />
          </li>
          <li className="promo__list-item">
            <img
              className="promo__list-logo"
              src={developmentLogo}
              alt="фоновое изображение"
            />
          </li>
          <li className="promo__list-item">
            <img
              className="promo__list-logo"
              src={studiLogo}
              alt="фоновое изображение"
            />
          </li>
          <li className="promo__list-item">
            <img
              className="promo__list-logo"
              src={selectionLogo}
              alt="фоновое изображение"
            />
          </li>
        </ul>
      </div>
      <ul className="promo__clients">
        <li className="promo__clients-item">
          <img
            className="promo__clients-logo"
            src={roomsLogo}
            alt="логотип клиента"
          />
        </li>

        <li className="promo__clients-item">
          <img
            className="promo__clients-logo"
            src={DaskovaLogo}
            alt="логотип клиента"
          />
        </li>
        <li className="promo__clients-item">
          <img
            className="promo__clients-logo"
            src={WawelbergLogo}
            alt="логотип клиента"
          />
        </li>
        <li className="promo__clients-item">
          <img
            className="promo__clients-logo"
            src={GHELogo}
            alt="логотип клиента"
          />
        </li>
        <li className="promo__clients-item">
          <img
            className="promo__clients-logo"
            src={SchastyeLogo}
            alt="логотип клиента"
          />
        </li>
        <li className="promo__clients-item">
          <img
            className="promo__clients-logo"
            src={CrownePlazaLogo}
            alt="логотип клиента"
          />
        </li>
      </ul>
    </section>
  );
}

export default Promo;
