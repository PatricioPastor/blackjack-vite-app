import { divCartasJugadores } from "./objetos-dom";

/**
 * 
 * @param {<String>} carta carta que toco del mazo
 * @param {<Number>} turno turno del jugador que toca
 * @returns Esta funcion retorna la carta en el DOM
 */
export const crearCarta = (carta, turno) => {

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
    imgCarta.classList.add('carta');

    return divCartasJugadores[turno].append(imgCarta);
  
  }