


export function asignarPokemones(listadoPokemones, callbackActivarTablero){
    const $tablero = document.querySelector("#poketablero");
    $tablero.innerHTML= "";
    listadoPokemones.forEach((pokemon=>{
    const $ficha = document.createElement('div');
    $ficha.classList.add('pokeficha')
    $ficha.textContent = pokemon;
    $ficha.id = pokemon;
    $tablero.appendChild($ficha);
}))    

    return callbackActivarTablero;
}