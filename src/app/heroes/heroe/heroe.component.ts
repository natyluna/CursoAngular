 import { Component } from '@angular/core';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent{
  nombre:string= "batman";
  edad:number= 25

  //propiedad metodo
  get nombreCapitalizado(){
    return this.nombre.toUpperCase();
  }
  //creo metodo
  obtenerNombre():string {
    return `${this.nombre}- ${this.edad}`;
  }


  cambiarNombre():void {
    this.nombre ="Spiderman";
  }
  cambiarEdad():void {
    this.edad= 30
  }
}

