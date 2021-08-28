import * as pokeapi from './pokeapi.js';

export async function cargarPokemon(indicePokemon) {
    const pokemonAPI = await pokeapi.cargarPokemon(indicePokemon);
    const pokemon = {};
    pokemon.nombre = pokemonAPI.name;
    pokemon.foto = pokemonAPI.sprites.front_default;
    pokemon.id = pokemonAPI.name;
    return pokemon;
}

export async function cargarDetallesPokemon(pokemon) {
    const detallesPokemonAPI = await pokeapi.cargarDetallesPokemon(pokemon);
    const detallesPokemon = {};

    detallesPokemon.nombre = detallesPokemonAPI.name;
    detallesPokemon.id = detallesPokemonAPI.id;
    detallesPokemon.foto = detallesPokemonAPI.sprites.front_default;
    detallesPokemon.categoria = detallesPokemonAPI.types[0].type.name;
    detallesPokemon.habilidades = detallesPokemonAPI.abilities[0].ability.name;
    detallesPokemon.peso = detallesPokemonAPI.weight;
    detallesPokemon.altura = detallesPokemonAPI.height;

    return detallesPokemon;
}