import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DataService {

  host = 'localhost';

  constructor(private http: HttpClient) {
    this.getAll('').subscribe(data => {
      return data;
    }, error => {
      console.log(error);
    });
  }

  public getAll(col): Observable<any> {
    return this.http.get(`http://${this.host}:3000/api/${col}`);
  }

  public getProduct(col, url): Observable<any> {
    return this.http.get(`http://${this.host}:3000/api/${col}/${url}`);
  }
}
