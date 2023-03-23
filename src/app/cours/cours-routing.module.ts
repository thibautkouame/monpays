import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursPage } from './cours.page';

const routes: Routes = [
  {
    path: '',
    component: CoursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursPageRoutingModule {}
