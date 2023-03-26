/**
 * @param {Boolean} estado si es verdadero esta activado y si es falso estan desactivados
 * @returns Esta funcion eactiva/desactiva los botones
 */


export const estadoBotones = ( estado ) => {
    return btnPedir.disabled = estado, btnDetener.disabled = estado;
}