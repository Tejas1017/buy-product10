import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DesignutilityService } from '../appServices/designutility.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _cart:DesignutilityService,
    private router:Router,
    private route:ActivatedRoute) {
    this.abc = this._cart.cart;
   }
  
   abc : any = [];

  ngOnInit(): void {
  }
  productSelected: boolean= false
  selectedProduct = ''
 
  select = ''
  name:boolean = false
  addedProduct:any
  
  productedOncart(value:any){
    
    this.productSelected =true
    this.selectedProduct = value
  
    this.abc.push(this.selectedProduct)
    

    console.log(this.abc)
    

  }
  buttonName(){
    this.name = true
  }
  
  checkout(){

   this.router.navigate(['cart'])
  }
 
}
