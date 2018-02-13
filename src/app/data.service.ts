import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getTechnologies() {
    return this.http.get('http://localhost:3000/api/technologies');
  }
  getPosts() {
    return this.http.get('http://localhost:3000/api/posts');
  }
}
