
/**
 * 
 * @param {<String>} carta //Ejemplo: 1, 2, A, K
 * @returns Valor de la carta como "Number"
 */

export const valorCarta = (carta) => {
    if (!carta) throw new Error("La carta no tiene valor alguno") ;

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ? (valor === 'A') ? 11 : 10
                          : valor * 1;
  }