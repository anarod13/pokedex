export function cargarPokemon(pokemon) {
    const acceso = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    return fetch(acceso)
        .then((respuesta) => respuesta.json());
}

export const LIMITE_DE_POKEMONES = 50

export function cargarListadoPokemones(offset,limit = LIMITE_DE_POKEMONES){
    const acceso = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
    return fetch(acceso)
        .then((respuesta) => respuesta.json());
}
