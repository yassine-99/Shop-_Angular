import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Warehouse} from '../Models/Warehous.model';

@Injectable()
export class WarehouseService{
  private WarehouseUrl: string;

  constructor(private http: HttpClient) {
    this.WarehouseUrl = '/Warehouses';
  }
  getWarehousesList(): Observable<any> {
    return this.http.get(`${this.WarehouseUrl}`);
  }
}
