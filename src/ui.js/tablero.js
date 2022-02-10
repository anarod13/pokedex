
import { cargarPokemon } from '../cambios.js';
import { mostrarDetallesPokemon } from './detallesPokemon.js';


    export function armarTablero(listadoPokemones) {
        return asignarPokemones(listadoPokemones,async (nombre) => {
            mostrarDetallesPokemon(await cargarPokemon(nombre))})
    }

export function asignarPokemones(listadoPokemones, callbackSeleccionPokemon = () => {}){
    const $tablero = document.querySelector("#poketablero");
    $tablero.innerHTML= "";
    listadoPokemones.forEach((pokemon=>{
    const $ficha = document.createElement('div');
    $ficha.classList.add('pokeficha')
    $ficha.textContent = pokemon;
    $ficha.id = pokemon;
    $ficha.onclick = (e)=>{callbackSeleccionPokemon(e)}   
    $tablero.appendChild($ficha);
}))    



    return;
}

// function activarInfoPokemon(pokemon) {
//     document.querySelector('#info-pokemon').style.display = 'none';
//     document.querySelector('#poketablero').addEventListener('click', function(){(mostrarDetallesPokemon(pokemon,cargarPokemon(pokemon)))}, false);
// }