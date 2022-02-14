/* eslint-disable no-undef */
import { cargarDatosPagina, cargarPokemon } from '../pokeapi';

beforeEach(() => {
  global.fetch = jest.fn();
});

test('Carga datos pokemon', () => {
  global.fetch.mockImplementationOnce(() => new Promise((resolve) => {
    const jsonPromise = new Promise((r) => {
      r({});
    });
    resolve({ json: () => jsonPromise });
  }));

  cargarPokemon('bulbasaur');
  expect(global.fetch)
    .toHaveBeenCalledTimes(1);

  expect(global.fetch)
    .toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/bulbasaur');
});

test('Carga datos página', () => {
  global.fetch.mockImplementationOnce(() => new Promise((resolve) => {
    const jsonPromise = new Promise((r) => {
      r({});
    });
    resolve({ json: () => jsonPromise });
  }));
  cargarDatosPagina(60, 30);
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/?offset=60&limit=30');
});
