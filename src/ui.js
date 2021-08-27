import { cargarPokemon, cargarDetallesPokemon } from "./cambios.js";
export function seleccionarPagina(paginaSeleccionada, callbackSeleccionPagina) {
    let pagina = paginaSeleccionada.target.id.split("-")[1];

    return callbackSeleccionPagina(pagina);
}

export function armarTablero(pagina) {
    const fichas = document.querySelectorAll(".pokeficha");
    fichas.forEach(function(ficha, indiceFicha) {
        let indicePokemon = chequearIndicePokemon(indiceFicha, pagina);
        asignarPokemon(ficha, indicePokemon)
    })
    activarInfoPokemonOculta();
}

function activarInfoPokemonOculta() {
    document.querySelector("#info-pokemon").style.display = "none";
    document.querySelector("#poketablero").addEventListener('click', mostrarDetallesPokemon, false);

}

function chequearIndicePokemon(indiceFicha, pagina) {
    let indicePokemon = (pagina * 50) + indiceFicha;
    return indicePokemon;
}

async function asignarPokemon(ficha, indicePokemon) {
    ++indicePokemon;
    if (indicePokemon < 899) {
        let pokemon = await cargarPokemon(indicePokemon);
        ficha.querySelector(".pokenombre").innerText = pokemon.nombre;
        ficha.querySelector(".pokefoto").src = pokemon.foto;
        ficha.id = pokemon.id;
    } else {
        return limpiarFicha(ficha);
    }
}

export async function mostrarDetallesPokemon(pokemonSeleccionado) {
    let pokemon = pokemonSeleccionado.target.id || pokemonSeleccionado.target.parentNode.id;
    if (pokemon === "poketablero") {
        return;
    } else {
        let detallesPokemon = await cargarDetallesPokemon(pokemon);
        document.querySelector("#nombre").innerText = detallesPokemon.nombre;
        document.querySelector("#numero").innerText = detallesPokemon.id;
        document.querySelector("#foto").src = detallesPokemon.foto;
        document.querySelector("#categoria").innerText = detallesPokemon.categoria;
        document.querySelector("#habilidad").innerText = detallesPokemon.habilidades;
        document.querySelector("#peso").innerText = detallesPokemon.weight;
        document.querySelector("#altura").innerText = detallesPokemon.altura;

        mostrarInfoPokemon();
    }
}

function mostrarInfoPokemon() {
    document.querySelector("#cerrar-detalles").onclick = cerrarInfoPokemon;
    document.querySelector("#info-pokemon").style.display = "";
}

export function cerrarInfoPokemon() {
    return document.querySelector("#info-pokemon").style.display = "none";
}

function limpiarFicha(ficha) {
    ficha.querySelector(".pokenombre").innerText = "";
    ficha.querySelector(".pokefoto").src = "";
}