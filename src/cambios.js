import * as pokeapi from "./pokeapi.js";

export async function cargarPokemon(indicePokemon) {
    let pokemonAPI = await pokeapi.cargarPokemon(indicePokemon);
    let pokemon = {};
    pokemon.nombre = pokemonAPI.name;
    pokemon.foto = pokemonAPI.sprites.front_default;
    pokemon.id = pokemonAPI.name;
    return pokemon;

}

export async function cargarDetallesPokemon(pokemon) {
    let detallesPokemonAPI = await pokeapi.cargarDetallesPokemon(pokemon);
    let detallesPokemon = {};

    detallesPokemon.nombre = detallesPokemonAPI.name;
    detallesPokemon.id = detallesPokemonAPI.id;
    detallesPokemon.foto = detallesPokemonAPI.sprites.front_default;
    detallesPokemon.categoria = detallesPokemonAPI.types[0].type.name;
    detallesPokemon.habilidades = detallesPokemonAPI.abilities[0].ability.name;
    detallesPokemon.peso = detallesPokemonAPI.weight;
    detallesPokemon.altura = detallesPokemonAPI.height;

    return detallesPokemon;
}