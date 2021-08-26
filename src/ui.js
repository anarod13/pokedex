import { asignarPokemon, mostrarPokemon } from "./cambios.js";
export function seleccionarPagina(paginaSeleccionada, callbackSeleccionPagina) {
    let pagina = paginaSeleccionada.target.id.split("-")[1];

    return callbackSeleccionPagina(pagina);
}

export function armarTablero(pagina) {
    const fichas = document.querySelectorAll(".pokeficha");
    fichas.forEach(function(ficha, i) {
        let indice = chequearIndice(i, pagina);
        asignarPokemon(ficha, indice)
    })
    document.querySelector("#info-pokemon").style.display = "none";
    document.querySelector("#poketablero").addEventListener('click', mostrarPokemon, false)
}

function chequearIndice(i, pagina) {
    let indice = (pagina * 50) + i;
    return indice;
}

export function cerrarInfoPokemon() {
    return document.querySelector("#info-pokemon").style.display = "none";
}

function limpiarFicha(ficha) {
    ficha.querySelector(".pokenombre").innerText = "";
    ficha.querySelector(".pokefoto").src = "";
}