import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  prod!: any;
  products : any[] = [];
  constructor(private product: ProductService) {
    this.products = product.getProducts();
  }

  ngOnInit(): void {
  }

  onSubmit(data: any){
    this.prod = {
      id: this.products.length + 1,
      title: data.title,
      description: data.description,
      category: data.category,
      price: data.price,
      image: data.image,
      rating: {
        rate: data.rate,
        count: data.count
      }
    }
    this.products.push(this.prod);
    this.product.addProducts(this.products).subscribe(
      (response) => {this.product.products = response},
      err => console.log(err)
    );
    console.log(this.prod)

  }

  initialize(){
    this.product.addProducts(this.products).subscribe(
      (response) => console.log(response),
      err => console.log(err)
    );
  }

}
