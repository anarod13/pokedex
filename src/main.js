import { seleccionarPagina, armarTablero } from './ui.js/general.js';
const $indice = document.querySelector("#indice");

$indice.onclick = (e)=>{
    actualizarPagina(e);
}

function inicializar() {
    armarTablero(0);
}


function actualizarPagina(paginaSeleccionada) {
    return seleccionarPagina(paginaSeleccionada, armarTablero);
}

inicializar();