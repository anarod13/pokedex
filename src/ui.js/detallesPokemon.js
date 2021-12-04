import { cargarPokemon } from "../cambios.js";

export async function mostrarDetallesPokemon(pokemonSeleccionado) {
    const pokemon = pokemonSeleccionado.target.id || pokemonSeleccionado.target.parentNode.id;
    if (pokemon === 'poketablero') {
        return;
    } else {
        const detallesPokemon = await cargarPokemon(pokemon);
      
        document.querySelector('#nombre').innerText = detallesPokemon.nombre;
        document.querySelector('#numero').innerText = detallesPokemon.id;
        document.querySelector('#foto').src = detallesPokemon.foto;
        document.querySelector('#categoria').innerText = detallesPokemon.categoria;
        document.querySelector('#habilidad').innerText = detallesPokemon.habilidad;
        document.querySelector('#peso').innerText = detallesPokemon.peso;
        document.querySelector('#altura').innerText = detallesPokemon.altura;

        mostrarInfoPokemon();
    }
}

function mostrarInfoPokemon() {
    document.querySelector('#cerrar-detalles').onclick = cerrarInfoPokemon;
    document.querySelector('#info-pokemon').style.display = '';
}

export function cerrarInfoPokemon() {
    return document.querySelector('#info-pokemon').style.display = 'none';
}

export function activarInfoPokemon() {
    document.querySelector('#info-pokemon').style.display = 'none';
    document.querySelector('#poketablero').addEventListener('click', mostrarDetallesPokemon, false);
}