import { seleccionarPagina, armarTablero } from '/src/ui.js';

let indice = document.querySelector("#indice");
indice.addEventListener('click', actualizarPagina, false);


function inicializar() {
    armarTablero(0);
}


function actualizarPagina(paginaSeleccionada) {
    return seleccionarPagina(paginaSeleccionada, armarTablero);
}

inicializar();