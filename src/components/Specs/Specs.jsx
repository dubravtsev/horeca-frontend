import React from "react";
import SpecsLogo from "../../images/SpecsLogo.svg";

export default function Specs() {
  return (
    <section className="specs">
      <img
        className="specs__background"
        src={SpecsLogo}
        alt="фоновое изображение"
      />
    </section>
  );
}
