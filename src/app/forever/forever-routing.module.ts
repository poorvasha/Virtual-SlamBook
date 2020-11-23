import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForeverPage } from './forever.page';

const routes: Routes = [
  {
    path: '',
    component: ForeverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForeverPageRoutingModule {}
