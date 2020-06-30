import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StockLevel} from '../Models/Stocklevel.model';

@Injectable()
export class StocklevelService{
  private stocklevelUrl: string;

  constructor(private http: HttpClient) {
    this.stocklevelUrl = '/StockLevels';

  }
  getstocklevelList(): Observable<any> {
    return this.http.get(`${this.stocklevelUrl}`);
  }
}
