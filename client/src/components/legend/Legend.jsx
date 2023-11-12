import "./Legend.css";

export const Legend = () => {
  return (
    <div className="legend">
      <h2 className="legend__title">Что означают эмоджи?</h2>
      <p className="legend__subtitle">
        В нашей игре эмоджи — это типичные страхи приемных детей. Советуем не
        давать им спуску: начинай игру и лови страхи, кликая на них мышкой!
      </p>
      <ul className="legend__text">
        <li>
          <p>
            <span className="legend__icon">🧸</span> — страх одиночества
          </p>
        </li>
        <li>
          <p>
            <span className="legend__icon">👿</span> — страх предательства
          </p>
        </li>
        <li>
          <p>
            <span className="legend__icon">😡</span> — страх насилия
          </p>
        </li>
        <li>
          <p>
            <span className="legend__icon">💔</span> — страх, что мама исчезнет
          </p>
        </li>
        <li>
          <p>
            <span className="legend__icon">😷</span> — страх врачей
          </p>
        </li>
        <li>
          <p>
            <span className="legend__icon">🌚</span> — страх темноты
          </p>
        </li>
        <li>
          <p>
            <span className="legend__icon">😰</span> — страх быть осмеянным за
            жизнь в детском доме и боязнь выделяться
          </p>
        </li>
        <li>
          <p>
            <span className="legend__icon">🙈</span> — страх новых мест и всего
            непривычного, что подрывает ожидания
          </p>
        </li>
        <li>
          <p>
            <span className="legend__icon">👨🏻‍⚖️</span> — страх оказаться в органах
            опеки{" "}
          </p>
        </li>
      </ul>
    </div>
  );
};
