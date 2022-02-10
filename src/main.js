import {cargarDatosPagina } from './cambios.js';
import { mostrarDetallesPokemon } from './ui.js/detallesPokemon.js';
import { manejarCambioDePagina} from './ui.js/manejoCambioDePagina.js';
import { armarPaginador } from './ui.js/paginador.js';
import { armarTablero } from './ui.js/tablero.js';

const $indice = document.querySelector("#indice");



async function inicializar() {
    const datosAPI = await cargarDatosPagina(0);     
    document.querySelector('#info-pokemon').style.display = 'none';
    return armarPaginador(datosAPI.totalPokemones, actualizarPagina);
}


async function actualizarPagina(paginaSeleccionada) {
    return     manejarCambioDePagina(paginaSeleccionada, armarTablero);
}

inicializar();