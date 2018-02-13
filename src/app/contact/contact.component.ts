import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  }

  submitContact(event, formData) {
    console.log(formData.value);
  }
}
