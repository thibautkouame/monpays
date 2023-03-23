import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionscoursPage } from './optionscours.page';

const routes: Routes = [
  {
    path: '',
    component: OptionscoursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionscoursPageRoutingModule {}
