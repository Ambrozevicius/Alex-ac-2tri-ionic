import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaResultadoPage } from './tela-resultado.page';

const routes: Routes = [
  {
    path: '',
    component: TelaResultadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaResultadoPageRoutingModule {}
