
import { LIMITE_DE_POKEMONES } from "../cambios.js";







export function armarPaginador(totalPokemones, callbackIndice){
    
    const $indice = document.querySelector("#indice")
    const cantidadDePaginas = Math.ceil(totalPokemones/LIMITE_DE_POKEMONES);

    $indice.appendChild(crearItemPaginador("<<",""))

    for (let pagina=1;pagina<=cantidadDePaginas;pagina++){
        const offsetPagina = (pagina-1)*LIMITE_DE_POKEMONES;
        $indice.appendChild(crearItemPaginador(pagina,offsetPagina))
    }

    $indice.appendChild(crearItemPaginador(">>",""))

    $indice.onclick = (e)=>{
        callbackIndice(e);
    }

    identificarPaginasGuia($indice.children)
    return 
}

function crearItemPaginador(pagina, offset){
    let $pagina = document.createElement('div');
    $pagina.classList.add("pagina")
    $pagina.textContent = pagina;
    $pagina.setAttribute('offset',offset)
    return $pagina;
}


function identificarPaginasGuia(indice){
    indice[0].id = "anterior";
    indice[indice.length-1].id = "siguiente";
    return;
}