export function cargarPokemon(i) {
    let acceso = `https://pokeapi.co/api/v2/pokemon/${i}`
    return fetch(acceso)
        .then(respuesta => respuesta.json())


}

export function cargarDetallesPokemon(pokemon) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(respuesta => respuesta.json())
}