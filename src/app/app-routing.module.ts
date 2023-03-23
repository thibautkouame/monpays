import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home-routing.module').then( m => m.HomePageRoutingModule) 
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'menu-acc',
    loadChildren: () => import('./menu-acc/menu-acc.module').then( m => m.MenuAccPageModule)
  },
  {
    path: 'menuprincipal',
    loadChildren: () => import('./menuprincipal/menuprincipal.module').then( m => m.MenuprincipalPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'parametre',
    loadChildren: () => import('./parametre/parametre.module').then( m => m.ParametrePageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'choixethnies',
    loadChildren: () => import('./choixethnies/choixethnies.module').then( m => m.ChoixethniesPageModule)
  },
  {
    path: 'optionscours',
    loadChildren: () => import('./optionscours/optionscours.module').then( m => m.OptionscoursPageModule)
  },
  {
    path: 'optionscours/:id',
    loadChildren: () => import('./optionscours/optionscours.module').then( m => m.OptionscoursPageModule)
  },
  {
    path: 'cours',
    loadChildren: () => import('./cours/cours.module').then( m => m.CoursPageModule)
  },
  {
    path: 'agnisalution',
    loadChildren: () => import('./agnisalution/agnisalution.module').then( m => m.AgnisalutionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
