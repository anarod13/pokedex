export function buscarPokemon(i) {
    let acceso = `https://pokeapi.co/api/v2/pokemon/${i}`
    return fetch(acceso)
        .then(respuesta => respuesta.json())


}

// export function asignarPokemon(i) {
//     let acceso = `https://pokeapi.co/api/v2/pokemon/${i}`
//     let pokemon = {};
//     fetch(acceso)
//         .then(respuesta => respuesta.json())
//         .then(respuesta => {
//             console.log(respuesta);
//             console.log(respuesta.name);
//             pokemon.nombre = respuesta.name;
//             pokemon.foto = respuesta.sprites.front_default;
//             pokemon.id = respuesta.name;
//         })

//     return pokemon;
// }