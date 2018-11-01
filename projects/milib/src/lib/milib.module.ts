import { NgModule } from '@angular/core';
import { MilibComponent } from './milib.component';
import { MapasComponent } from './mapas/mapas.component';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDsvFWiM2Vf54CjZNOBr_lqaWVSGfYVy_Y'
    })
  ],
  declarations: [MilibComponent, MapasComponent],
  exports: [MilibComponent, MapasComponent]
})
export class MilibModule { }
