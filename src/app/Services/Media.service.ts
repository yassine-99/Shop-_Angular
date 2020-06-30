import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Media} from '../Models/Media.model';

@Injectable()
export class MediaService{
  private mediaUrl: string;

  constructor(private http: HttpClient) {
    this.mediaUrl = 'http://localhost:8080/myshop/Media';
  }
  getMediaList(): Observable<any> {
    return this.http.get(`${this.mediaUrl}`);
  }
}
