class Alfil extends Pieza {
    /**
     * 
     * @param {'blanco' | 'negro'} color 
     */
    constructor(color) {
        let arregloMovimientos = [new Coordenada(-1, +1), new Coordenada(+1, +1), new Coordenada(-1, -1), new Coordenada(+1, -1)]
        const arregloDeArregloCordenada = arregloMovimientos.map(cordenada => {
            let ArregloAux = [];
            for (let i = -1; i <= 7; i++) {

                let cordenadaAux = new Coordenada(cordenada.x, cordenada.y)

                if (cordenada.x < 0) {
                    cordenadaAux.x = cordenadaAux.x - i - 1
                } else {
                    cordenadaAux.x = cordenadaAux.x + i + 1
                }

                if (cordenada.y < 0) {
                    cordenadaAux.y = cordenadaAux.y - i - 1
                } else {
                    cordenadaAux.y = cordenadaAux.y + i + 1

                }

                ArregloAux.push(cordenadaAux)
            }
            return ArregloAux

        })
        
        const reglas = new Reglas(arregloDeArregloCordenada.flat(),true);
        super(color, 'Alfil', reglas)

    }
}