/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */

import fixture from '../../__tests__/index.fixture';
import { mostrarDetallesPokemon } from '../detallesPokemon';

const detallesPokemon = {
  nombre: 'appletun',
  foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/842.png',
  id: 842,
  categoria: 'grass',
  habilidad: 'ripen',
  peso: 130,
  altura: 4,
};

document.body.innerHTML = fixture;

test('Testea que muestre los detalles del pokemon correctamente', () => {
  mostrarDetallesPokemon(detallesPokemon);
  expect(document.querySelector('#nombre').textContent).toEqual('appletun');
  expect(document.querySelector('#numero').textContent).toEqual('842');
  expect(document.querySelector('#foto').src).toEqual('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/842.png');
  expect(document.querySelector('#categoria').textContent).toEqual('grass');
  expect(document.querySelector('#habilidad').textContent).toEqual('ripen');
  expect(document.querySelector('#peso').textContent).toEqual(130);
  expect(document.querySelector('#altura').textContent).toEqual(4);
});

test('Chequea que oculte el cuadro de detalles del pokemon', () => {
  document.querySelector('#cerrar-detalles').click();
  expect(document.querySelector('#info-pokemon').style.display).toBe('none');
});
