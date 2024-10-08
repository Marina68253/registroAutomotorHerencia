import { Vehiculo } from "./Vehiculo";

export class Auto extends Vehiculo{
 private puerta:number; 
    
 constructor(modelo: number, marca: string, color: string, patente: string, puerta:number) {
    super(modelo, marca, color,patente)
 this.puerta=puerta;
  
}
public getPuerta():number{
    return this.puerta;
}
public setPuerta(puerta:number):void{
    this.puerta=puerta;
}
}