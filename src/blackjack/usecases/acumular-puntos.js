import { valorCarta } from "./valor-carta";
import { puntosJugadores } from "../../../main"
import { puntosHTML } from "./objetos-dom";

/**
 * 
 * @param {String} carta 
 * @param {Number} turno numero de jugar para determinar la posicion del arreglo 
 * @returns suma los puntos obtenidos de la carta en la posicion dada con el turno
 */


export const acumularPuntos = (carta, turno) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
  }