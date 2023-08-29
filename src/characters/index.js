import harry from "./harry";
import ron from "./ron";
import hermione from "./hermione";

const getCharacters = () => {
  const characters = [harry, ron, hermione];
  // Side effect logging
  console.log(characters);
  return characters;
};

export default getCharacters;
