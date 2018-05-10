import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private dataService: DataService) { }

  public message = {
    name: '',
    email: '',
    subject: '',
    text: ''
  };

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
