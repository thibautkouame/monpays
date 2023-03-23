import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoixethniesPage } from './choixethnies.page';

const routes: Routes = [
  {
    path: '',
    component: ChoixethniesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoixethniesPageRoutingModule {}
