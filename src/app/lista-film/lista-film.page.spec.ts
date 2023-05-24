import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaFilmPage } from './lista-film.page';

describe('ListaFilmPage', () => {
  let component: ListaFilmPage;
  let fixture: ComponentFixture<ListaFilmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaFilmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
