import React from "react";
import { useState } from "react";

export default function Specs() {
  const [specsOpenShow, setSpecsOpenShow] = useState(true);
  const [specsWorkShow, setSpecsWorkShow] = useState(false);

  return (
    <section className="specs">
      <div className="specs__container">
        <h2 className="specs__subtitle">Наши специализации:</h2>
        <button
          className={`specs__open ${specsOpenShow ? "specs__color" : ""}`}
          onClick={function () {
            setSpecsWorkShow(false);
            setSpecsOpenShow(true);
          }}
        >
          Открыть заведение
        </button>
        <button
          className={`specs__work ${specsWorkShow ? "specs__color" : ""}`}
          onClick={function () {
            setSpecsOpenShow(false);
            setSpecsWorkShow(true);
          }}
        >
          Заведение уже работает
        </button>

        {specsOpenShow ? (
          <ul className="specs__list specs__list-open">
            <li className="specs__list-item">разработка концепции</li>
            <li className="specs__list-item">дизайн-проект</li>
            <li className="specs__list-item">
              поиск поставщиков и оборудования
            </li>
            <li className="specs__list-item">выстроим бизнес-процессы</li>
            <li className="specs__list-item">запуск проекта</li>
          </ul>
        ) : (
          <></>
        )}

        {specsWorkShow ? (
          <ul className="specs__list specs__list-work">
            <li className="specs__list-item">аудит сервиса и анализ продаж</li>
            <li className="specs__list-item">
              отчет и рекомендации на основе аудита
            </li>
            <li className="specs__list-item">реализация</li>
          </ul>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}
