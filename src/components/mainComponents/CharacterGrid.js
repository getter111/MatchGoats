import { Character } from "./Character";

export const CharacterGrid = (props) => {
  const { characters, handleClick } = props;
  //to scramble pass characters object into character component and then make a random number generator inside character compoennt that way each component can have a random id. to solve duplicate occurances i think just add more images to our state that way there is more variety and less duplicates//

  return (
    <div className="card-wrapper">
      {characters.map((character) => {
        return (
          <Character
            key={character.id}
            character={character}
            handleClick={handleClick}
          ></Character>
        );
      })}

      {/* <Character
        characterIcon={characters[11].icon}
        characterName={characters[11].name}
        characterId={characters[11].id}
        handleClick={handleClick}
      /> */}
    </div>
  );
};
