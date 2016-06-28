import Pokedex from 'pokedex-promise-v2';

const P = new Pokedex();

export default function get (pokemon) {
   return P.getPokemonByName(pokemon);
};
