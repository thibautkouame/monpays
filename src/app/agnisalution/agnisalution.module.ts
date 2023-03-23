import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgnisalutionPageRoutingModule } from './agnisalution-routing.module';

import { AgnisalutionPage } from './agnisalution.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgnisalutionPageRoutingModule
  ],
  declarations: [AgnisalutionPage]
})
export class AgnisalutionPageModule {}
