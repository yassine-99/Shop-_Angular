import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Website} from '../Models/Website.model';

@Injectable()
export class WebsiteService{
  private webesiteUrl: string;

  constructor(private http: HttpClient) {
    this.webesiteUrl = '/WebSites';
  }
  getWebsitesList(): Observable<any> {
    return this.http.get(`${this.webesiteUrl}`);
  }
}
