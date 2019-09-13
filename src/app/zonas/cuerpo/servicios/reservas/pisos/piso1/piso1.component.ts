import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/servicios/reserva.service';

@Component({
  selector: 'app-piso1',
  templateUrl: './piso1.component.html',
  styleUrls: ['./piso1.component.css']
})
export class Piso1Component implements OnInit {
  mesas1: any [];
  
  constructor(private reservaService: ReservaService) { }

  ngOnInit() {
    
    this.mesas1= this.reservaService.obtenerMesasPiso2();
  }

}
