import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',

})
export class PersonajesComponent {
  //decorador para pasar datos desde el comp padre
  //@Input() personajes: Personaje[]= [];

  //creo acceso  a los personajes
  get personajes() {
    return this.dbzService.personajes;
  }
  constructor (private dbzService: DbzService){}

}
