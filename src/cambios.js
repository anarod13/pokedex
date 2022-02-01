import {cargarPokemon as cargarPokemonAPI}from './pokeapi.js';
import { cargarListadoPokemones as cargarListadoPokemonesAPI } from './pokeapi.js';
import {
    cargarPokemon
    as cargarPokemonCache,
    guardarPokemon,
    cargarListadoPokemones 
    as cargarListadoPokemonesDeCache,
    guardarListadoPagina 
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
export const LIMITE_DE_POKEMONES = 30;

export async function cargarListadoPokemones(offset = 0){
let datosPagina;
const pagina = (offset/30)+1;
try{
    datosPagina = cargarListadoPokemonesDeCache(pagina)
}
catch(e) {

    const PokemonesPorPaginaAPI = await cargarListadoPokemonesAPI(offset,LIMITE_DE_POKEMONES);
    datosPagina= mapearListado(PokemonesPorPaginaAPI);
    guardarListadoPagina(pagina,datosPagina);
    
    }
    return datosPagina;
}

