/*import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GrillaComponent } from './grilla/grilla.component';
import { CargarComponent } from './cargar/cargar.component';
import { FormComponent } from './form/form.component';
import { PersonasComponent } from './personas/personas.component';
import { RuteoModule } from './modules/ruteo/ruteo.module';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './servicios/data.service';
import {HttpComponent} from "./http/http.component";
import { LoginComponent } from './login/login.component';

//{path:"",component:"",canactivaté[servicios]}
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    GrillaComponent,
    CommonModule,
    ApplicationRef,
    CargarComponent,
    FormComponent,
    PersonasComponent,
    HttpComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RuteoModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDsvFWiM2Vf54CjZNOBr_lqaWVSGfYVy_Y'
    })
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule { }*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MapaComponent } from "./mapa/mapa.component";

import { AgmCoreModule } from '@agm/core';
import { MilibModule } from "../../projects/milib/src/lib/milib.module";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    MilibModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDsvFWiM2Vf54CjZNOBr_lqaWVSGfYVy_Y'
    })
  ],
  providers: [],
  declarations: [ AppComponent, MapaComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

