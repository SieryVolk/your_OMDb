import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaFilmPage } from './lista-film.page';

const routes: Routes = [
  {
    path: '',
    component: ListaFilmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaFilmPageRoutingModule {}
