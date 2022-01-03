import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {
  result: any;
  user: any;
  constructor(private http: HttpClient) { 
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (response) => {this.result = response;},
      (error) => {console.log(error)}
    );
  }
  ngOnInit(): void {
 
  }

  addUser(user: any){
    this.result.push(user);
  }

  getUsers(){
    
    return this.result;
  }

  getUser(id: number) {
    return this.http.get(`https://reqres.in/api/users/${id}`).pipe(
      map((response: any) => response)
    );
  }
}
