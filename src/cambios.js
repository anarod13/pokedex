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
export const LIMITE_DE_POKEMONES = 50;

export async function cargarListadoPokemones(pagina){
let listadoPokemones;
try{
    listadoPokemones = cargarListadoPokemonesDeCache(pagina)
}
catch(e) {
    const inicioListado = pagina*50;
    const PokemonesPorPaginaAPI = await cargarListadoPokemonesAPI(inicioListado,LIMITE_DE_POKEMONES);
    let datosPagina= mapearListado(PokemonesPorPaginaAPI);
    listadoPokemones = datosPagina.listadoPokemones;
    guardarListadoPagina(pagina,listadoPokemones);
    
    }
    return listadoPokemones;
}
