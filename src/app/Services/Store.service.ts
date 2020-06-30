import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Store} from '../Models/Store.model';

@Injectable()
export class StoreService{
  private storeUrl: string;

  constructor(private http: HttpClient) {
    this.storeUrl = '/Stores';
  }

  getStoresList(): Observable<any> {
    return this.http.get(`${this.storeUrl}`);
  }
}
