/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
import { guardarPokemon, guardarDatosPagina } from '../localStorage';

const fakeLocalStorage = (function () {
  let store = {};

  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    removeItem(key) {
      delete store[key];
    },
    clear() {
      store = {};
    },
  };
}());

const datosPokemon = {
  nombre: 'diancie-mega',
  foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10075.png',
  id: 10075,
  categoria: 'rock',
  habilidad: 'magic-bounce',
  peso: 278,
  altura: 11,
};

const datosPagina = {
  urlAnterior: 'https://pokeapi.co/api/v2/pokemon/?offset=1020&limit=30',
  urlSiguiente: 'https://pokeapi.co/api/v2/pokemon/?offset=1080&limit=30',
  totalPokemones: 1118,
  listadoPokemones: [
    'araquanid-totem',
    'togedemaru-totem',
    'necrozma-dusk',
    'necrozma-dawn',
    'necrozma-ultra',
    'meowth-galar',
    'ponyta-galar',
    'rapidash-galar',
    'slowpoke-galar',
    'slowbro-galar',
    'farfetchd-galar',
    'weezing-galar',
    'mr-mime-galar',
    'articuno-galar',
    'zapdos-galar',
    'moltres-galar',
    'slowking-galar',
    'corsola-galar',
    'zigzagoon-galar',
    'linoone-galar',
    'darumaka-galar',
    'darmanitan-standard-galar',
    'darmanitan-zen-galar',
    'yamask-galar',
    'stunfisk-galar',
    'toxtricity-low-key',
    'eiscue-noice',
    'indeedee-female',
    'zacian-crowned',
    'zamazenta-crowned',
  ],
};
describe('guarda datos en localStorage', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: fakeLocalStorage,
    });
  });

  it('Guarda los datos de un pokemon', () => {
    guardarPokemon('diancie-mega', datosPokemon);

    expect(window.localStorage.getItem('diancie-mega')).toEqual('{"nombre":"diancie-mega","foto":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10075.png","id":10075,"categoria":"rock","habilidad":"magic-bounce","peso":278,"altura":11}');
  });
  it('Guarda los datos de una página', () => {
    guardarDatosPagina(36, datosPagina);
    expect(window.localStorage.getItem('pagina-36')).toEqual('{"urlAnterior":"https://pokeapi.co/api/v2/pokemon/?offset=1020&limit=30","urlSiguiente":"https://pokeapi.co/api/v2/pokemon/?offset=1080&limit=30","totalPokemones":1118,"listadoPokemones":["araquanid-totem","togedemaru-totem","necrozma-dusk","necrozma-dawn","necrozma-ultra","meowth-galar","ponyta-galar","rapidash-galar","slowpoke-galar","slowbro-galar","farfetchd-galar","weezing-galar","mr-mime-galar","articuno-galar","zapdos-galar","moltres-galar","slowking-galar","corsola-galar","zigzagoon-galar","linoone-galar","darumaka-galar","darmanitan-standard-galar","darmanitan-zen-galar","yamask-galar","stunfisk-galar","toxtricity-low-key","eiscue-noice","indeedee-female","zacian-crowned","zamazenta-crowned"]}');
  });
});
