/**
 * @jest-environment jsdom
 */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
import datosPaginaFixture1 from './datosPagina1.fixture.json';
import { manejarCambioDePagina } from '../manejoCambioDePagina';
import indiceFixture from './indice.fixture';

document.body.innerHTML = indiceFixture;

const mockCallback = jest.fn();
const $paginas = document.querySelectorAll('.pagina');
$paginas.forEach(($pagina) => {
  $pagina.onclick = (e) => {
    manejarCambioDePagina(e, mockCallback);
  };
});

it('Chequea que deshabilita botón anterior al seleccionar la primera página', () => {
  global.fetch = jest.fn()
    .mockImplementation(() => new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r(datosPaginaFixture1);
      });
      resolve({ json: () => jsonPromise });
    }));

  $paginas[1].click();
  expect(document.querySelector('#anterior').classList).toContain('deshabilitada');
});
