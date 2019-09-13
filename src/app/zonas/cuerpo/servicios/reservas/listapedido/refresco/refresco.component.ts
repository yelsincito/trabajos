import { Component, OnInit } from '@angular/core';
import { refrescos,} from 'src/app/ModelosPedido/refrescos.model';
import { CartasService } from 'src/app/servicios/cartas.service';
import { carta } from 'src/app/ModelosPedido/carta.model';
import { pollos } from 'src/app/ModelosPedido/pollos.model';
import { combos } from 'src/app/ModelosPedido/combos.model';
import { Gaseosas } from 'src/app/ModelosPedido/gaseosas.model';

@Component({
  selector: 'app-refresco',
  templateUrl: './refresco.component.html',
  styleUrls: ['./refresco.component.css']
})
export class RefrescoComponent implements OnInit {
   refresco: refrescos[];
  
 
  constructor(
    private pedido4: CartasService,
  ) { }

  ngOnInit() {
   
    this.refresco =[
      
      {id: 1, nombre: 'morada', precio: 5.50, descripcion: 'Maiz, piña, cascaras de frutas dfh fgnfn',img:'assets/imagenes/morada.jpg'},
      {id: 2, nombre: 'hawallana', precio: 12.00, descripcion:'lo mejor de la casa hecho amio',img:'assets/imagenes/frosen.jpg'},
      {id: 3, nombre: 'helada', precio: 10.00, descripcion:'lo mas delicioso del norte sdgdgdgdg  ghfghf',img:'assets/imagenes/hawayana.jpg'},
      {id: 4, nombre: 'limon', precio: 20.00, descripcion:'lo mas delicioso del norte sdgdgdg hnghffg',img:'assets/imagenes/morada.jpg'},
      {id: 5, nombre: 'jora', precio: 7.50, descripcion:'lo mejor de la casa dggdfhfhfgh fghfj',img:'assets/imagenes/frosen.jpg'},
      {id: 6, nombre: 'jora y limon', precio: 15.00, descripcion:'lo mejor de la casa ghdhdhd ghjghj',img:'assets/imagenes/hawayana.jpg'},
      {id: 7, nombre: 'pisco', precio: 12.00, descripcion:'lo mas delicioso del norte dfhdh ghjg',img:'assets/imagenes/hawayana.jpg'},
      {id: 8, nombre: 'maracuya', precio: 13.00, descripcion:'lo mas delicioso del norte hdhfgh jgjtyjt',img:'assets/imagenes/hawayana.jpg'},
    ]
    
    
  }
  agregar(refresco: refrescos) {this.pedido4.Agregarrefresco(refresco, 1);
  }

} 

