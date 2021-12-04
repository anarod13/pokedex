export function asignarPokemones(listadoPokemones, callbackActivarTablero){
    const fichas = document.querySelectorAll('.pokeficha'); 
    fichas.forEach((ficha, indice) => {
        ficha.querySelector('.pokenombre').innerText = listadoPokemones[indice];
        ficha.id = listadoPokemones[indice];
            });
    return callbackActivarTablero;
}