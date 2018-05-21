import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

declare var $;

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
    this.message.name = '';
    this.message.email = '';
    this.message.subject = '';
    this.message.text = '';
  }

  showAlert() {
    if ($('.alert-msg').length === 0) {
      const alert = document.createElement('div');
      const par = document.createElement('p');

      par.innerHTML = 'Ваше сообщение успешно отправлено.';
      $(alert).append(par);
      $(alert).addClass('alert-msg');
      $(alert).addClass('access');
      $('body').append(alert);
      setTimeout(() => {
        $(alert).css('opacity', '1');
      }, 10);
      setTimeout(() => {
        $(alert).css('opacity', '0');
        setTimeout(() => {
          $(alert).remove();
        }, 500);
      }, 5000);
    }
  }
}
