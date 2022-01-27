
import { asignarPokemones } from './tablero.js';
import { activarInfoPokemon } from './detallesPokemon.js';

export function seleccionarPagina(paginaSeleccionada, callbackSeleccionPagina) {
        if(!paginaSeleccionada.target.classList.contains("pagina")){   
            return;
        } else {
        actualizarIndicePagina(paginaSeleccionada);
            const pagina = Number(paginaSeleccionada.target.textContent);
            return callbackSeleccionPagina(pagina);
        }
}

// export function seleccionarPagina(paginaSeleccionada, callbackSeleccionPagina) {
//     if(!paginaSeleccionada.target.classList.contains("pagina")){   
//         return;
//     } else {
//     actualizarIndicePagina(paginaSeleccionada);
//         const pagina = paginaSeleccionada.target.id.split('-')[1];
//         return callbackSeleccionPagina(pagina);
//     }
// } 

function actualizarIndicePagina(pagina){
const paginaActiva = document.querySelector(".seleccionada");
if (paginaActiva){
    if (paginaActiva.id !== pagina.target.id){
        paginaActiva.classList.remove("seleccionada");
        pagina.target.classList.add("seleccionada");
    }
}else{
    pagina.target.classList.add("seleccionada");
}
}

export async function armarTablero(listadoPokemones) {

    return asignarPokemones(listadoPokemones, activarInfoPokemon());
    
}










