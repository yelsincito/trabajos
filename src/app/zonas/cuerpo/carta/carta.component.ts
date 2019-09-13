import { Component, OnInit } from '@angular/core';
import { CartasService } from 'src/app/servicios/cartas.service';
import { carta4 } from 'src/app/ModelosPedido/carta.model';
import { refrescos } from 'src/app/ModelosPedido/refrescos.model';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  pedidos4: carta4[];
  constructor(
    private refrescocarta: CartasService,
  ) { }

  ngOnInit() {
    this.refrescocarta.listarPedido4().subscribe(
      (p) =>this.pedidos4 = p 
    );
  }
  addOrEdit() {
    
  }
  Total(): number{
    let total = 0;
    for (const item of this.pedidos4) {
       total += item.cantidad * item.refresco.precio;
      
    }
    return total;
  }

}
