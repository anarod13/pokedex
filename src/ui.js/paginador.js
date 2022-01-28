
import { armarTablero } from "./general.js";
import { LIMITE_DE_POKEMONES } from "../cambios.js";





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


export function armarPaginador(totalPokemones){
    
    const $indice = document.querySelector("#indice")
    const cantidadDePaginas = totalPokemones/LIMITE_DE_POKEMONES;

    $indice.appendChild(crearItemPaginador("<<",""))

    for (let pagina=1;pagina<cantidadDePaginas;pagina++){
        const offsetPagina = (pagina-1)*LIMITE_DE_POKEMONES;
        $indice.appendChild(crearItemPaginador(pagina,offsetPagina))
    }

    $indice.appendChild(crearItemPaginador(">>",""))

    return 
}

function crearItemPaginador(pagina, offset){
    let $pagina = document.createElement('div');
    $pagina.classList.add("pagina")
    $pagina.textContent = pagina;
    $pagina.setAttribute('offset',offset)
    console.log($pagina)
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


