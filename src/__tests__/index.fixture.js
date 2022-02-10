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
`