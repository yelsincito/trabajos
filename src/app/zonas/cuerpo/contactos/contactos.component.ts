import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { UserServiceService } from 'src/app/servicios/user-service.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
   user1: AuthService;
  constructor(private authService: AuthService) { }

  ngOnInit() {
 
  }
}
