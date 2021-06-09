function asignarPokemon(ficha, i) {
    ++i;
    if (i < 899) {
        let acceso = `https://pokeapi.co/api/v2/pokemon/${i}`
        fetch(acceso)
            .then(respuesta => respuesta.json())
            .then(respuesta => {
                ficha.querySelector(".pokenombre").innerText = respuesta.name;
                ficha.querySelector(".pokefoto").src = respuesta.sprites.front_default;
            })
    } else {
        limpiarFicha(ficha)
    }
}


armarTablero(0);

let $paginas = document.querySelectorAll(".pagina")
let indice = document.querySelector("#indice");
let paginas = [];
$paginas.forEach($pagina => paginas.push($pagina));

indice.addEventListener('click', seleccionarPagina, false);

function armarTablero(pagina) {

    const fichas = document.querySelectorAll(".pokeficha");
    fichas.forEach(function(ficha, i) {
        let indice = chequearIndice(i, pagina)
        asignarPokemon(ficha, indice)
    })
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