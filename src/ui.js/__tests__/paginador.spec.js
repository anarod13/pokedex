/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import { armarPaginador } from '../paginador';
import indexFixture from '../../__tests__/index.fixture';

const totalPokemones = 1118;
const mockCallback = jest.fn();

document.body.innerHTML = indexFixture;

describe('Chequea que arme el indice correctamente', () => {
  armarPaginador(totalPokemones, mockCallback);
  const $indice = document.querySelectorAll('.pagina');
  it('Arma el número de páginas correctas', () => {
    expect($indice).toHaveLength(40);
  });

  it('Identifica una sola página aterior', () => {
    const $paginaAnterior = document.querySelectorAll('#anterior');
    expect($paginaAnterior).toHaveLength(1);
  });

  it('Identifica la primera página como anterior', () => {
    expect($indice[0].id).toBe('anterior');
  });
  it('Identifica una sola página siguiente', () => {
    const $paginaSiguiente = document.querySelectorAll('#siguiente');
    expect($paginaSiguiente).toHaveLength(1);
  });

  it('Identifica la última página como siguiente', () => {
    expect($indice[39].id).toBe('siguiente');
  });

  it('Asigna callback a todas las páginas', () => {
    $indice.forEach(($pagina) => {
      $pagina.click();
    });
    expect(mockCallback).toHaveBeenCalledTimes(40);
  });
});
