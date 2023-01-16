class Peon extends Pieza {
    /**
     * 
     * @param {'blanco' | 'negro'} color 
     */
    constructor(color) {
        const reglas = new Reglas([new Coordenada(0,1)], true);
        super(color,'Peon',reglas)
        
    }  

}