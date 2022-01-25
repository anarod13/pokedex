import cargarListadoPokemones from "../cambios.js"

export async function armarPaginador (paginaActual){
const datosPagina = await cargarListadoPokemones(paginaActual)
const $paginas = document.querySelectorAll(".pagina");
if (3 < paginaActual < 37){
    $paginas[0].setAttribute('offset',datosPagina.anterior)
}
   
// const anterior = datosPagina.anterior;
// if (anterior !== null) {
// armarPaginaPrevia
// }

}