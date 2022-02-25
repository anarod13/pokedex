export default `<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>Pokedex</title>
    <link rel="stylesheet" href="src/style.css">
</head>


<body>

    <h1>Pokedex</h1>
    <div id="tipos"></div>

    <div id="indice">

    </div>
    <div id="poketablero">
        <div class="pokeficha" id="bulbasaur">bulbasaur</div>  
        <div class="pokeficha" id="ivysaur">ivysaur</div>
        <div class="pokeficha" id="venusaur">venusaur</div>
        <div class="pokeficha" id="charmander">charmander</div>
        <div class="pokeficha" id="charmeleon">charmeleon</div>
        <div class="pokeficha" id="charizard">charizard</div>
        <div class="pokeficha" id="squirtle">squirtle</div>
        <div class="pokeficha" id="wartortle">wartortle</div>
        <div class="pokeficha" id="blastoise">blastoise</div>
        <div class="pokeficha" id="caterpie">caterpie</div>
        <div class="pokeficha" id="metapod">metapod</div>
        <div class="pokeficha" id="butterfree">butterfree</div>
        <div class="pokeficha" id="weedle">weedle</div>
        <div class="pokeficha" id="kakuna">kakuna</div>
        <div class="pokeficha" id="beedrill">beedrill</div>
        <div class="pokeficha" id="pidgey">pidgey</div>
        <div class="pokeficha" id="pidgeotto">pidgeotto</div>
        <div class="pokeficha" id="pidgeot">pidgeot</div>
        <div class="pokeficha" id="rattata">rattata</div>
        <div class="pokeficha" id="raticate">raticate</div>
        <div class="pokeficha" id="spearow">spearow</div>
        <div class="pokeficha" id="fearow">fearow</div>
        <div class="pokeficha" id="ekans">ekans</div>
        <div class="pokeficha" id="arbok">arbok</div>
        <div class="pokeficha" id="pikachu">pikachu</div>
        <div class="pokeficha" id="raichu">raichu</div>
        <div class="pokeficha" id="sandshrew">sandshrew</div>
        <div class="pokeficha" id="sandslash">sandslash</div>
        <div class="pokeficha" id="nidoran-f">nidoran-f</div>
        <div class="pokeficha" id="nidorina">nidorina</div>
    </div>


    <div id="info-pokemon">

        <div class="nombre" id="nombre">Nombre</div>
        <div class="id-pokemon" id="numero">Numero</div>
        <div class="cerrar-detalles" id="cerrar-detalles">x</div>


        <div class="foto"> <img id="foto" src=" " alt=" "></div>
            <div class="detalles" >
              
                   <p>Categoría: <em id="categoria"></em>
                    </p>
                <p>Habilidad: 
                    <em id="habilidad"></em> </p>
                <p>Altura:
                    <em id="altura"></em></p>
                <p>Peso:
                    <em id="peso"></em>
                    </p>
               
            </div>

    </div>


</body>
`;
