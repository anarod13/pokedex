export function cargarPokemon(i) {
    const acceso = `https://pokeapi.co/api/v2/pokemon/${i}`;
    return fetch(acceso)
        .then((respuesta) => respuesta.json());
}

