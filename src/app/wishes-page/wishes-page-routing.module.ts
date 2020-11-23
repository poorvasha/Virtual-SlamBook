import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WishesPagePage } from './wishes-page.page';

const routes: Routes = [
  {
    path: '',
    component: WishesPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WishesPagePageRoutingModule {}
