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

export function cargarListadoPokemones(pagina){
    const keyPagina = `pagina-${pagina}`;
    const listadoPokemones = JSON.parse(localStorage.getItem(keyPagina));
    if (listadoPokemones===null)
    {
        throw new Error (`Listado para página ${pagina} no encontrado`)
     }
     return listadoPokemones;
}

export function guardarListadoPagina(pagina,listadoPokemones){
    const keyPagina = `pagina-${pagina}`;
    return localStorage.setItem(keyPagina,JSON.stringify(listadoPokemones))
}