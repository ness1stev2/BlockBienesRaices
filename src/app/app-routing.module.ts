import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./block-bienes-raices/block-bienes-raices.module').then(m => m.BlockBienesRaicesModule)
  },
  {
    path: "**", redirectTo: "inicio"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
