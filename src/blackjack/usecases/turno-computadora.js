
import { puntosJugadores, deck } from "../../../main";
import { pedirCarta, acumularPuntos, crearCarta, estadoBotones } from "../index";

/**
 * 
 * @param {<Number>} puntosMinimos  son los puntos del Jugador 1
 * @returns el resultado final del juego
 */

export const turnoComputadora = ( puntosMinimos ) => {

    estadoBotones( true );

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
        crearCarta(carta, puntosJugadores.length - 1);

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    return determinarGanador();
}



/**
 * 
 * @returns Esta funcion determina el ganador de todo el juego
 */
export const determinarGanador = () => {

    const [puntosMinimos, puntosComputadora] = puntosJugadores;

    return setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 300);

}