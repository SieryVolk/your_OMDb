import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaFilmPageRoutingModule } from './lista-film-routing.module';

import { ListaFilmPage } from './lista-film.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaFilmPageRoutingModule
  ],
  declarations: [ListaFilmPage]
})
export class ListaFilmPageModule {}
