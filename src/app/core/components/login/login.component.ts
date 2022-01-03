import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { window } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { LoginService } from 'src/app/login.service';
declare const gapi: any;
declare var FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoginMode = true;
  constructor(private route: Router,
     private loginService: LoginService,
      private authService: AuthService,
       private http: HttpClient,
       private ngZone: NgZone) { 
        // window.onSignIn = (user: any) => ngZOne.run(
        //   () => {this.afterLogin(user)}
        // )
       }

       onSwitchMode(){
        this.isLoginMode = !this.isLoginMode;
      }

  ngOnInit(): void {
  }

  // afterLogin(user: any){
  //   this.authService.setStatus(true);
  //   this.route.navigate(['/dashboard']);
  //   console.log(user);
  // }

  // data ={
  //   email: 'eve.holt@reqres.in',
  //   password: 'cityslicka'
  // }

  submitLogin(){
    console.log("submit login to facebook");
    // FB.login();
    FB.login((response: any)=>
        {
          console.log('submitLogin',response);
          if (response.authResponse)
          {
            console.log('login successful Success!');
            sessionStorage.setItem("imageUrl","http://graph.facebook.com/" + response.authResponse.userID + "/picture?type=square");
            sessionStorage.setItem("name","Abdeali Tinwala");
            this.authService.setStatus(true);
            this.route.navigate(['/dashboard']);
          }
           else
           {
           console.log('User login failed');
         }
      });

  }

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  option = {
    headers: this.httpHeaders
  }

  onSubmit(data: any){
    if(this.isLoginMode){
      this.authService.login(data.email, data.password).then(()=>{
        this.route.navigate(['/dashboard']);
        this.authService.setStatus(true);
      }).catch(err => {
        alert(err)
      })
    }else{
      this.authService.registerWithEmail(data.email, data.password).then(()=>{
        this.route.navigate(['/dashboard'])
        this.authService.setStatus(true);
      }).catch(err => {
        alert(err)
      })
    }
    // this.http.post<any>('https://reqres.in/api/login',data,this.option).toPromise().then((res: any)=>{
    //   console.log(res);
    //   sessionStorage.setItem("token",res.token);
    //   this.authService.setStatus(true);
    //   this.route.navigate(['/dashboard']);
    // },
    // (error) =>{
    //   console.log(error)
    //   alert('Enter Username and Password is wrong!')
    // })
  }
  // { email: 'eve.holt@reqres.in',
  //   password: 'cityslicka'}

  
  public auth2: any;
  public async googleInit() {
    await gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '41420512769-s9s1i3j487do93dof34g1f5gsjlulna7.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('googleBtn'));
    });
  }
  public attachSignin(element: any) {
    this.auth2.attachClickHandler(element, {},
      (googleUser: any) => {
        let profile = googleUser.getBasicProfile();
        // console.log('Token || ' + googleUser.getAuthResponse().id_token);
        // console.log('ID: ' + profile.getId());
        // console.log('Name: ' + profile.getName());
        // console.log('Image URL: ' + profile.getImageUrl());
        // console.log('Email: ' + profile.getEmail());
        sessionStorage.setItem("token",googleUser.getAuthResponse().id_token);
        sessionStorage.setItem('name' ,profile.getName());
        sessionStorage.setItem('imageURL',profile.getImageUrl());
        sessionStorage.setItem('email',profile.getEmail());
        // setTimeout(() => {
        //   this.authService.setStatus(true);
        //   this.route.navigate(['/dashboard']);
        // },2000)
        // this.ngZone.runOutsideAngular(()=>{this.authService.setStatus(true);this.login})
        this.ngZone.run(()=>{this.authService.setStatus(true);this.login()})

      }, (error: any) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

  login(){
    this.authService.setStatus(true);
        this.route.navigate(['/dashboard']);
  }

ngAfterViewInit(){
      this.googleInit();
}
}
