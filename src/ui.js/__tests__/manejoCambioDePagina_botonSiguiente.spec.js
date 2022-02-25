/**
 * @jest-environment jsdom
 */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
import datosPaginaFixture38 from './fixtures/datosPagina38.fixture.json';
import { manejarCambioDePagina } from '../manejoCambioDePagina';
import indiceFixture from './fixtures/indice.fixture';

document.body.innerHTML = indiceFixture;

const mockCallback = jest.fn();
const $paginas = document.querySelectorAll('.pagina');
$paginas.forEach(($pagina) => {
  $pagina.onclick = (e) => {
    manejarCambioDePagina(e, mockCallback);
  };
});

it('Deshabilita botón siguiente al seleccionar la última página', () => {
  global.fetch = jest.fn()
    .mockImplementation(() => new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r(datosPaginaFixture38);
      });
      resolve({ json: () => jsonPromise });
    }));

  $paginas[38].click();
  expect(document.querySelectorAll('#siguiente').classList).toContain('deshabilitada');
});
