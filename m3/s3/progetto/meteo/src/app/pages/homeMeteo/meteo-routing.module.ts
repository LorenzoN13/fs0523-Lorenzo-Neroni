import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeteoComponent } from './meteo.component';
import { MeteoviewComponent } from '../meteoview/meteoview.component';

const routes: Routes = [{ path: '', component: MeteoComponent },
{
  path:'pageview/:id',
  component:MeteoviewComponent,
  title:'pageview'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeteoRoutingModule { }
