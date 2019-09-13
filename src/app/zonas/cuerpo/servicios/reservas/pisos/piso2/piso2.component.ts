import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/servicios/reserva.service';

@Component({
  selector: 'app-piso2',
  templateUrl: './piso2.component.html',
  styleUrls: ['./piso2.component.css']
})
export class Piso2Component implements OnInit {
  mesas2: any [];
  constructor(private reservaService: ReservaService) { }

  ngOnInit() {
    this.mesas2= this.reservaService.obtenerMesasPiso3();
  }

}
