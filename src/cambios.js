import * as pokeapi from './pokeapi.js';
import {
    cargarPokemon
    as cargarPokemonCache,
    guardarPokemon
}
from './localStorage.js';
export async function cargarPokemon(indicePokemon) {
    try { cargarPokemonCache(pokemon) } catch {

        const pokemonAPI = await pokeapi.cargarPokemon(indicePokemon);
        const pokemon = {};
        pokemon.nombre = pokemonAPI.name;
        pokemon.foto = pokemonAPI.sprites.front_default;
        pokemon.id = pokemonAPI.id;
        guardarPokemon(indicePokemon, pokemonAPI)
        return pokemon;
    }
}

export async function cargarDetallesPokemon(pokemon) {
    try {
        cargarPokemonCache(pokemon);
    } catch {
        const detallesPokemonAPI = await pokeapi.cargarPokemon(pokemon);
        const detallesPokemon = {};

        detallesPokemon.nombre = detallesPokemonAPI.name;
        detallesPokemon.id = detallesPokemonAPI.id;
        detallesPokemon.foto = detallesPokemonAPI.sprites.front_default;
        detallesPokemon.categoria = detallesPokemonAPI.types[0].type.name;
        detallesPokemon.habilidades = detallesPokemonAPI.abilities[0].ability.name;
        detallesPokemon.peso = detallesPokemonAPI.weight;
        detallesPokemon.altura = detallesPokemonAPI.height;
        guardarPokemon(pokemon, detallesPokemonAPI)
        return detallesPokemon;
    }
}