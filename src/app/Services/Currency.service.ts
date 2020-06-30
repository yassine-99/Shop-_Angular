import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Currency} from '../Models/Currency.model';

@Injectable()
export class CurrencyService{
  private currencyUrl: string;

  constructor(private http: HttpClient) {
    this.currencyUrl = '/Currencies';
  }
  getCurrenciesList(): Observable<any> {
    return this.http.get(`${this.currencyUrl}`);
  }
}
