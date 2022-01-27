import { seleccionarPagina, armarTablero } from './ui.js/general.js';
import { armarPaginador } from './ui.js/paginador.js';
const $indice = document.querySelector("#indice");

$indice.onclick = (e)=>{
    actualizarPagina(e);
}

function inicializar() {
    armarPaginador(3);
}


function actualizarPagina(paginaSeleccionada) {
    return seleccionarPagina(paginaSeleccionada, armarPaginador);
}

inicializar();