
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


export function armarPaginador(totalPokemones, callbackIndice){
    
    const $indice = document.querySelector("#indice")
    const cantidadDePaginas = totalPokemones/LIMITE_DE_POKEMONES;

    $indice.appendChild(crearItemPaginador("<<",""))

    for (let pagina=1;pagina<cantidadDePaginas;pagina++){
        const offsetPagina = (pagina-1)*LIMITE_DE_POKEMONES;
        $indice.appendChild(crearItemPaginador(pagina,offsetPagina))
    }

    $indice.appendChild(crearItemPaginador(">>",""))

    $indice.onclick = (e)=>{
        callbackIndice(e);
    }
    return 
}

function crearItemPaginador(pagina, offset){
    let $pagina = document.createElement('div');
    $pagina.classList.add("pagina")
    $pagina.textContent = pagina;
    $pagina.setAttribute('offset',offset)
    return $pagina;
}
