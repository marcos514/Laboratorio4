import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GrillaComponent } from './grilla/grilla.component';
import { CargarComponent } from './cargar/cargar.component';
import { FormComponent } from './form/form.component';
import { PersonasComponent } from './personas/personas.component';
import { RuteoModule } from './modules/ruteo/ruteo.module';


@NgModule({
  declarations: [
    AppComponent,
    GrillaComponent,
    CargarComponent,
    FormComponent,
    PersonasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RuteoModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
