import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

export interface ApiResult {
  Search: any[];
}

@Injectable({
  providedIn: 'root'
})
export class FilmSerieService {

  selectedOption: string = '';
  searchTerm: string = '';

  setSelectedOption(option: string) {
    this.selectedOption = option;
  }

  getValueFromService() {
    const selectedOption = this.selectedOption;
    console.log(selectedOption);
  }

  getSelectedOption() {
    return this.selectedOption;
  }

  setSearchTerm(option: string) {
    this.searchTerm = option;
  }

  getSearchTermFromService() {
    const searchTerm = this.searchTerm;
    console.log(searchTerm);
  }

  getSearchTerm() {
    return this.selectedOption;
  }

  constructor(private http:HttpClient) { }

  getFilm(): Observable<ApiResult> {
    return this.http.get<ApiResult>
    (`${environment.baseUrl}${environment.apiKey}&s=${this.searchTerm}&type=${this.selectedOption}`)
  }

  getSerie(): Observable<ApiResult> {
    return this.http.get<ApiResult>
    (`${environment.baseUrl}${environment.apiKey}&s=abc&type=series`)
  }

}
