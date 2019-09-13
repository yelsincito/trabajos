import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/servicios/user-service.service';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 cliente: SocialUser;
  constructor(private user: UserServiceService) { }

  ngOnInit() {
    this.user.getUser().subscribe(
      (user) => this.cliente=user
    );
  }
 
}
