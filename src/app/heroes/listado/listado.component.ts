import { Component, OnInit } from '@angular/core';
import { clear } from 'console';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

 heroes: string[]= ['batman','hulk','goku','iroman'];
 heroeBorrado: string='';

 borrarHeroe(){
   //shift borra el primer elemento,
   this.heroeBorrado= this.heroes.shift() || '';

 }


}
