import { Vehiculo } from "./Vehiculo";

export class Camion extends Vehiculo{
 private puerta:number; 
    
constructor(modelo: number, marca: string, color: string,puerta:number) {
super(modelo, marca, color)
this.puerta=puerta;
  
}
public getPuerta():number{
    return this.puerta;
}
public setPuerta(puerta:number):void{
    this.puerta=puerta;
}
}