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
    catch {

        const pokemonAPI = await cargarPokemonAPI(indicePokemon);
         pokemon = mapearPokemon(pokemonAPI);
        guardarPokemon(indicePokemon, pokemon)
        
    }
    return pokemon;
}

export async function cargarDetallesPokemon(pokemon) {
   let detallesPokemon;
    try {
     detallesPokemon =  cargarPokemonCache(pokemon);
    } catch {
        const detallesPokemonAPI = await cargarPokemonAPI(pokemon);
      detallesPokemon = {};

        detallesPokemon.nombre = detallesPokemonAPI.name;
        detallesPokemon.id = detallesPokemonAPI.id;
        detallesPokemon.foto = detallesPokemonAPI.sprites.front_default;
        detallesPokemon.categoria = detallesPokemonAPI.types[0].type.name;
        detallesPokemon.habilidades = detallesPokemonAPI.abilities[0].ability.name;
        detallesPokemon.peso = detallesPokemonAPI.weight;
        detallesPokemon.altura = detallesPokemonAPI.height;
        guardarPokemon(pokemon, detallesPokemonAPI)
                
    }
    return detallesPokemon;
}