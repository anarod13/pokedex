import {cargarPokemon as cargarPokemonAPI}from './pokeapi.js';
import { cargarListadoPokemones as cargarListadoPokemonesAPI } from './pokeapi.js';
import { cargarImagen } from './pokeapi.js';
import {
    cargarPokemon
    as cargarPokemonCache,
    guardarPokemon
}
from './localStorage.js';
import { mapearListado, mapearPokemon } from './mapeadores/mapeador.js';


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
        export const LIMITE_DE_POKEMONES = 50

export async function cargarListadoPokemones(offset){
    const listadoPokemonesAPI = await cargarListadoPokemonesAPI(offset);
   let listadoPokemones = mapearListado(listadoPokemonesAPI, obtenerNombreEImagen);
    return listadoPokemones;
}

function obtenerNombreEImagen(pokemon){
    const{
         name,
         url,
        } = pokemon;
    
    pokemon.url = cargarImagen(pokemon.url)
    return pokemon;
    }