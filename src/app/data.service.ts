import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getData(url) {
    return this.http.get(`http://localhost:3000/api/${url}`);
  }

  public addMessage(col, message) {
    return this.http.post(`http://localhost:3000/api/${col}`, JSON.stringify(message), { headers: { 'Content-Type': 'application/json' }});
  }
}
