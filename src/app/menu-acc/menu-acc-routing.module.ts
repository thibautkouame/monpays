import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuAccPage } from './menu-acc.page';

const routes: Routes = [
  {
    path: '',
    component: MenuAccPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuAccPageRoutingModule {}
