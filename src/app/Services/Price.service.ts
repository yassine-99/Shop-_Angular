import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Price} from '../Models/Price.model';

@Injectable()
export class PriceService{
  private priceUrl: string;

  constructor(private http: HttpClient) {
    this.priceUrl = '/Prices';
  }
  getPriceList(): Observable<any> {
    return this.http.get(`${this.priceUrl}`);
  }
}
