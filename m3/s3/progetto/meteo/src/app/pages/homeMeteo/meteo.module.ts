import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeteoRoutingModule } from './meteo-routing.module';
import { MeteoComponent } from './meteo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MeteoComponent
  ],
  imports: [
    CommonModule,
    MeteoRoutingModule,
    FormsModule
  ]
})
export class MeteoModule { }
