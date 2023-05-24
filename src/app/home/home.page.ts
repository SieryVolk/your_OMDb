import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { FilmSerieService } from '../servizi/filmSerie.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  selectedOption: string = 'movie';
  searchTerm: string = '';
  elencoFilm: any = [];

  constructor(private filmSerieService: FilmSerieService, private loadingCtrl: LoadingController, private navCtrl: NavController) {}

  ngOnInit() {
  }


  saveSearchTerm() {
    console.log(this.searchTerm)
    console.log(this.selectedOption)
  }

  handleRadioChanges() {
    console.log(this.selectedOption)
  }

  public pickerColumns = [
    {
      name: 'sort',
      options: [
        {
          text:'By year',
          value:'year',
        },
        {
          text:'By name',
          value:'name',
        },
      ]
    }
  ];

  // public pickerButtons = [
  //   {
  //     text:'cancel',
  //     role:'cancel',
  //   },
  //   {
  //     text:'confirm',
  //     handler: (value:any) => {
  //       window.alert(`You selected: ${value.sort.value}`);
  //     },
  //   },
  // ];

  navigateToNextPage() {
    this.filmSerieService.setSelectedOption(this.selectedOption);
    this.filmSerieService.setSearchTerm(this.searchTerm);
    this.navCtrl.navigateForward('/listaFilm', {
      queryParams: {
        selectedOption: this.selectedOption
      }
    });
  }
}
