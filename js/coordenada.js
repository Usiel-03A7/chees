class Coordenada {
    /**
     * 
     * @param {number} x valor en la posicion horizontal 
     * @param {number} y valor en la posicion vertical 
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    /**
     * @returns {string} coordenada transformada
     */
    toString() {
        const transformacion = {
            1: 'A',
            2: 'B',
            3: 'C',
            4: 'D',
            5: 'E',
            6: 'F',
            7: 'G',
            8: 'H'
        }
        return transformacion[this.x] + this.y 
    }
}