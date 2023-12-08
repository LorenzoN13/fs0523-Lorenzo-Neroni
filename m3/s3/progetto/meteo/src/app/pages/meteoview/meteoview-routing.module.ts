import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeteoviewComponent } from './meteoview.component';

const routes: Routes = [{ path: '', component: MeteoviewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeteoviewRoutingModule { }
