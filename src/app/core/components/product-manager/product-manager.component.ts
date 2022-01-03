import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0}),
        animate(1000)
      ])
    ])
  ]
})
export class ProductManagerComponent implements OnInit {
  products: any[] = [];
  // Pagination parameters.
  p: number = 1;
  count: number = 4;
  constructor(private productService: ProductService) {
   }
  

  ngOnInit(): void {
    console.log(this.productService.getProducts());
    this.products = this.productService.getProducts();
  }

}
