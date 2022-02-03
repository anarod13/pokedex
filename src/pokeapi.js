export function cargarPokemon(pokemon) {
    const acceso = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    return fetch(acceso)
        .then((respuesta) => respuesta.json());
}

const LIMITE_DE_POKEMONES = 30

export function cargarDatosPagina(offset = 0,limit = LIMITE_DE_POKEMONES){
    const acceso = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
    return fetch(acceso)
        .then((respuesta) => respuesta.json());
}
