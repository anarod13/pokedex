function armarTablero(i) {


    fetch("https://pokeapi.co/api/v2/pokemon/1")
        .then(respuesta => respuesta.json())
        .then(respuestaJSON => {
            // document.querySelector(".pokenombre1").innerText = JSON.stringify(respuestaJSON.);
            // console.log(JSON.stringify(respuestaJSON));
            document.querySelector("#texto").innerText = respuestaJSON.name;
            document.querySelector(".pokefoto1").src = respuestaJSON.sprites.front_default;
        })
}

armarTablero("1");