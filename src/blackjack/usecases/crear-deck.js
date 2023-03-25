import _ from "underscore"
import { deck } from "../../../main"

export const crearDeck = (tiposCartas, tiposEspeciales) => {

    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposCartas) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposCartas) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
    return _.shuffle(deck);
}