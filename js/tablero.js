class Tablero {
    constructor() {

        this.casillas = {

            'A1': new Casilla(new Torre('blanco'), new Coordenada(1, 1)),
            'B1': new Casilla(new Caballo('blanco'), new Coordenada(2, 1)),
            'C1': new Casilla(new Alfil('blanco'), new Coordenada(3, 1)),
            'D1': new Casilla(new Reina('blanco'), new Coordenada(4, 1)),
            'E1': new Casilla(new Rey('blanco'), new Coordenada(5, 1)),
            'F1': new Casilla(new Alfil('blanco'), new Coordenada(6, 1)),
            'G1': new Casilla(new Caballo('blanco'), new Coordenada(7, 1)),
            'H1': new Casilla(new Torre('blanco'), new Coordenada(8, 1)),

            'A2': new Casilla(new Peon('blanco'), new Coordenada(1, 2)),
            'B2': new Casilla(new Peon('blanco'), new Coordenada(2, 2)),
            'C2': new Casilla(new Peon('blanco'), new Coordenada(3, 2)),
            'D2': new Casilla(new Peon('blanco'), new Coordenada(4, 2)),
            'E2': new Casilla(new Peon('blanco'), new Coordenada(5, 2)),
            'F2': new Casilla(new Peon('blanco'), new Coordenada(6, 2)),
            'G2': new Casilla(new Peon('blanco'), new Coordenada(7, 2)),
            'H2': new Casilla(new Peon('blanco'), new Coordenada(8, 2)),

            
            'A3': new Casilla (null, new Coordenada(1,3)),
            'B3': new Casilla (null, new Coordenada(2,3)),
            'C3': new Casilla (null, new Coordenada(3,3)),
            'D': new Casilla (null, new Coordenada(4,3)),
            'E3': new Casilla (null, new Coordenada(5,3)),
            'F3': new Casilla (null, new Coordenada(6,3)),
            'G3': new Casilla (null, new Coordenada(7,3)),
            'H3': new Casilla (null, new Coordenada(8,3)),
            'A4': new Casilla(null, new Coordenada(1, 4)),
            'B4': new Casilla(null, new Coordenada(2, 4)),
            'C4': new Casilla(null, new Coordenada(3, 4)),
            'D4': new Casilla(null, new Coordenada(4, 4)),
            'E4': new Casilla(null, new Coordenada(5, 4)),
            'F4': new Casilla(null, new Coordenada(6, 4)),
            'G4': new Casilla(null, new Coordenada(7, 4)),
            'H4': new Casilla(null, new Coordenada(8, 4)),
            'A5': new Casilla (null, new Coordenada(1,5)),
            'B5': new Casilla (null, new Coordenada(2,5)),
            'C5': new Casilla (null, new Coordenada(3,5)),
            'D5': new Casilla (null, new Coordenada(4,5)),
            'E5': new Casilla (null, new Coordenada(5,5)),
            'F5': new Casilla (null, new Coordenada(6,5)),
            'G5': new Casilla (null, new Coordenada(7,5)),
            'H5': new Casilla (null, new Coordenada(8,5)),
            'A6': new Casilla(null, new Coordenada(1, 6)),
            'B6': new Casilla(null, new Coordenada(2, 6)),
            'C6': new Casilla(null, new Coordenada(3, 6)),
            'D6': new Casilla(null, new Coordenada(4, 6)),
            'E6': new Casilla(null, new Coordenada(5, 6)),
            'F6': new Casilla(null, new Coordenada(6, 6)),
            'G6': new Casilla(null, new Coordenada(7, 6)),
            'H6': new Casilla(null, new Coordenada(8, 6)),


            'A7': new Casilla(new Peon('negro'), new Coordenada(1, 7)),
            'B7': new Casilla(new Peon('negro'), new Coordenada(2, 7)),
            'C7': new Casilla(new Peon('negro'), new Coordenada(3, 7)),
            'D7': new Casilla(new Peon('negro'), new Coordenada(4, 7)),
            'E7': new Casilla(new Peon('negro'), new Coordenada(5, 7)),
            'F7': new Casilla(new Peon('negro'), new Coordenada(6, 7)),
            'G7': new Casilla(new Peon('negro'), new Coordenada(7, 7)),
            'H7': new Casilla(new Peon('negro'), new Coordenada(8, 7)),
        
            'A8': new Casilla(new Torre('negro'), new Coordenada(1, 8)),
            'B8': new Casilla(new Caballo('negro'), new Coordenada(2, 8)),
            'C8': new Casilla(new Alfil('negro'), new Coordenada(3, 8)),
            'D8': new Casilla(new Reina('negro'), new Coordenada(4, 8)),
            'E8': new Casilla(new Rey('negro'), new Coordenada(5, 8)),
            'F8': new Casilla(new Alfil('negro'), new Coordenada(6, 8)),
            'G8': new Casilla(new Caballo('negro'), new Coordenada(7, 8)),
            'H8': new Casilla(new Torre('negro'), new Coordenada(8, 8))
        }

    }
}