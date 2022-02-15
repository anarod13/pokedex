/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */

import { cargarDatosPagina } from './cambios.js';
import { manejarCambioDePagina } from './ui.js/manejoCambioDePagina.js';
import { armarPaginador } from './ui.js/paginador.js';
import { armarTablero } from './ui.js/tablero.js';

async function actualizarPagina(paginaSeleccionada) {
  return manejarCambioDePagina(paginaSeleccionada, armarTablero);
}

export default async function inicializar() {
  const datosAPI = await cargarDatosPagina(0);
  document.querySelector('#info-pokemon').style.display = 'none';
  return armarPaginador(datosAPI.totalPokemones, actualizarPagina);
}
