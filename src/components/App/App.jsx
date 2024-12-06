import React from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Popup from "../Popup/Popup";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [popupClose, setPopupClose] = useState(true);
  const [burgerClose, setBurgerClose] = useState(true);

  function handlePopupOpen() {
    setPopupClose(false);
  }

  function handlePopupClose() {
    setPopupClose(true);
  }

  function handleBurgerOpen() {
    setBurgerClose(false);
  }

  function handleBurgerClose() {
    setBurgerClose(true);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header setPopupClose={handleBurgerOpen} />
                  <Main setPopupClose={handlePopupOpen} />
                  <Popup
                    popupClose={popupClose}
                    setPopupClose={handlePopupClose}
                  />
                  <BurgerMenu
                    burgerClose={burgerClose}
                    setBurgerClose={handleBurgerClose}
                  />
                </>
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
