/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
import { armarTablero } from '../tablero';
import indexFixture from '../../__tests__/index.fixture';

const listadoPokemonesA = [
  'dragalge',
  'clauncher',
  'clawitzer',
  'helioptile',
  'heliolisk',
  'tyrunt',
  'tyrantrum',
  'amaura',
  'aurorus',
  'sylveon',
  'hawlucha',
  'dedenne',
  'carbink',
  'goomy',
  'sliggoo',
  'goodra',
  'klefki',
  'phantump',
  'trevenant',
  'pumpkaboo-average',
  'gourgeist-average',
  'bergmite',
  'avalugg',
  'noibat',
  'noivern',
  'xerneas',
  'yveltal',
  'zygarde',
  'diancie',
  'hoopa',
];
const listadoPokemonesB = [
  'poliwhirl',
  'poliwrath',
  'abra',
  'kadabra',
  'alakazam',
  'machop',
  'machoke',
  'machamp',
  'bellsprout',
  'weepinbell',
  'victreebel',
  'tentacool',
  'tentacruel',
  'geodude',
  'graveler',
  'golem',
  'ponyta',
  'rapidash',
  'slowpoke',
  'slowbro',
  'magnemite',
  'magneton',
  'farfetchd',
  'doduo',
  'dodrio',
  'seel',
  'dewgong',
  'grimer',
  'muk',
  'shellder',
];

document.body.innerHTML = indexFixture;

describe('Arma el tablero con un listado de pokemones', () => {
  armarTablero(listadoPokemonesA);
  const $fichasA = document.querySelectorAll('.pokeficha');
  it('Chequea que cree 30 fichas', () => {
    expect($fichasA).toHaveLength(30);
  });
  it('Actualiza el tablero con un nuevo llamado', () => {
    armarTablero(listadoPokemonesB);
    const $fichasB = document.querySelectorAll('.pokeficha');
    expect($fichasB).not.toEqual($fichasA);
  });
});
