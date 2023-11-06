import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlockBienesRaicesRoutingModule } from './block-bienes-raices-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    BlockBienesRaicesRoutingModule,
    SharedModule
  ]
})
export class BlockBienesRaicesModule { }
