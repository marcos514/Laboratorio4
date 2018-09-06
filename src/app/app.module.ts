import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GrillaComponent } from './grilla/grilla.component';
import { CargarComponent } from './cargar/cargar.component';



@NgModule({
  declarations: [
    AppComponent,
    GrillaComponent,
    CargarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
