export function cargarPokemon(pokemonID) {
    const pokemon = JSON.parse(localStorage.getItem(pokemonID));
    if (pokemon === null) 
    {
        throw new Error(`Pokemon con id ${id} no encontrado`);}
    
        return pokemon;

}

export function guardarPokemon(pokemon, informacionPokemon) {
    return localStorage.setItem(pokemon, JSON.stringify(informacionPokemon))

}