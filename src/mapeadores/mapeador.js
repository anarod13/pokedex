import { Pokemon } from "../entidades/pokemon.js";


export function mapearPokemon(datosApi){
const {
    id,
    name:nombre,
    sprites: {front_default: foto},
    types: [{type:{name:categoria}}]  ,
    abilities: [{ability:{name: habilidad}}],
    weight: peso,
    height:altura
} = datosApi;

    return new Pokemon(
        nombre,
        foto,
        id, 
        categoria,
        habilidad,
        peso,
        altura);
}