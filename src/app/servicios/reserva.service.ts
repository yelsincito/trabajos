import { Injectable } from '@angular/core';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  mesasPiso1 = [
    {id: 1, numero: '1', capacidad: 4},
    {id: 2, numero: '2', capacidad: 4},
    {id: 3, numero: '3', capacidad: 4},
    {id: 4, numero: '4', capacidad: 6},
    {id: 5, numero: '5', capacidad: 4},
    {id: 6, numero: '6', capacidad: 6},
    {id: 7, numero: '7', capacidad: 4},
    {id: 8, numero: '8', capacidad: 6},
  ];
  mesasPiso2 = [
    {id: 1, numero: '1', capacidad: 4},
    {id: 2, numero: '2', capacidad: 4},
    {id: 3, numero: '3', capacidad: 4},
    {id: 4, numero: '4', capacidad: 6},
    {id: 5, numero: '5', capacidad: 4},
    {id: 6, numero: '6', capacidad: 6},
  ];
  mesasPiso3 = [
    {id: 1, numero: '1', capacidad: 4},
    {id: 2, numero: '2', capacidad: 4},
    {id: 3, numero: '3', capacidad: 4},
    {id: 4, numero: '4', capacidad: 6},
    {id: 5, numero: '5', capacidad: 4},
  ];
  constructor() { }
/*================================================*/
obtenerMesasPiso1(){
  return this.mesasPiso1;
console.log(this.mesasPiso1);
  
}
obtenerMesasPiso2(){
  return this.mesasPiso2;
console.log(this.mesasPiso2);
}
obtenerMesasPiso3(){
  return this.mesasPiso3;
console.log(this.mesasPiso3);
  
} 
}
