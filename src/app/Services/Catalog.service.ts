import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogService{

  private catalogsUrl: string;
  constructor(private http: HttpClient) {
    this.catalogsUrl = '/Catalogs';
  }
  getCatalogList(): Observable<any> {
    return this.http.get(`${this.catalogsUrl}`);
  }
}

