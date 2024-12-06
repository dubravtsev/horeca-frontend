import React from "react";
import puzzleAnimation from "../../images/puzzleAnimation.svg";

export default function PuzzleAnimation() {
  return (
    <section className="puzzle-animation">
      <img
        className="puzzle-animation__background"
        src={puzzleAnimation}
        alt="фоновое изображение"
      />
    </section>
  );
}
