/* eslint-disable linebreak-style */
/* eslint-disable prefer-destructuring */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-useless-return */
/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
/* eslint-disable import/extensions */

import { cargarDatosPagina } from '../cambios.js';
import { cerrarInfoPokemon } from './detallesPokemon.js';

function actualizarIndicePagina(pagina) {
  const paginaActiva = document.querySelector('.seleccionada');
  const $pagina = pagina.target;

  if (paginaActiva) {
    if (paginaActiva.textContent !== $pagina.textContent) {
      paginaActiva.classList.remove('seleccionada');
      $pagina.classList.add('seleccionada');
    }
  } else {
    $pagina.classList.add('seleccionada');
  }

  if ($pagina.id) {
    const paginaDireccionada = ($pagina.getAttribute('offset') / 30) + 1;
    const $indice = document.querySelectorAll('.pagina');
    $indice[paginaDireccionada].click();
    $pagina.classList.remove('seleccionada');
  }
}

export async function manejarCambioDePagina(paginaSeleccionada, callbackSeleccionPagina) {
  actualizarIndicePagina(paginaSeleccionada);
  const offsetPagina = paginaSeleccionada.target.getAttribute('offset');
  const datosPagina = await cargarDatosPagina(offsetPagina);
  actualizarPaginasGuia(datosPagina);
  cerrarInfoPokemon();
  return callbackSeleccionPagina(datosPagina.listadoPokemones);
}

function actualizarPaginasGuia(datosPagina) {
  const $paginaAnterior = document.querySelector('#anterior');
  if (datosPagina.urlAnterior) {
    const offsetAnterior = obtenerOffsetPagina(datosPagina.urlAnterior);
    $paginaAnterior.setAttribute('offset', offsetAnterior);
    $paginaAnterior.classList.remove('deshabilitada');
  } else {
    $paginaAnterior.classList.add('deshabilitada');
  }

  const $paginaSiguiente = document.querySelector('#siguiente');
  if (datosPagina.urlSiguiente !== null) {
    const offsetSiguiente = obtenerOffsetPagina(datosPagina.urlSiguiente);
    $paginaSiguiente.setAttribute('offset', offsetSiguiente);
    $paginaSiguiente.classList.remove('deshabilitada');
  } else {
    $paginaSiguiente.classList.add('deshabilitada');
  }
}

function obtenerOffsetPagina(url) {
  let offset;
  try {
    offset = /offset=+[0-9]+/gi.exec(url).pop();
    offset = offset.split('=')[1];
  } catch (e) {
    offset = undefined;
  }
  return offset;
}
