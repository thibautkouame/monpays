import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoixethniesPage } from '../choixethnies/choixethnies.page';
import { MenuAccPage } from '../menu-acc/menu-acc.page';
import { MenuprincipalPage } from '../menuprincipal/menuprincipal.page';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
