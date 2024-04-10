import Card from "../Card/Card";

export const Column = ({ name, cards }) => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{name}</p>
      </div>
      <div className="cards">
        {cards.map((card, index) => (
          <Card
            cardTheme={card.theme}
            cardTitle={card.title}
            cardThemeStyle={card.themeStyle}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}


