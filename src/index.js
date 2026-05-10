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
  pokemons.sort()

  console.log(pokemons)
};

orderThem();

// --- 3 --- 
const flipThem = () => {
  // reverse the order of the pokemons
  pokemons.reverse()

  console.log(pokemons)
};

flipThem();

// --- 4 ---
const makeThemBig = () => {
  // print the pokemons in UPPERCASE letters
  pokemons.forEach((pokemon) => {

    console.log(pokemon.toUpperCase())
  });
};

makeThemBig();

// --- 5 --- 
const onlyTheBs = () => {
  // only print the pokemons that starts with B
  const bList = pokemons.filter((pokemon) => {
    return pokemon.startsWith("B")
  })

  console.log(bList)
};

onlyTheBs();

// --- 6 --- 
const notTheCs = () => {
  // remove all pokemons that starts with C
  const listWithoutC = pokemons.filter((pokemon) => {
    return !pokemon.startsWith("C");
  });

  console.log(listWithoutC);
};

notTheCs();

// --- 7 --- 
const nameAndIdThanks = () => {
  // print out name and index of all pokemons
  // like: number x - Squirtle
  pokemons.forEach((pokemon, index) => {
    console.log(`Number ${index + 1} - ${pokemon}`);
  });
};

nameAndIdThanks();

// --- 8 ---
const catchPokemon = name => {
  // add a pokemon with a name of your choice to the list,
  // print the list so you see its there.
  pokemons.push(name)

  console.log(pokemons)
};

catchPokemon("Eevee");
catchPokemon("Snorlax");

// --- 9 --- 
const didICatchIt = name => {
  // check the pokemons to see if a specific pokemon is in the array
  const result = pokemons.includes(name)

  if (result) {
    console.log(`Yes, I have caught ${name}!`)
  } else {
    console.log(`No, I haven't found ${name} yet.`)
  }
};

didICatchIt("Pikachu");
didICatchIt("Mewtwo");

// --- 10 --- 
const addInThirdPlace = () => {
  // add the pokemon "Clefairy" in the third place of the array
  // print the list so you see its there.
  pokemons.splice(2, 0, "Clefairy")

  console.log(pokemons);
};

addInThirdPlace();

// ***BONUS***
const theLongestName = () => {
  // find the pokemon with the longest name
  let longest = ""

  pokemons.forEach((pokemon) => {
    if (pokemon.length > longest.length) {
      longest = pokemon
    }
  });

  console.log(`${longest} has the longest name!`)
};

theLongestName(); 