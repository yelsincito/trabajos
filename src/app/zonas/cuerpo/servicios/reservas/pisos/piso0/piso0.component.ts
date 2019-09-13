import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/servicios/reserva.service';

@Component({
  selector: 'app-piso0',
  templateUrl: './piso0.component.html',
  styleUrls: ['./piso0.component.css']
})
export class Piso0Component implements OnInit {

  mesas: any [];

  constructor(private reservaService: ReservaService) { }
   
  ngOnInit() {
    this.mesas= this.reservaService.obtenerMesasPiso1();
  }

}
