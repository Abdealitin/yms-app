import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {

  url = "https://yms-app-49061-default-rtdb.firebaseio.com/products.json";

  products: any;
  constructor(private http: HttpClient) { 
    this.http.get(this.url).subscribe(
      (response) => {this.products = response},
      (error => {console.log(error)})
    );
  }
  ngOnInit(): void {
    // this.http.get('https://fakestoreapi.com/products').subscribe(
    //   (response) => {this.products = response, console.log(response)},
    //   (error => {console.log(error)})
    // );
    //Hello
  }

  getProducts(){
    return this.products;
  }

  addProducts(products: any[]){
    return this.http.put(this.url, products);
  }
}
