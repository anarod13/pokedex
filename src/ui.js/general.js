
import { asignarPokemones } from './tablero.js';
import { activarInfoPokemon } from './detallesPokemon.js';
import {cargarListadoPokemones } from '../cambios.js';

export function seleccionarPagina(paginaSeleccionada, callbackSeleccionPagina) {
        if(!paginaSeleccionada.target.classList.contains("pagina")){   
            return;
        } else {
        actualizarIndicePagina(paginaSeleccionada);
            const pagina = Number(paginaSeleccionada.target.textContent);
            return callbackSeleccionPagina(pagina);
        }
}



function actualizarIndicePagina(pagina){
const paginaActiva = document.querySelector(".seleccionada");
if (paginaActiva){
    if (paginaActiva.textContent !== pagina.target.textContent){
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


export async function manejarCambioDePagina(paginaSeleccionada, callbackSeleccionPagina) {
    if(!paginaSeleccionada.target.classList.contains("pagina")){   
        return;
    } else {
    actualizarIndicePagina(paginaSeleccionada);
    const offsetPagina = paginaSeleccionada.target.getAttribute("offset");
    const datosPagina = await cargarListadoPokemones(offsetPagina);
    // actualizarPaginasGuia(datosPagina)
    return callbackSeleccionPagina(datosPagina.listadoPokemones);
    }
}


function actualizarPaginasGuia(datos){
    return;
}