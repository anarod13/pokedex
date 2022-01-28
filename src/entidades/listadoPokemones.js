export class ListadoPokemon{
    constructor(urlAnterior, urlSiguiente,totalPokemones, listadoPokemones =[]){
        this.urlAnterior = urlAnterior,
        this.urlSiguiente = urlSiguiente,
        this.totalPokemones = totalPokemones,
        this.listadoPokemones = listadoPokemones
    }
}