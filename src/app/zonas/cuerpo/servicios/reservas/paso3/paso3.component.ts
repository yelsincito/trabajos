import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/servicios/reserva.service';

@Component({
  selector: 'app-paso3',
  templateUrl: './paso3.component.html',
  styleUrls: ['./paso3.component.css']
})
export class Paso3Component implements OnInit {

  mesas: any [];

  constructor(private reservaService: ReservaService) { }

  ngOnInit() {
  
  }

}
