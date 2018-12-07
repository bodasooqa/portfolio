import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    // return this.http.get(`http://bodasooqa.ru:3000/api/${url}`);
    return this.http.get(`./assets/data.json`);
  }

  public addMessage(col, message) {
    return this.http.post(`http://bodasooqa.ru:3000/api/${col}`, JSON.stringify(message), { headers: { 'Content-Type': 'application/json' }});
  }
}
