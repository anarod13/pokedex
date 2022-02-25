/**
 * @jest-environment jsdom
 */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
import datosPaginaFixture2 from './fixtures/datosPagina2.fixture.json';
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

const listadoPokemonesPagina2 = ['nidoqueen',
  'nidoran-m',
  'nidorino',
  'nidoking',
  'clefairy',
  'clefable',
  'vulpix',
  'ninetales',
  'jigglypuff',
  'wigglytuff',
  'zubat',
  'golbat',
  'oddish',
  'gloom',
  'vileplume',
  'paras',
  'parasect',
  'venonat',
  'venomoth',
  'diglett',
  'dugtrio',
  'meowth',
  'persian',
  'psyduck',
  'golduck',
  'mankey',
  'primeape',
  'growlithe',
  'arcanine',
  'poliwag'];

describe('Maneja el cambio de página', () => {
  global.fetch = jest.fn()
    .mockImplementation(() => new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r(datosPaginaFixture2);
      });
      resolve({ json: () => jsonPromise });
    }));

  $paginas[2].click();
  it('Muestra la página seleccionada', () => {
    expect($paginas[2].classList).toContain('seleccionada');
    expect(document.querySelectorAll('.seleccionada')).toHaveLength(1);
  });
  it('Actualiza las paginas guia', () => {
    expect($paginas[0].getAttribute('offset')).toEqual('0');
    expect($paginas[39].getAttribute('offset')).toEqual('60');
  });

  it('Oculta la caja de detalles del pokemon', () => {
    expect(document.querySelector('#info-pokemon').style.display).toBe('none');
  });
  it('Ejecuta el callback', () => {
    expect(mockCallback).toHaveBeenCalledWith(listadoPokemonesPagina2);
  });
  it('El botón anterior funciona correctamente', () => {
    $paginas[0].click();
    expect($paginas[1].classList).toContain('seleccionada');
    expect(document.querySelectorAll('.seleccionada')).toHaveLength(1);
  });
  it('El botón siguiente funciona correctamente', () => {
    $paginas[39].click();
    expect($paginas[3].classList).toContain('seleccionada');
    expect(document.querySelectorAll('.seleccionada')).toHaveLength(1);
  });
});
