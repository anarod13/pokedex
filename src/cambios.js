import {cargarPokemon as cargarPokemonAPI}from './pokeapi.js';
import {
    cargarPokemon
    as cargarPokemonCache,
    guardarPokemon
}
from './localStorage.js';
import { mapearPokemon } from './mapeadores/mapeador.js';


export async function cargarPokemon(indicePokemon) {
    let pokemon;
    try {  pokemon = cargarPokemonCache(indicePokemon) } 
    catch(e) {

        const pokemonAPI = await cargarPokemonAPI(indicePokemon);
        pokemon = mapearPokemon(pokemonAPI);
            guardarPokemon(indicePokemon, pokemon);
          }
    return pokemon;
}
