import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  products!: any;
  product: any;
  id!: number;
  constructor(private productService: ProductService, private route: ActivatedRoute, private location: Location) { }
  myThumbnail="";
  myFullresImage="";
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.products = this.productService.getProducts();
    this.product = this.products[this.id-1];
    this.myThumbnail = this.product.image;
    this.myFullresImage = this.product.image;
  }

  onPress(){
    this.location.back()
  }

}
