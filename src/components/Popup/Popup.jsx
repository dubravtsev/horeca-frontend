import React from "react";
import popupCloseLogo from "../../images/popupCloseLogo.svg";

export default function Popup({ popupClose, setPopupClose }) {
  return (
    <section className={`popup ${popupClose && "popup_close"}`}>
      <div className="popup__container">
        <h1 className="popup__title">Мы вам перезвоним</h1>
        <form className="popup__form">
          <input className="popup__form-field" placeholder="Имя" />
          <input className="popup__form-field" placeholder="Телефон" />
        </form>
        <button className="popup__submit">Отправить</button>
        <button className="popup__close-button" onClick={setPopupClose}>
          <img
            src={popupCloseLogo}
            alt="кнопка закрыть"
            className="popup__close-ikon"
          />
        </button>
        <p className="popup__agreement">
          Нажимая кнопку «Отправить», вы соглашаетесь с политикой
          конфиденциальности
        </p>
      </div>
    </section>
  );
}
