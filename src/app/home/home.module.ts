import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports:[
        FormsModule,
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        
   
    ]

})
export class HomeModule {

}