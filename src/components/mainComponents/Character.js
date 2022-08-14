export const Character = (props) => {
  const { character, handleClick } = props;

  // const componentOrderStyle = {
  //   order: order
  // }

  return (
    <div className="card" onClick={() => handleClick(character)}>
      <img src={character.icon} alt={character.name} />
      <div className="text">{character.name}</div>
    </div>
  );
};
