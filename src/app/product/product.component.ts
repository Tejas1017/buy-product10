import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { __values } from 'tslib';
import { DesignutilityService } from '../appServices/designutility.service';
import { Auth } from '../auth.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _cart: DesignutilityService,
    private router: Router,
    private route: ActivatedRoute, private authService: Auth) {
    this.abc = this._cart.cart;
  }

  abc: any = [];

  ngOnInit(): void {
  }
  productSelected: boolean = false

  selectedProduct = ''

  select = ''
  name: boolean = false
  addedProduct: any

  buttonName() {
    this.name = true
  }

  checkout() {
    this.router.navigate(['cart'])
    this.authService.login()
  }

  inputnumber = 0;

  plus(value: any) {
    this.productSelected = true
    this.inputnumber = this.inputnumber + 1;
    this.selectedProduct = value
    this.abc.push(this.selectedProduct)
    console.log(this.abc)
  }
  minus() {
    if (this.inputnumber != 0) {
      this.inputnumber = this.inputnumber - 1;
    }
  }
}
