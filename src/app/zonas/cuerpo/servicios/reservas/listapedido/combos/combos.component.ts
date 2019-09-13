import { Component, OnInit } from '@angular/core';
import { combos } from 'src/app/ModelosPedido/combos.model';
import { CartasService } from 'src/app/servicios/cartas.service';

@Component({
  selector: 'app-combos',
  templateUrl: './combos.component.html',
  styleUrls: ['./combos.component.css']
})
export class CombosComponent implements OnInit {
        combos: combos[];
  constructor(
    private pedidos2: CartasService,
  ) { }

  ngOnInit() {
    this.combos = [
      {id: 1, nombre: 'mostro', precio: 5.50, descripcion: 'pollos de la mejor marca al mejor precio',},
      {id: 2, nombre: 'mostrito', precio: 12, descripcion:'coca cola'},
      {id: 3, nombre: 'reymix', precio: 10, descripcion:'pepsi'},
      {id: 4, nombre: 'junior', precio: 20, descripcion:'fanta'},
      {id: 5, nombre: 'doble', precio: 7.50, descripcion:'kola real'},
      {id: 6, nombre: 'triple', precio: 15, descripcion:'oro'},
      {id: 7, nombre: 'clasico', precio: 12, descripcion:'cristal'},
      {id: 8, nombre: 'rey', precio: 13, descripcion:'cielo'},
    ]
  }
  agregar(combo: combos){this.pedidos2.Agregarcombo(combo, 1);
  }
}
