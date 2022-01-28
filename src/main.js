import {cargarListadoPokemones } from './cambios.js';
import { armarTablero, manejarCambioDePagina} from './ui.js/general.js';
import { armarPaginador } from './ui.js/paginador.js';
import { activarInfoPokemon } from './ui.js/detallesPokemon.js';

const $indice = document.querySelector("#indice");



async function inicializar() {
    const datosAPI = await cargarListadoPokemones(0);     
    activarInfoPokemon();
    return armarPaginador(datosAPI.totalPokemones, actualizarPagina);
}


function actualizarPagina(paginaSeleccionada) {
    return manejarCambioDePagina(paginaSeleccionada, armarTablero);
}

inicializar();