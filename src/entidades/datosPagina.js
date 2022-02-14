/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
export class DatosPagina {
  constructor(urlAnterior, urlSiguiente, totalPokemones, listadoPokemones = []) {
    this.urlAnterior = urlAnterior,
    this.urlSiguiente = urlSiguiente,
    this.totalPokemones = totalPokemones,
    this.listadoPokemones = listadoPokemones;
  }
}
