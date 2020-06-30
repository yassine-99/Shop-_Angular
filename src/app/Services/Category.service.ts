import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../Models/Category.model';
@Injectable()
export class CategoryService{
  private categoryUrl: string;

  constructor(private http: HttpClient) {
    this.categoryUrl = '/Categories';
  }
  getCategoryList(): Observable<any> {
    return this.http.get(`${this.categoryUrl}`);
  }
}
