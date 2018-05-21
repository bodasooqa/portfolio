import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public message = {
    name: '',
    email: '',
    subject: '',
    text: ''
  };

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onSubmit(message) {
    console.log(message);
    this.dataService.addMessage('messages', message)
      .subscribe(data => {
        return data;
      });
  }

}
