// /**
//  * @jest-environment jsdom
//  */

// import fixture from "./index.fixture.js";
// import { seleccionarPagina } from "../ui.js";



// document.body.innerHTML = fixture;
// const mockCallback = jest.fn();

// const $indice = document.querySelector("#indice");

// $indice.onclick = (e)=>{
//     seleccionarPagina(e, mockCallback);
// }


// test("Chequea que no seleccione pagina si no se hace click en un botón de pagina",()=>{
//     document.querySelector("#indice").click()
//     expect(mockCallback).toHaveBeenCalledTimes(0);
// })

// test("Chequea que llame una página correctamente",()=>{
//     document.querySelector("#pagina-3").click();
//     expect(mockCallback).toHaveBeenCalledWith("3");

// })

// test("Chequea que todas las paginas se actualicen al hacerles click",()=>{
//     document.querySelectorAll(".pagina").forEach(pagina => {
//         pagina.click();
//             });
//         expect(mockCallback).toHaveBeenCalledTimes(19)
//         })