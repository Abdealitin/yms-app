import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;
  authState: any = null;
  constructor(private route: Router, private firebaseAuth: AngularFireAuth) {
    firebaseAuth.authState.subscribe(
      auth => this.authState = auth
    )
   }

   get isUserAnonymousLoggedIn(): boolean{
    return (this.authState !== null) ? this.authState.isAnonymous: false
   }

   get currentUserId(): string{
    return (this.authState !== null) ? this.authState.uid: ''
   }

   get currentUserName(): string{
     return this.authState['email']
   }

   get currentUser(): any{
    return (this.authState !== null) ? this.authState: null;
   }

   get isUserEmailLoggedIn(): boolean{
    if((this.authState !== null) && (!this.isUserAnonymousLoggedIn)){
      return true;
    }else{
      return false;
    }
   }

   registerWithEmail(email: string, password: string){
    return this.firebaseAuth.createUserWithEmailAndPassword(email,password).then((user)=>{
      this.authState = user;
      localStorage.setItem('user', JSON.stringify(user.user));
    }).catch((err)=> { console.log(err); throw err})

   }

   googleLogin(){
    // return this.authLogin(new auth.GoogleAuthProvider())
   }

   authLogin(provider : any){

   }

   login(email: string, password: string){
    return this.firebaseAuth.signInWithEmailAndPassword(email,password).then((user)=>{
      this.authState = user; console.log(user);
      localStorage.setItem('user', JSON.stringify(user.user));
    }).catch((err)=> {console.log(err); throw err})
   }

  getStatus(){
    return this.loggedIn;
  }

  setStatus(status: boolean){
    this.loggedIn = status;
  }

  logout(){
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
  }
}
