import { Card } from "../Card/Card.jsx";

export const Column = ({ name, cards }) => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{name}</p>
      </div>
      <div className="cards">
        {cards.map(card => (
          <Card
            name={card.theme}
            color={card.themeStyle}
            key={card.id}
          />
        ))}
      </div>
    </div>
  );
};
