import { Pokemon } from "../entidades/pokemon.js";


export function mapearPokemon(datosApi){
const {
    id,
    name:nombre,
    sprites: {front_default: foto}
    } = datosApi;

    return new Pokemon(nombre,foto,id);
}