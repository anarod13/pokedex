import {cargarDatosPagina } from './cambios.js';
import { manejarCambioDePagina} from './ui.js/manejoCambioDePagina.js';
import { armarPaginador } from './ui.js/paginador.js';
import { activarInfoPokemon } from './ui.js/detallesPokemon.js';
import { armarTablero } from './ui.js/tablero.js';

const $indice = document.querySelector("#indice");



async function inicializar() {
    const datosAPI = await cargarDatosPagina(0);     
    activarInfoPokemon();
    return armarPaginador(datosAPI.totalPokemones, actualizarPagina);
}


function actualizarPagina(paginaSeleccionada) {
    return manejarCambioDePagina(paginaSeleccionada, armarTablero);
}

inicializar();