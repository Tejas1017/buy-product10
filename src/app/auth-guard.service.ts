import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot,
     CanActivate, Router, RouterStateSnapshot,
       } from "@angular/router";
import { Observable } from "rxjs";
import { Auth } from "./auth.service";
@Injectable()

export class AuthGuard implements CanActivate{
    constructor(private authService : Auth,private router:Router){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean>| boolean  {
    return this.authService.isAuthicated()
         .then (
             (authenticated:boolean)=>{
                 if(authenticated){
                     return true
                 }
                 else{
                     this.router.navigate(['/'])
                     return false
                 }
 
             }
         )
     }

    }
