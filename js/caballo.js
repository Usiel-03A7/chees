class Caballo extends Pieza {
    /**
     * 
     * @param {'blanco' | 'negro'} color 
     */
    constructor(color) {
        const reglas = new Reglas([
            new Coordenada(-1,+2), new Coordenada(+2,-1), new Coordenada(+1,+2),
            new Coordenada(-2,+1),                        new Coordenada(+2,+1),
            new Coordenada(-1,-2), new Coordenada(-2,-1), new Coordenada(+1,-2)
        ], true);
        super(color,'Caballo',reglas)
        
    } 
}