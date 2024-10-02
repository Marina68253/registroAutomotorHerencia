import { Auto } from "./Auto";
import { RegistroAutomotor } from "./RegistroAutomotor";

 
 const auto1=new Auto(2017,"chevrolet","bordo",4);
 const auto2=new Auto(2017,"chevrolet","violeta",4);
 const regi=new RegistroAutomotor();

 regi.setAgregarAutos(auto1);
 regi.setAgregarAutos(auto2);
 console.log(regi.getObctenerAutos());
 console.log(regi.darDeBajaAuto(auto1));
 console.log(regi.getObctenerAutos());
 auto2.setMarca("Gol");
 
 console.log(regi.getObctenerAutos())
