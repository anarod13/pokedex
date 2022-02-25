/**
 * @jest-environment jsdom
 */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
import datosPokemonAPI from './fixtures/datosPokemonAPI.fixture.json';
import datosPaginaAPI from './fixtures/datosPagina2.fixture.json';
import { cargarPokemon, cargarDatosPagina } from '../cambios';
import indexFixture from './fixtures/indexCompleto.fixture';

document.body.innerHTML = indexFixture;

global.fetch = jest.fn();

document.querySelector('#poketablero').onclick = (e) => {
  cargarPokemon(e);
};

const $paginas = document.querySelectorAll('.pagina');
$paginas.forEach(($pagina) => {
  $pagina.onclick = (e) => {
    const offset = e.target.getAttribute('offset');
    cargarDatosPagina(offset);
  };
});

test('Carga un pokemón de la API', () => {
  global.fetch.mockImplementationOnce(() => new Promise((resolve) => {
    const jsonPromise = new Promise((r) => {
      r(datosPokemonAPI);
    });
    resolve({ json: () => jsonPromise });
  }));
  document.querySelector('#charmander').click();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/charmander');
});

test('Carga datos de página de la API', () => {
  global.fetch.mockImplementationOnce(() => new Promise((resolve) => {
    const jsonPromise = new Promise((r) => {
      r(datosPaginaAPI);
    });
    resolve({ json: () => jsonPromise });
  }));
  $paginas[2].click();
  expect(global.fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/?offset=30&limit=30');
});
