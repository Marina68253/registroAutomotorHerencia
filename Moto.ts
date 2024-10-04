import { Vehiculo } from "./Vehiculo";

export class Moto extends Vehiculo{
 private escape:number; 
    
constructor(modelo: number, marca: string, color: string,escape:number) {
super(modelo, marca, color)
this.escape=escape;
  
}
public getEscape():number{
    return this.escape;
}
public setEscape(escape:number):void{
    this.escape=escape;
}
}