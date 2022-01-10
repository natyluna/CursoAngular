import { Component, Input, Output,EventEmitter } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',

})
export class AgregarComponent  {

 /*  @Input() personajes:Personaje[]= []; */
  @Input() nuevo:Personaje={
    nombre: '',
    poder: 0
  };
 /*hijo emite valor al padre*/
 // @Output() onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor (private dbzService: DbzService){

  }
  agregar(){
    if(this.nuevo.nombre.trim().length ===0){
      return;
    }
    this.dbzService.agregarPersonaje(this.nuevo);
   /*  event.preventDefault();  *///prevee el doc por defecto
    //console.log(this.nuevo);
    /* this.personajes.push(this.nuevo); */
    //this.onNewPersonaje.emit(this.nuevo); emision
    this.nuevo={
      nombre: '',
      poder: 0
    }
  }
  //recibe el dato con el event
 /*  cambiarNombre(event: any){
    console.log(event.target.value);
  } */


}
