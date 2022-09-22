import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';
import { Cart } from '../appServices/message.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  array = []
  constructor(private _cart:DesignutilityService) {
    this.abc = this._cart.cart;
   }
   abc = []
   
   
  element = []
  serverElements = []

  ngOnInit(): void {
  }
  
  remove(index:number)
  {
    this.abc.splice(index,1)  
  }

}
