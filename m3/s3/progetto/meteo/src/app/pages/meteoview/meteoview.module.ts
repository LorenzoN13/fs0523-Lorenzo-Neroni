import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeteoviewRoutingModule } from './meteoview-routing.module';
import { MeteoviewComponent } from './meteoview.component';


@NgModule({
  declarations: [
    MeteoviewComponent
  ],
  imports: [
    CommonModule,
    MeteoviewRoutingModule
  ]
})
export class MeteoviewModule { }
