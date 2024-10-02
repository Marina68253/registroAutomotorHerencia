import { Auto } from "./Auto";

export class RegistroAutomotor {
    private autos: Auto[]= [];

   public setAgregarAutos (auto:Auto):void{
   this.autos.push(auto); 
   }
public getObctenerAutos():Auto[]{
if(this.autos.length==0){
    console.log("no hay auto disponible");
}
    return this.autos;
 
    
   }

public darDeBajaAuto(auto: Auto): void {
    const index = this.autos.indexOf(auto);
    if (index !== -1) {
        this.autos.splice(index, 1);
    }
    
}
    


    
}