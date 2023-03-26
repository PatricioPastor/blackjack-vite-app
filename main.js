import './style.css'
//* Importa funciones desde el "index.js"
import { crearDeck, pedirCarta, crearCarta, estadoBotones, acumularPuntos, turnoComputadora} from "./src/blackjack/index.js";
//* Importa objetos del DOM desde el "objetos-dom.js" 
import {btnPedir, btnDetener, btnNuevo, divCartasJugadores, puntosHTML} from "./src/blackjack/usecases/objetos-dom"


export let deck    = [];
       const tipos = ['C', 'D', 'H', 'S'],
       especiales  = ['A', 'J', 'Q', 'K'];


export let puntosJugadores = [];

export let puntosComputadora = puntosJugadores[puntosJugadores.length - 1];




// Esta función inicializa el juego 
const inicializarJuego = (numJugadores = 2) => {
  deck = crearDeck(tipos, especiales);

  puntosJugadores = [];
  for (let i = 0; i < numJugadores; i++) {
    puntosJugadores.push(0);
  }

  puntosHTML.forEach(elem => elem.innerText = 0);
  divCartasJugadores.forEach(elem => elem.innerHTML = '');

  estadoBotones( false );

}

// Eventos

btnPedir.addEventListener('click', () => {

  const carta = pedirCarta( deck );
  const puntosJugador = acumularPuntos(carta, 0);

  crearCarta(carta, 0);

  if (puntosJugador > 21) {
    console.warn('Lo siento mucho, perdiste');
    estadoBotones( true );
    turnoComputadora(puntosJugador);

  } else if (puntosJugador === 21) {
    console.warn('21, genial!');
    estadoBotones( true );
    turnoComputadora(puntosJugador);
  }
});


btnDetener.addEventListener('click', () => turnoComputadora(puntosJugadores[0]));

btnNuevo.addEventListener('click', () => inicializarJuego());












