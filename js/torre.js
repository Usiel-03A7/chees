class Torre extends Pieza {
    /**
     * 
     * @param {'blanco' | 'negro'} color 
     */
    constructor(color) {
        let arregloMovimientos= [new Coordenada(0,1),new Coordenada(-1,0),new Coordenada(1,0),new Coordenada(0,-1)]

        const arrayDeArrayMovimientos = arregloMovimientos.map(cordenada=>{
            let arrayAux =[];
            for (let i = 0; i <=7; i++) {
                if (cordenada.x!=0) {
                    if (cordenada.x < 0) {
                        arrayAux.push(new Coordenada(i+1,cordenada.y))    
                    }
                    else{
                        
                        arrayAux.push(new Coordenada(-i-1,cordenada.y)) 
                    }
                } 
                if(cordenada.y!=0){
                    if (cordenada.y < 0) {
                        arrayAux.push(new Coordenada(cordenada.x,-i-1))    
                    }
                  else{
                    arrayAux.push(new Coordenada(cordenada.x,i+1))
                  }
                }        
            }
            return arrayAux
        })

        const reglas = new Reglas(arrayDeArrayMovimientos.flat(), true);
        super(color,'Torre',reglas)
        
    }  

}