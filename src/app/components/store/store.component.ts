import { Product } from '../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private _productService:ProductService, private cart:CartService) { }

  ngOnInit() {
  }

  get products():Product[]{
    return this._productService.getProducts();
  }

  addProductToCart(product:Product){
    this.cart.addLine(product);
  }

}
