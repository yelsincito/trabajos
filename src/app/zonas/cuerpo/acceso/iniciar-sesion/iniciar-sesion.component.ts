import { Component, OnInit } from '@angular/core';
/*google */
import { AuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { UserServiceService } from 'src/app/servicios/user-service.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
 logeado: boolean = false;
 cliente: SocialUser;
  constructor(private authService: AuthService, 
              private user: UserServiceService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
     if (user) {
       this.logeado =true;
       this.cliente= user;
       
     } else {
      this.logeado= false;
     }
     this.user.setUser(user);
    });
  }

  accesoGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  cerrarSesion(): void {
    this.authService.signOut();
  }

}
