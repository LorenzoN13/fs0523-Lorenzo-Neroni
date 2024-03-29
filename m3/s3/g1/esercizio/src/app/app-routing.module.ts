import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';


const routes: Routes = [
  {
    path:'page1',
    component:Page1Component,
    title:'Page1',
  },
  {
    path:'page2',
    component: Page2Component,
    title:'Page2'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
