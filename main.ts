import { Auto } from "./Auto";
import { Camion } from "./Camion";
import { Moto } from "./Moto";
import { RegistroAutomotor } from "./RegistroAutomotor";

const auto1 = new Auto(2017, "chevrolet", "bordo", 4);
const auto2 = new Auto(2003, "for", "negro", 4);
const camion1 = new Camion(619, "scania", "bordo", 2);
const camion2 = new Camion(622, "mercedes benz", "verde", 2);
const moto1 = new Moto(2016, "gillera smart", "azul", 0);
const moto2 = new Moto(2015, "gillera", "rojo", 0);

const registro = new RegistroAutomotor();

registro.setAgregarAuto(auto1);
registro.setAgregarCamion(camion1);
registro.setAgregarMoto(moto1);


console.log(registro.getObctenerAutos());
registro.darDeBajaAuto(auto1);
console.log(registro.getObctenerAutos());

auto2.setMarca("Gol");
registro.setAgregarAuto(auto2);
console.log(registro.getObctenerAutos());
registro.setAgregarCamion(camion2);
registro.setAgregarMoto(moto2);
console.log(registro.getObctenerMoto());
console.log(registro.getObctenerCamion());
console.log(registro.getObctenerAutos());
