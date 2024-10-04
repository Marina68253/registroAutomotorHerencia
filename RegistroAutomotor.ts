import { Auto } from "./Auto";
import { Camion } from "./Camion";
import { Moto } from "./Moto";

export class RegistroAutomotor {
    private autos: Auto[] = [];
    private camion: Camion[] = [];
    private motos: Moto[] = [];

    public setAgregarAuto(auto: Auto): void {
        this.autos.push(auto);
        console.log("Auto agregados");
    }

    //----------Autos----------------
    public getObctenerAutos(): Auto[] {
        if (this.autos.length == 0) {
            console.log("no hay auto disponible");
        }

        return this.autos;
    }

    public darDeBajaAuto(auto: Auto): void {
        const index = this.autos.indexOf(auto);
        if (index !== -1) {
            this.autos.splice(index, 1);
            console.log("Auto dado de baja ");
        }
    }

    //---------------Camion-------------------------
    public setAgregarCamion(camion: Camion): void {
        this.camion.push(camion);
       console.log("vehiculos agregados");
    }

    public getObctenerCamion():Camion[] {
        if (this.camion.length == 0) {
            console.log("no hay auto disponible");
        }
        return this.camion;
    }

    public darDeBajaCamion(camion: Camion): void {
        const index = this.camion.indexOf(camion);
        if (index !== -1) {
            this.camion.splice(index, 1);
            console.log("camion dado de baja ");
        }
    }
    //--------------MOTO-----------------------
    public setAgregarMoto(motos: Moto): void {;
        this.motos.push(motos)
       console.log("Moto agregados");
    }
    public getObctenerMoto(): Moto[] {
        if (this.motos.length == 0) {
            console.log("no hay auto disponible");
        }
        return this.motos;
    }
    public darDeBajaMoto(motos: Moto): void {
        const index = this.motos.indexOf(motos);
        if (index !== -1) {
            this.motos.splice(index, 1);
            console.log("moto dado de baja");
        }
    }
}