import { cerrarInfoPokemon } from "./ui.js";
import * as pokeapi from "./pokeapi.js";

export async function asignarPokemon(ficha, i) {
    ++i;
    if (i < 899) {
        let pokemon = await pokeapi.buscarPokemon(i);
        ficha.querySelector(".pokenombre").innerText = pokemon.name;
        ficha.querySelector(".pokefoto").src = pokemon.sprites.front_default;
        ficha.id = pokemon.name;

    } else {
        return limpiarFicha(ficha);
    }
}

// export async function asignarPokemon(ficha, i) {
//     ++i;
//     if (i < 899) {
//         const pokemon = await pokeapi.asignarPokemon(i);
//         ficha.querySelector(".pokenombre").innerText = pokemon.nombre;
//         ficha.querySelector(".pokefoto").src = pokemon.foto;
//         ficha.id = pokemon.id;
//     } else {
//         return limpiarFicha(ficha);
//     }
// }

export function mostrarPokemon(ficha) {

    let pokemon = ficha.target.id || ficha.target.parentNode.id;
    console.log(pokemon);
    if (pokemon === "poketablero") {
        return;
    } else {
        fetch(` https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(respuesta => respuesta.json())
            .then(respuesta => {
                document.querySelector("#nombre").innerText = respuesta.name;
                document.querySelector("#numero").innerText = respuesta.id;
                document.querySelector("#foto").src = respuesta.sprites.front_default;
                document.querySelector("#categoria").innerText = respuesta.types[0].type.name;
                document.querySelector("#habilidad").innerText = respuesta.abilities[0].ability.name;
                document.querySelector("#peso").innerText = respuesta.weight;
                document.querySelector("#altura").innerText = respuesta.height;

            })
        document.querySelector("#cerrar-detalles").onclick = cerrarInfoPokemon;
        return document.querySelector("#info-pokemon").style.display = "";


    }
}