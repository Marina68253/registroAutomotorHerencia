import { RegistroAutomotor } from "./RegistroAutomotor";

export class Vehiculo {
    protected modelo: number;
    protected marca: string;
    protected color: string;
    protected patente: string;


    constructor(modelo: number, marca: string, color: string, patente: string) {
        this.modelo = modelo;
        this.marca = marca;
        this.color = color;
         this.patente= patente;
    }
    public getModelo(): number {
        return this.modelo;
    }
    public getMarca(): string {
        return this.marca;
    }
    public getColor(): string {
        return this.color;

    }
     public getPatente():string{
        return this.patente;
     }
    //setter
    public setModelo(modelo: number): void {
        this.modelo = modelo;
    }
    public setMarca(marca: string): void {
        this.marca = marca;
    }
    public setColor(color: string): void {
        this.color = color;
    }
    public setPatente(patente:string):void{
        this.patente=this.color;
    }


}
