import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'auth',loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
  { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'meteo', loadChildren: () => import('./pages/homeMeteo/meteo.module').then(m => m.MeteoModule) },
  { path: 'meteoview', loadChildren: () => import('./pages/meteoview/meteoview.module').then(m => m.MeteoviewModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
