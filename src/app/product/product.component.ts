import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  public cartCount:number = 0;
  constructor(private _cartService: CartService) {}

  ngOnInit(): void {}
  add(){
    this._cartService.setValue(this.cartCount);
  }
}
