import {cargarPokemon as cargarPokemonAPI}from './pokeapi.js';
import { cargarDatosPagina as cargarDatosPaginaAPI } from './pokeapi.js';
import {
    cargarPokemon
    as cargarPokemonCache,
    guardarPokemon,
    cargarDatosPagina 
    as cargarDatosPaginaDeCache,
    guardarDatosPagina 
}
from './localStorage.js';
import { mapearDatosPagina, mapearPokemon } from './mapeadores/mapeador.js';


export async function cargarPokemon(pokemonSeleccionado) {
    const indicePokemon = pokemonSeleccionado.target.id
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

export async function cargarDatosPagina(offset = 0){
let datosPagina;
const pagina = (offset/30)+1;
try{
    datosPagina = cargarDatosPaginaDeCache(pagina)
}
catch(e) {

    const PokemonesPorPaginaAPI = await cargarDatosPaginaAPI(offset,LIMITE_DE_POKEMONES);
    datosPagina= mapearDatosPagina(PokemonesPorPaginaAPI);
    guardarDatosPagina(pagina,datosPagina);
    
    }
    return datosPagina;
}

