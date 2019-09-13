import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/servicios/reserva.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {
  mesas: any [];

  constructor(private reservaService: ReservaService) { }

  ngOnInit() {
   
    
  }

}
