
function gerundio(palabra) {
    if (palabra.endsWith('ndo')) {
        return true
    }
    return false
}

function verificar(isGerundio, array) {
   
    array.forEach((element) => {
        console.log(element, isGerundio(element) ? 'Es gerundio' : 'No es gerundio');
    });

   
}

verificar(gerundio, array)

const array = ['Pedro', 'Arbol', 'Riendo']

function each(valor, index, array) {

}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    each(element, i, array)

}
let cuadroElectoAnterior;
let cuadroNuevo
let pieza = tablero.casillas[cuadroElectoAnterior.id].pieza;
let collor = pieza.color;
let movimientosPermitidos


