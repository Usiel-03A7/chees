class Rey extends Pieza {
    /**
     * 
     * @param {'blanco' | 'negro'} color 
     */
    constructor(color) {
        const reglas = new Reglas([
            new Coordenada(-1,+1), new Coordenada(+0,+1), new Coordenada(+1,+1),
            new Coordenada(-1,+0),                        new Coordenada(+1,+0),
            new Coordenada(-1,-1), new Coordenada(+0,-1), new Coordenada(+1,-1)
        ], true);
        super(color,'Rey',reglas)
        
    } 
}