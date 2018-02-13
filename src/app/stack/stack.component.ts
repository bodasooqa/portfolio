import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

declare var $: any;

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {
  technologies: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    $(document).ready(() => {
      $('.technologies').slick({
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: '<i class="slick-button fa fa-angle-right"></i>',
        prevArrow: '<i class="slick-button fa fa-angle-left"></i>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    });
    this.dataService.getTechnologies()
      .subscribe(data => {
        this.technologies = data;
      });
  }
}
