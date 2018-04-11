import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import 'swiper';
declare var $: any;

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  works: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    $(document).ready(() => {

    });

    this.dataService.getData('works')
      .subscribe(data => {
        this.works = data;
      });
  }

}
