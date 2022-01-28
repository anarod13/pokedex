import {cargarListadoPokemones } from './cambios.js';
import { seleccionarPagina} from './ui.js/general.js';
import { armarPaginador } from './ui.js/paginador.js';

const $indice = document.querySelector("#indice");

$indice.onclick = (e)=>{
    actualizarPagina(e);
}

async function inicializar() {
    const datosAPI = await cargarListadoPokemones(0);     
    
    return armarPaginador(datosAPI.totalPokemones);
}


function actualizarPagina(paginaSeleccionada) {
    return seleccionarPagina(paginaSeleccionada, armarPaginador);
}

inicializar();