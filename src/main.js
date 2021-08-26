import { seleccionarPagina, armarTablero, cerrarInfoPokemon } from '/src/ui.js';

let indice = document.querySelector("#indice");
indice.addEventListener('click', cambiarPagina, false);
// document.querySelector("#cerrar-detalles").addEventListener("click", cerrarInfoPokemon, false);


function inicializar() {
    armarTablero(0);
}


function cambiarPagina(paginaSeleccionada) {
    return seleccionarPagina(paginaSeleccionada, armarTablero);
}

inicializar();