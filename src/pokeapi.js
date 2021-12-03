export function cargarPokemon(i) {
    const acceso = `https://pokeapi.co/api/v2/pokemon/${i}`;
    return fetch(acceso)
        .then((respuesta) => respuesta.json());
}

export const LIMITE_DE_POKEMONES = 50

export function cargarListadoPokemones(offset,limit = LIMITE_DE_POKEMONES){
    const acceso = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
    return fetch(acceso)
        .then((respuesta) => respuesta.json());
}

export function cargarImagen(url){
    const urlPokemon = fetch(url)
        .then((respuesta) => respuesta.json());
    console.log(urlPokemon)
    const imagenPokemon = urlPokemon.sprites.front_default;
    return imagenPokemon;
    }