import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuAccPageRoutingModule } from './menu-acc-routing.module';

import { MenuAccPage } from './menu-acc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuAccPageRoutingModule
  ],
  declarations: [MenuAccPage]
})
export class MenuAccPageModule {}
