class Peon extends Pieza {
    /**
     * 
     * @param {'blanco' | 'negro'} color 
     */
    constructor(color) {
        let reglas = new Reglas([new Coordenada(0,1)], true);
        if(color==='negro'){
            reglas = new Reglas([new Coordenada(0,-1)], true)
        }
        super(color,'Peon',reglas)
        
    }  

}