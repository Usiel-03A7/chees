class Alfil extends Pieza {
    /**
     * 
     * @param {'blanco' | 'negro'} color 
     */
    constructor(color) {
        const reglas = new Reglas([
            new Coordenada(-1,+1),                          new Coordenada(+1,+1),
                                                          
            new Coordenada(-1,-1),                         new Coordenada(+1,-1)
        ], true);
        super(color,'Alfil',reglas)
        
    } 
}