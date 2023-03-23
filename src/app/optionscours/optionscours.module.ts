import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionscoursPageRoutingModule } from './optionscours-routing.module';

import { OptionscoursPage } from './optionscours.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionscoursPageRoutingModule
  ],
  declarations: [OptionscoursPage]
})
export class OptionscoursPageModule {}
