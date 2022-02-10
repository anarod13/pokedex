/* eslint-disable no-console */
/* eslint-disable no-use-before-define */

export async function mostrarDetallesPokemon(detallesPokemon) {
  document.querySelector('#nombre').innerText = detallesPokemon.nombre;
  document.querySelector('#numero').innerText = detallesPokemon.id;
  document.querySelector('#foto').src = detallesPokemon.foto;
  document.querySelector('#categoria').innerText = detallesPokemon.categoria;
  document.querySelector('#habilidad').innerText = detallesPokemon.habilidad;
  document.querySelector('#peso').innerText = detallesPokemon.peso;
  document.querySelector('#altura').innerText = detallesPokemon.altura;

  mostrarInfoPokemon();
}

function mostrarInfoPokemon() {
  document.querySelector('#cerrar-detalles').onclick = cerrarInfoPokemon;
  document.querySelector('#info-pokemon').style.display = '';
}

export function cerrarInfoPokemon() {
  document.querySelector('#info-pokemon').style.display = 'none';
}
