import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrillaComponent } from '../../grilla/grilla.component';
import { CargarComponent } from '../../cargar/cargar.component';
import {Routes,RouterModule} from "@angular/router";
import { FormComponent } from '../../form/form.component';
import { PersonasComponent } from '../../personas/personas.component';
import {authserviceService } from "../../servicios/authservice.service";

const rutas : Routes =[
  {path:"",component:FormComponent, /*autentificacion  -->*/canActivate:[authserviceService]},
  {path:"grilla",component:GrillaComponent},
  {path:"form",component:CargarComponent},
  {path:"persona/:id",component:GrillaComponent,data:{title:"Lab 4"}},
  {path:"personas",component:PersonasComponent,children:[
  {path:"cargar",component:FormComponent,data:{tipo:"cargar"}}
]}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas),
    
  ],
  exports:[RouterModule],
  declarations: [
  ]
  
})
export class RuteoModule 
{ 
}
