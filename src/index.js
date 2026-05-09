const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey"
];

// --- 1 --- 
const countThem = () => {
  console.log(`I have ${pokemons.length} pokemons!`)
  // print out, in a sentence, how many pokemons I have.
  // like: "I have x pokemons!"
};

countThem();

// --- 2 --- 
const orderThem = () => {
  // order the pokemons alphabetically
  pokemons.sort();

  console.log(pokemons)
};

orderThem();

const flipThem = () => {
  // reverse the order of the pokemons
};

const makeThemBig = () => {
  // print the pokemons in UPPERCASE letters
};

const onlyTheBs = () => {
  // only print the pokemons that starts with B
};

const notTheCs = () => {
  // remove all pokemons that starts with C
};

const nameAndIdThanks = () => {
  // print out name and index of all pokemons
  // like: number x - Squirtle
};

const catchPokemon = name => {
  // add a pokemon with a name of your choice to the list,
  // print the list so you see its there.
};

const didICatchIt = name => {
  // check the pokemons to see if a specific pokemon is in the array
};

const addInThirdPlace = () => {
  // add the pokemon "Clefairy" in the third place of the array
  // print the list so you see its there.
};

// ***BONUS***
const theLongestName = () => {
  // find the pokemon with the longest name
};
