import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

declare var $;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  data: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData()
      .subscribe(data => {
        this.data = data;
      });
  }

  showAlert() {
    if ($('.alert-msg').length === 0) {
      const alert = document.createElement('div');
      const par = document.createElement('p');

      par.innerHTML = 'Извините, блог временно не доступен.';
      $(alert).append(par);
      $(alert).addClass('alert-msg');
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
