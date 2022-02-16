/**
 * @jest-environment jsdom
 */
/* eslint-disable func-names */
/* eslint-disable quote-props */
/* eslint-disable no-undef */
import {
  guardarPokemon, guardarDatosPagina, cargarPokemon, cargarDatosPagina,
} from '../localStorage';

const fakeLocalStorage = (function () {
  let store = {
    'pagina-1': '{"urlAnterior":null,"urlSiguiente":"https://pokeapi.co/api/v2/pokemon/?offset=30&limit=30","totalPokemones":1118,"listadoPokemones":["bulbasaur","ivysaur","venusaur","charmander","charmeleon","charizard","squirtle","wartortle","blastoise","caterpie","metapod","butterfree","weedle","kakuna","beedrill","pidgey","pidgeotto","pidgeot","rattata","raticate","spearow","fearow","ekans","arbok","pikachu","raichu","sandshrew","sandslash","nidoran-f","nidorina"]}',
    'appletun': '{"nombre":"appletun","foto":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/842.png","id":842,"categoria":"grass","habilidad":"ripen","peso":130,"altura":4}',
  };

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

const datosPokemonDianciemega = {
  nombre: 'diancie-mega',
  foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10075.png',
  id: 10075,
  categoria: 'rock',
  habilidad: 'magic-bounce',
  peso: 278,
  altura: 11,
};

const datosPagina36 = {
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

const datosPagina1 = {
  urlAnterior: null, urlSiguiente: 'https://pokeapi.co/api/v2/pokemon/?offset=30&limit=30', totalPokemones: 1118, listadoPokemones: ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise', 'caterpie', 'metapod', 'butterfree', 'weedle', 'kakuna', 'beedrill', 'pidgey', 'pidgeotto', 'pidgeot', 'rattata', 'raticate', 'spearow', 'fearow', 'ekans', 'arbok', 'pikachu', 'raichu', 'sandshrew', 'sandslash', 'nidoran-f', 'nidorina'],
};

const datosPokemonAppletun = {
  nombre: 'appletun', foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/842.png', id: 842, categoria: 'grass', habilidad: 'ripen', peso: 130, altura: 4,
};

describe('guarda datos en localStorage', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: fakeLocalStorage,
    });
  });

  it('Guarda los datos de un pokemon', () => {
    guardarPokemon('diancie-mega', datosPokemonDianciemega);

    expect(window.localStorage.getItem('diancie-mega')).toEqual('{"nombre":"diancie-mega","foto":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10075.png","id":10075,"categoria":"rock","habilidad":"magic-bounce","peso":278,"altura":11}');
  });
  it('Guarda los datos de una página', () => {
    guardarDatosPagina(36, datosPagina36);
    expect(window.localStorage.getItem('pagina-36')).toEqual('{"urlAnterior":"https://pokeapi.co/api/v2/pokemon/?offset=1020&limit=30","urlSiguiente":"https://pokeapi.co/api/v2/pokemon/?offset=1080&limit=30","totalPokemones":1118,"listadoPokemones":["araquanid-totem","togedemaru-totem","necrozma-dusk","necrozma-dawn","necrozma-ultra","meowth-galar","ponyta-galar","rapidash-galar","slowpoke-galar","slowbro-galar","farfetchd-galar","weezing-galar","mr-mime-galar","articuno-galar","zapdos-galar","moltres-galar","slowking-galar","corsola-galar","zigzagoon-galar","linoone-galar","darumaka-galar","darmanitan-standard-galar","darmanitan-zen-galar","yamask-galar","stunfisk-galar","toxtricity-low-key","eiscue-noice","indeedee-female","zacian-crowned","zamazenta-crowned"]}');
  });
  it('Carga datos página', () => {
    const datosPagina = cargarDatosPagina(1);
    expect(datosPagina).toEqual(datosPagina1);
  });
  it('Carga datos pokemon', () => {
    const datosPokemon = cargarPokemon('appletun');
    expect(datosPokemon).toEqual(datosPokemonAppletun);
  });
});
