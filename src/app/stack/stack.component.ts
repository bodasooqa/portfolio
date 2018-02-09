import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(() => {
      $('.technologies').slick({
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: '<i class="slick-button fa fa-angle-right"></i>',
        prevArrow: '<i class="slick-button fa fa-angle-left"></i>'
      });
    });
  }
}
