import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoixethniesPageRoutingModule } from './choixethnies-routing.module';

import { ChoixethniesPage } from './choixethnies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoixethniesPageRoutingModule
  ],
  declarations: [ChoixethniesPage]
})
export class ChoixethniesPageModule {}
