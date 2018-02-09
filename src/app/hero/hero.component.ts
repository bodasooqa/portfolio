import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';

declare var $: any;

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  typedOptions = {
    strings: ['сайт-визитку', 'корпоративный сайт', 'landing page', 'информационный портал', 'инетрнет-магазин'],
    typeSpeed: 40,
    backSpeed: 20,
    loop: true,
    loopCount: Infinity
  };


  constructor() { }

  ngOnInit() {
    const typed = new Typed('.typed', this.typedOptions);
    this.shineJs();

    $(window).scroll(function () {
      const scroll = $(window).scrollTop();
      $('.hero').css('background-position', `0 -${scroll / 100 * 2}rem`);
    });
  }

  shineJs() {
    function addShine() {
      if (jsLogo.className === 'js-logo1') {
        jsLogo.className = '';
        jsLogo.classList.add(classes[1]);
      } else if (jsLogo.className === 'js-logo2') {
        jsLogo.className = '';
        jsLogo.classList.add(classes[0]);
      }
    }

    const jsLogo = document.getElementById('js-logo');
    const classes = ['js-logo1', 'js-logo2'];

    setInterval(addShine, 2000);
  }
}
