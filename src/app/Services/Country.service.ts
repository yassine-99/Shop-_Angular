import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Country} from '../Models/Country.model';


@Injectable()
export class CountryService{
  private countryUrl: string;

  constructor(private http: HttpClient) {
    this.countryUrl = '/Countries';
  }
  getCountryList(): Observable<any> {
    return this.http.get(`${this.countryUrl}`);
  }
}
