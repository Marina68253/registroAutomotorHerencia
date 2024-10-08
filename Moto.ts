import { Vehiculo } from "./Vehiculo";

export class Moto extends Vehiculo{
 private escape:number; 
    
constructor(modelo: number, marca: string, color: string, patente: string, escape:number) {
super(modelo, marca, color,patente)
this.escape=escape;
  
}
public getEscape():number{
    return this.escape;
}
public setEscape(escape:number):void{
    this.escape=escape;
}
}