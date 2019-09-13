import { Component, OnInit } from '@angular/core';
import { Gaseosas } from 'src/app/ModelosPedido/gaseosas.model';
import { CartasService } from 'src/app/servicios/cartas.service';

@Component({
  selector: 'app-gaseosas',
  templateUrl: './gaseosas.component.html',
  styleUrls: ['./gaseosas.component.css']
})
export class GaseosasComponent implements OnInit {
        gaseosa: Gaseosas[];
  constructor(
    private pedido3: CartasService,
  ) { }

  ngOnInit() {
    this.gaseosa = [
      {id: 1, nombre: 'gaseosa', precio: 5.50, marca: 'inka kola'},
      {id: 2, nombre: 'gaseosa', precio: 12, marca: 'coca cola'},
      {id: 3, nombre: 'gaseosa', precio: 10, marca:'pepsi'},
      {id: 4, nombre: 'gaseosa', precio: 20, marca:'fanta'},
      {id: 5, nombre: 'gaseosa', precio: 7.50, marca:'kola real'},
      {id: 6, nombre: 'gaseosa', precio: 15, marca:'oro'},
      {id: 7, nombre: 'gaseosa', precio: 12, marca:'cristal'},
      {id: 8, nombre: 'gaseosa', precio: 13, marca:'cielo'},
    ]
  }
  agregar(gaseosa: Gaseosas) {this.pedido3.Agregargaseosa(gaseosa, 1);

}
}
