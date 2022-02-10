/* eslint-disable linebreak-style */
export function cargarPokemon(pokemonID) {
  const pokemon = JSON.parse(localStorage.getItem(pokemonID));
  if (pokemon === null) {
    throw new Error(`Pokemon con id ${pokemonID} no encontrado`);
  }

  return pokemon;
}

export function guardarPokemon(pokemon, informacionPokemon) {
  return localStorage.setItem(pokemon, JSON.stringify(informacionPokemon));
}

export function cargarDatosPagina(pagina) {
  const keyPagina = `pagina-${pagina}`;
  const datosPagina = JSON.parse(localStorage.getItem(keyPagina));
  if (datosPagina === null) {
    throw new Error(`Datos para página ${pagina} no encontrado`);
  }
  return datosPagina;
}

export function guardarDatosPagina(pagina, datosPagina) {
  const keyPagina = `pagina-${pagina}`;
  return localStorage.setItem(keyPagina, JSON.stringify(datosPagina));
}
