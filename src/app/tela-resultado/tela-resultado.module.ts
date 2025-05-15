import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaResultadoPageRoutingModule } from './tela-resultado-routing.module';

import { TelaResultadoPage } from './tela-resultado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaResultadoPageRoutingModule
  ],
  declarations: [TelaResultadoPage]
})
export class TelaResultadoPageModule {}
