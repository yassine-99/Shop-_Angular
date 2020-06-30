import { Component, OnInit } from '@angular/core';
import {Product} from '../Models/Product.model';
import {ProductService} from '../Services/Product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent   {
  products: Product[] = Array<Product>();
  constructor(private productService: ProductService) {
    console.log('here');
    this.productService.getProductList().subscribe(data => {
      this.products = data;
      console.log('res = ', this.products);
    });
  }
}
