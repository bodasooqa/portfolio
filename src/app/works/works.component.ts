import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
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
      $('.works').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        nextArrow: '<i class="slick-button fa fa-angle-right"></i>',
        prevArrow: '<i class="slick-button fa fa-angle-left"></i>',
      });
    });

    this.dataService.getData('works')
      .subscribe(data => {
        this.works = data;
      });
  }

}
