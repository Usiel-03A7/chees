class Pieza {
    /**
     * 
     * @param {'blanco' | 'negro'} color 
     * @param {string} nombre 
     * @param {Reglas} reglas 
     */
    constructor(color,nombre,reglas){
        this.color = color;
        this.nombre = nombre;
        this.reglas = reglas;
        
    }
    /**
     * 
     * @param {string} posicion es una coordenada que representa la posicion de la pieza
     * ejem: "A1" "B2" "C3" "D4" "E5" "F6" "G7" "H8"... etc
     */

    move(posicion){
        const toNumber = {
            'A':1,
            'B':2,
            'C':3,
            'D':4,
            'E':5,
            'F':6,
            'G':7,
            'H':8
        }
        const resultadoLetra =posicion.charAt(0)
        const x = toNumber[resultadoLetra]
        const y = parseInt(posicion.charAt(1));        
        const coordenada = new Coordenada(x,y);
        console.log(this.reglas.getMovimientos(coordenada));
    }
}