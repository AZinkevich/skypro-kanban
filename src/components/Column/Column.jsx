import { Card } from "../Card/Card.jsx";
import { Cards, ColumnTitle, MainColumn } from "./Column.styled.js";

export const Column = ({ status, cards }) => {
  return (
    <MainColumn>
      <ColumnTitle>
        <p>{status}</p>
      </ColumnTitle>
      <Cards>
        {cards.map(card => (
          <Card
            theme={card.theme}
            status={card.status}
            title={card.title}
            date={card.date}
            key={card.id}
          />
        ))}
      </Cards>
    </MainColumn>
  );
};
