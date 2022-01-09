import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
  <h1>{{title}}</h1>

<!-- <button (click)="sumar()">+1</button> -->
  <button (click)="acumular(+1)">+1</button>
  <span>{{numero}}</span>

  <button (click)="acumular(-1)">-1</button>


  <h2>tarea</h2>
  <h3>la base es: <strong> {{base}} </strong></h3>
  <button (click)="acumular(base)">{{base}}</button>
  <span>{{numero}}</span>

  <button (click)="acumular(-base)">{{base}}</button>

  `

})
export class ContadorComponent {

  title: string= 'Contador';
  numero: number=10;
  base:number= 5;
  /* sumar(){
    this.numero+=1;
  }
  restar(){
    this.numero-=1;
  } */
  acumular(valor: number){
    this.numero +=valor;
  }
}
