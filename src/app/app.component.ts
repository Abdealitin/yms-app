import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ProductService } from './core/components/product-manager/product.service';
import { UserService } from './core/components/user-manager/user.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0}),
        animate(1000)
      ])
    ])
  ]
})
export class AppComponent {
  title = 'Final-Ass';
  loggedIn=true;
  constructor(private prosuctService: ProductService, private userService: UserService, public router: Router, private loginService: LoginService, 
    private authService: AuthService){
      if(sessionStorage.getItem('token')){
        router.navigate(['/dashboard']);
        authService.setStatus(true);
      }
    prosuctService.ngOnInit();
    // userService.ngOnInit();
    this.loggedIn = authService.loggedIn;

    if(localStorage.getItem('user')){
      router.navigate(['/dashboard']);
      authService.setStatus(true);
    }
  }
  onChanges(){
    this.loggedIn = this.authService.loggedIn;
  }

  ngOnInit(){

    // navigator.geolocation.watchPosition((position) => {
    //   console.log("lat: "+position.coords.latitude+" lng: "+position.coords.longitude);
    // },(err) => {
    //   console.log(err)
    // },{
    //   enableHighAccuracy: true,
    //   timeout: 2000
    // })
  }
  
}
