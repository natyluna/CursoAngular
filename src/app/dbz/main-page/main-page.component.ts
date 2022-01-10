import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent  {



nuevo: Personaje = {
  nombre: '',
  poder:0
}
/* get personajes(): Personaje[] {
  return this.dbzService.personajes;
} */
//el get se refactoriza


/* agregarNuevo(argumento: Personaje){
  this.personajes.push(argumento);
} */

//se inyecta el servicio en el componente
constructor(public dbzService: DbzService){

}

}
