import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForeverPageRoutingModule } from './forever-routing.module';

import { ForeverPage } from './forever.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForeverPageRoutingModule
  ],
  declarations: [ForeverPage]
})
export class ForeverPageModule {}
