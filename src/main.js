let $paginas = document.querySelectorAll(".pagina")
let paginas = [];
$paginas.forEach($pagina => paginas.push($pagina));
const fichas = document.querySelectorAll(".pokeficha");
let indice = document.querySelector("#indice");
indice.addEventListener('click', seleccionarPagina, false);

function asignarPokemon(ficha, i) {
    ++i;
    if (i < 899) {
        let acceso = `https://pokeapi.co/api/v2/pokemon/${i}`
        fetch(acceso)
            .then(respuesta => respuesta.json())
            .then(respuesta => {
                ficha.querySelector(".pokenombre").innerText = respuesta.name;
                ficha.querySelector(".pokefoto").src = respuesta.sprites.front_default;
                ficha.id = respuesta.name;
                ficha.querySelector(".pokenombre").id = respuesta.name;
                ficha.querySelector(".pokefoto").id = respuesta.name;

            })
    } else {
        return limpiarFicha(ficha);
    }
}


armarTablero(0);



function armarTablero(pagina) {
    fichas.forEach(function(ficha, i) {
        let indice = chequearIndice(i, pagina)
        asignarPokemon(ficha, indice)
    })
    document.querySelector("#info-pokemon").style.display = "none";
    document.querySelector("#poketablero").addEventListener('click', mostrarPokemon, false)
}

function chequearIndice(i, pagina) {
    let indice = (pagina * 50) + i;
    return indice;
}

function seleccionarPagina(paginaSeleccionada) {
    let pagina = paginas.indexOf(paginaSeleccionada.target);
    return armarTablero(pagina);
}

function limpiarFicha(ficha) {
    ficha.querySelector(".pokenombre").innerText = "";
    ficha.querySelector(".pokefoto").src = "";
}

function mostrarPokemon(ficha) {

    let pokemon = ficha.target.id;
    if (pokemon === "poketablero") {
        return;
    } else {
        fetch(` https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(respuesta => respuesta.json())
            .then(respuesta => {
                document.querySelector("#nombre").innerText = respuesta.name;
                document.querySelector("#numero").innerText = respuesta.id;
                document.querySelector("#foto").src = respuesta.sprites.front_default;
                document.querySelector("#categoria").innerText = respuesta.types[0].type.name;
                document.querySelector("#habilidad").innerText = respuesta.abilities[0].ability.name;
                document.querySelector("#peso").innerText = respuesta.weight;
                document.querySelector("#altura").innerText = respuesta.height;

            })
        return document.querySelector("#info-pokemon").style.display = "";


    }
}

document.querySelector("#cerrar-detalles").addEventListener("click", cerrarInfoPokemon, false);

function cerrarInfoPokemon() {
    return document.querySelector("#info-pokemon").style.display = "none";
}