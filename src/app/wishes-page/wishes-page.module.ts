import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WishesPagePageRoutingModule } from './wishes-page-routing.module';

import { WishesPagePage } from './wishes-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WishesPagePageRoutingModule
  ],
  declarations: [WishesPagePage]
})
export class WishesPagePageModule {}
