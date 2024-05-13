import { Card } from "../Card/Card.jsx";
import { Cards, ColumnTitle, MainColumn } from "./Column.styled.js";

export const Column = ({ status, cards }) => {
  return (
    <MainColumn>
      <ColumnTitle>
        <p>{status}</p>
      </ColumnTitle>
      <Cards>
        {cards.map(el => (
          <Card
            key={el._id}
            card={el}
          />
        ))}
      </Cards>
    </MainColumn>
  );
};
