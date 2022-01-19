import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService{

  private _personajes: Personaje[]=[
  {
    nombre: 'goku',
    poder: 10000
  },
  {
    nombre: 'vegeta',
    poder: 5000
  }

];

  get personajes(): Personaje[]{
    //los puntos separan los elementos del arreglo
    return this._personajes;
  }

  constructor(){

  }

  //agrego metodo
  agregarPersonaje(personaje:Personaje){
    this._personajes.push(personaje);
  }

}
