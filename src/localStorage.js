export function cargarPokemon(pokemon) {
    return JSON.parse(localStorage.getItem(pokemon));
}


export function guardarPokemon(pokemon, informacionPokemon) {
    return localStorage.setItem(pokemon, JSON.stringify(informacionPokemon))

}