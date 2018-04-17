import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getData(url) {
    return this.http.get(`http://bodasooqa.ru:3000/api/${url}`);
  }
}
