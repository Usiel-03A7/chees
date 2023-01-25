class Peon extends Pieza {
    /**
     * 
     * @param {'blanco' | 'negro'} color 
     */
    constructor(color) {

        let reglas = new Reglas([new Coordenada(0, 1),new Coordenada(0,2)], true);

        if (color === 'negro') {
            reglas = new Reglas([new Coordenada(0, -1),new Coordenada(0,-2)], true);
        }
        super(color, 'Peon', reglas)

    }
     move(posicion) {
        const toNumber = {
            'A': 1,
            'B': 2,
            'C': 3,
            'D': 4,
            'E': 5,
            'F': 6,
            'G': 7,
            'H': 8
        }
        const resultadoLetra = posicion.charAt(0)
        const x = toNumber[resultadoLetra]
        const y = parseInt(posicion.charAt(1));
        const coordenada = new Coordenada(x, y);
        if (this.contador!=0) {

           return  this.reglas.getMovimientos(coordenada).filter((element, index)=>{
                return index != 1
            });
            
        }
        return this.reglas.getMovimientos(coordenada);
    }

}