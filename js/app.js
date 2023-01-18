// const torre = new Torre('blanco');
// torre.move('E5');
// const rey = new Rey('blanco');
// rey.move('F8');
// const peon = new Peon('blanco');
// peon.move('F8');

const cuadros = document.querySelector('.cuadros')

const tablero = new Tablero()

Object.entries(tablero.casillas).filter(([key, casilla]) => casilla.pieza != null).forEach(([key, casilla]) => {
    cuadros.querySelector(`div[data-posicion="${key}"]`).textContent = casilla.pieza.getFigura()
})
cuadros.addEventListener('click',(e)=>{
    const casilla=e.target.closest('div').dataset.posicion; 
    const t = tablero.casillas[casilla];
    const moves = t.pieza.move(casilla)
    // console.log(moves);
    cuadros.querySelectorAll(`div[data-posicion]`).forEach(casilla => {
        casilla.classList.remove('highlight')
    })
    moves.forEach(move => {
        cuadros.querySelector(`div[data-posicion="${move}"]`).classList.add('highlight')
    })
    
})