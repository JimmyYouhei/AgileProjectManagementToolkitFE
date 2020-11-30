import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';

const RoutesConfig : Routes = [
    {path : 'home' , loadChildren: () => import('./module/home/home.module').then(m => m.HomeModule) }, 
    {path : 'projects' , loadChildren: () => import('./module/project/project.module').then(m => m.ProjectModule) }, 
    {path : '**' , redirectTo : '/home' , pathMatch: 'full'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(RoutesConfig)
  ],

  exports: [RouterModule]

})
export class AppRoutingModule { }
