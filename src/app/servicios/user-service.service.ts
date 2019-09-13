import { Injectable } from '@angular/core';
import { AuthService, SocialUser } from 'angularx-social-login';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
 user: SocialUser;
 _user: BehaviorSubject<SocialUser>;
  constructor() {
    const user = JSON.parse(localStorage.getItem('userKey'));
    this._user= new BehaviorSubject<SocialUser>(user?user:null);
   }

  public  getUser():Observable<SocialUser>  {
    return this._user.asObservable();
  }
  
  public setUser(user: SocialUser): void {
    localStorage.setItem('userKey', JSON.stringify(user));
    this._user.next(user);
  }
}
