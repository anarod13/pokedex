import {cargarListadoPokemones, LIMITE_DE_POKEMONES } from '../cambios.js';
import { armarTablero } from "./general.js";






function obtenerParametrosPagina(url){
 
    let offset;
    let limit;
    try{
    offset = /offset=+[0-9]/gi.exec(url).pop();
    limit = /limit=+[0-9]/
    } catch(e){
    offset = undefined;
    limit = undefined;
    }
    return {offset,limit};
}


export async function armarPaginador(pagina,callbackPaginador){
    const datosPagina = await cargarListadoPokemones;
    $indice = document.querySelector("#indice")
    const cantidadDePaginas = datosPagina.totalPokemones/LIMITE_DE_POKEMONES;

if (datosPagina.urlAnterior){
    const offsetPaginaAnterior = obtenerParametrosPagina(datosPagina.urlAnterior);
    $indice.appendChild(crearItemPaginador("<<",offsetPaginaAnterior))
} else{
    // deshabilitar click en anterior
}

    for (pagina=1;pagina<cantidadDePaginas;pagina++){
        const offsetPagina = (pagina-1)*LIMITE_DE_POKEMONES;
        $indice.appendChild(crearItemPaginador(pagina,offsetPagina))
    }

if(datosPagina.urlSiguiente){
    const offsetPaginaSiguiente = obtenerParametrosPagina(datosPagina.urlSiguiente)
    $indice.appendChild(crearItemPaginador(">>",offsetPaginaSiguiente))
} else{
    // deshabilitarPaginaSiguiente
}

if(pagina.target){
    // activarSeleccionPagina
}

    return callbackPaginador(datosPagina.listado); //cambiar armarTablero para que reciba directamente el listado O hacer el if pagina existe entonces armar tablero (Mejor la opción 2)
}

function crearItemPaginador(pagina, offset){
    let $pagina = document.createElement('div');
    $pagina.classList.add("pagina")
    $pagina.textContet = pagina;
    $pagina.setAttribute('offset',offset)
    return $pagina;
}

// export async function armarPaginador (paginaActual){

    // const datosPagina = await cargarListadoPokemones(paginaActual)
    // const $paginas = document.querySelectorAll(".pagina");
    //     if (3 < paginaActual < 37){
    //         let index= -3
    //         $paginas.forEach(($pagina, i)=>{
    //         if (0<i<6){
    //             let numeroDePagina = paginaActual-index;
    //             asignarDatosPagina($pagina,numeroDePagina)
    //             } else{
    //                 if(i=0){
    //                     let offset = obtenerParametrosPagina(datosPagina.urlAnterior)
    //                     $pagina.setAttribute('offset',offset)
    //                 }
    //                 if(i=6){
    //                     let offset = obtenerParametrosPagina(datosPagina.urlSiguiente);
    //                     $pagina.setAttribute('offset',offset)
    //                 }
    //                     }
                
    //         index = index--;
            
    //             })
    //             // console.log(offset, numeroDePagina, index)
    //             return armarTablero(datosPagina.listado)
    //     }}


