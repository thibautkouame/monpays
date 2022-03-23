import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { MenuprincipalPage } from './menuprincipal.page';

const routes: Routes = [
  {
    path: '',
    component: MenuprincipalPage,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'parametre',
        loadChildren: () => import('../parametre/parametre-routing.module').then(m => m.ParametrePageRoutingModule)
      },
      {
        path: 'accueil',
        loadChildren: () => import('../accueil/accueil-routing.module').then(m => m.AccueilPageRoutingModule)
      },
      {
        path: '',
        redirectTo: '/menuprincipal/accueil',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menuprincipal/accueil',
    pathMatch: 'full'
  }
];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuprincipalPageRoutingModule {}
