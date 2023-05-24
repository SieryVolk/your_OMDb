import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { FilmSerieService } from '../servizi/filmSerie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-film',
  templateUrl: './lista-film.page.html',
  styleUrls: ['./lista-film.page.scss'],
})
export class ListaFilmPage implements OnInit {

  elencoFilm: any = [];
  selectedOption: string = "";

  constructor(private filmSerieService: FilmSerieService, private loadingCtrl: LoadingController, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedOption = params['selectedOption'];
      console.log(this.selectedOption);
    });
    this.caricaFilm();
    console.log(this.selectedOption);
  }

  async caricaFilm(event? : InfiniteScrollCustomEvent) {
    const caricamento = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'crescent',
    });
    await caricamento.present();


  this.filmSerieService.getFilm().subscribe((res) => {
    caricamento.dismiss();
    this.elencoFilm = res.Search;
    // this.elencoFilm.push(res.Search);
    console.log(res);
    })

    event?.target.complete();
  }

}
