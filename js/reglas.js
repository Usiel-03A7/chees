class Reglas {

    /**
     * 
     * @param {Array<Coordenada>} movimientos son los movimientos que puede realizar la pieza con base a un
     *  plano cartesiano 
     * @param {boolean} limitado si es true la pieza solo puede moverse en una direccion, 
     * si es false la pieza puede moverse en todas las direcciones
     */

    constructor(movimientos, limitado) {
        this.movimientos = movimientos;
        this.limitado = limitado;
    }

    /**
     * 
     * @param {Coordenada} coordenada coordenada de la pieza en numero
     * @returns {Array<string>} array de coordenadas en string
     */

    getMovimientos(coordenada) {

        if (this.limitado) {
            const nurevasCor = this.movimientos.map((movimiento) => {
                return new Coordenada(coordenada.x + movimiento.x, coordenada.y + movimiento.y)
            });
            return nurevasCor.filter(coordenada => coordenada.x <= 8 && coordenada.x >= 1 && coordenada.y <= 8 && coordenada.y >= 1).map((coordenada) => coordenada.toString())
        }
        return this.movimientos.map((movimiento) => {
            return new Coordenada(coordenada.x + movimiento.x, coordenada.y + movimiento.y).toString()
        });

    }

}