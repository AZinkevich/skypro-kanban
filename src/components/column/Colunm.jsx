function Column({ name, cards }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{name}</p>
      </div>
      <div className="cards">{cards}</div>
    </div>
  );
}

export default Column;
