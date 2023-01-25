// const torre = new Torre('blanco');
// torre.move('E5');
// const rey = new Rey('blanco');
// rey.move('F8');
// const peon = new Peon('blanco');
// peon.move('F8');

const tablero = new Tablero(); // declaramos un objeto de clase tablero 
const cuadros = document.querySelector('.cuadros');
/**
 * object es una clase 
 * entries es una funcion de object que retorna un arreglo de arreglos de la forma [[key,valor],[key,valor],[key,valor]]
 * si tuvieramos un objeto persona de forma {nombre: "usiel", edad: 26, sexo: "female"}
 * si aplicamos la funcion entries de la clase Object con O mayuscula
 * Object.entries(persona) entonces obtendríamos un array resultante con los valores siguientes 
 * [["nombre","usiel"],["edad",26],["sexo","female"]]
*/

Object.entries(tablero.casillas).filter((element) => {
    if (element[1].pieza != null) {
        
        return true
    }
    return false
    
}).forEach((element) => { //en el objeto tablero accedimos a su objeto casillas
    //
    const coordenada = element[0];
    const pieza = element[1].pieza;
    
    
    cuadros.querySelector('#' + coordenada).textContent = pieza.getFigura();
})
// console.log(tablero.casillas);


const invertir = document.getElementById('invertir');

invertir.addEventListener('click', () => {
    const arregloCuadros = cuadros.querySelectorAll('div');
    
    // for (let i = arregloCuadros.length -1; i >= 0; i--) {
        
        //     console.log(arregloCuadros[i]);
        
        // }
        const peon = new Peon('blanco')
        const barRight = document.querySelector('.barRight');
        const barDown = document.querySelector('.barDown');
        const barUp = document.querySelector('.barUp');
        const barLeft = document.querySelector('.barLeft');
        
        barRight.classList.toggle('reversa');
        barDown.classList.toggle('reversa');
        barUp.classList.toggle('reversa');
        barLeft.classList.toggle('reversa');
        
        for (let i = 0; i < arregloCuadros.length; i++) {
            let aux = arregloCuadros[i]
            let aux2 = arregloCuadros[arregloCuadros.length - i - 1]
            cuadros.removeChild(aux)
            cuadros.removeChild(aux2)
            cuadros.insertAdjacentElement("afterbegin", aux)
            cuadros.insertAdjacentElement("beforeend", aux2)
        }
        
    })
    
    
    /**
     * 
    */
   
   cuadros.addEventListener('click', (e) => {
       let cuadroElectoAnterior = cuadros.querySelector('.cuadroElecto')
       
       limpiar();
       
       mover(e,cuadroElectoAnterior);
       
       
    })
    
    function limpiar() {
        let cuadroElectoAnterior = cuadros.querySelector('.cuadroElecto')
        let movimientoElectoAnterior = cuadros.querySelectorAll('.movimiento')
    
    if (cuadroElectoAnterior) {        
        cuadroElectoAnterior.classList.remove('cuadroElecto')
        movimientoElectoAnterior.forEach((nodo)=>{
            nodo.classList.remove('movimiento')
        })
    }
}
function mover(e,cuadroElectoAnterior) {
    
    let cuadroElecto = e.target

    
    if(cuadroElectoAnterior ){

        if (cuadroElectoAnterior.id===cuadroElecto.id) {
            limpiar();
            return
        }
        else{
            let movimientoPermitido = tablero.casillas[cuadroElectoAnterior.id].pieza.move(cuadroElectoAnterior.id)
            
            if(!movimientoPermitido.some(id=>{
                return id===cuadroElecto.id
            })){
                return 
            }
            let AuxPieza =  tablero.casillas[cuadroElectoAnterior.id].pieza
            AuxPieza.contador ++;
            tablero.casillas[cuadroElecto.id].pieza = AuxPieza;
            tablero.casillas[cuadroElectoAnterior.id].pieza = null;
            cuadroElecto.textContent=cuadroElectoAnterior.textContent;
            cuadroElectoAnterior.textContent = '';
            return

        }
    }


    if (!tablero.casillas[cuadroElecto.id].pieza) {
        return
    }

    cuadroElecto.classList.add('cuadroElecto');

    
    let posibleMovimiento = tablero.casillas[cuadroElecto.id].pieza.move(cuadroElecto.id)
    //console.log(posibleMovimiento)
    posibleMovimiento.forEach(id=>{ 
        cuadros.querySelector('#'+id).classList.add('movimiento')
    })
    

    //tablero.casillas[cuadroElectoAnterior]
    
}

// function PiezaConReglas(pieza) {
    
//     let figuras = [ '♞', '♘','♟', '♙', '♜', '♖', '♚', '♔', '♛', '♕', '♝', '♗'];
//     let piezaBuscada = pieza
//     for (let i = 0; i < figuras.length; i++) {
        
//         if (piezaBuscada == figuras[i]) {
//             console.log('si está en el arreglo');      
//         }
//     }
// }



