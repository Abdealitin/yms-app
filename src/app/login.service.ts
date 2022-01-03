import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedIn = false;
  constructor( ) { }

  setLogin(data: boolean){
    this.loggedIn = data;
  }
}
