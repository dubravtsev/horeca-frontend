import React from "react";
import Promo from "../Promo/Promo";
import Specs from "../Specs/Specs";
import PuzzleAnimation from "../PuzzleAnimation/PuzzleAnimation";

export default function Main({ popupClose, setPopupClose }) {
  return (
    <main className="main">
      <Promo popupClose={popupClose} setPopupClose={setPopupClose} />
      <Specs />
      <PuzzleAnimation />
    </main>
  );
}
