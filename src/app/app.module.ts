import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    GrillaComponent,
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
    HttpClientModule
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule { }
