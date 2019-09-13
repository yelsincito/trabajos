import { Component, OnInit } from '@angular/core';
import { pollos } from 'src/app/ModelosPedido/pollos.model';
import { CartasService } from 'src/app/servicios/cartas.service';

@Component({
  selector: 'app-pollos',
  templateUrl: './pollos.component.html',
  styleUrls: ['./pollos.component.css']
})
export class PollosComponent implements OnInit {
      pollos: pollos[];

  constructor(
    private pedidos1: CartasService,
  ) { }

  ngOnInit() {
    this.pollos = [
      {id: 1, nombre: 'pollo a lo rey', precio: 7.50, descripcion:'lo mejor de la casa dggffbcnhn',categoria:'leña'},
      {id: 2, nombre: 'pollo a lo rey', precio: 12, descripcion:'lo mejor de la casacxcvhfghngfnvvb',categoria:'brasa'},
      {id: 3, nombre: 'pasarella', precio: 10, descripcion:'lo mas delicioso del nortevcnvvghmghmhgmghmghm',categoria:'1/4'},
      {id: 4, nombre: 'pasarella', precio: 20, descripcion:'lo mas delicioso del norte',categoria:'1'},
      {id: 5, nombre: 'pollo a la leña', precio: 7.50, descripcion:'lo mejor de la casa',categoria:'leña'},
      {id: 6, nombre: 'pollo a lo pobre', precio: 15, descripcion:'lo mejor de la casa',categoria:'brasa'},
      {id: 7, nombre: 'pasarella peruana', precio: 12, descripcion:'lo mas delicioso del norte',categoria:'1/4'},
      {id: 8, nombre: 'pasarella extranjera', precio: 13, descripcion:'lo mas delicioso del norte',categoria:'1'},
    ]
  }
  agregar(pollo: pollos) {this.pedidos1.AgregarPollo(pollo,1);   
  }

}
