import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";

declare var $;

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {

  blockState = false;
  public messages;
  num = 0;

  constructor(
    private dataService: DataService,
  ) {}

  ngOnInit() {
    this.dataService.getAll('messages').subscribe(data => {
      this.messages = data;
      this.num = data.length;
    });
  }

  showMessage(message = '') {
    this.blockState = !this.blockState;
    setTimeout(() => {
      $('#message').text(message);
    }, 100);
  }
}
